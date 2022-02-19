const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51KSVFvDkRSmF4QSn3kIBI4q18XWcJWTS1oEnHnW6juu4qZySzzsopg0DP6YH38VAYkLjjnMIF6915vhMsGePMlCb00vCKGAJHD"
);
//console.log('stripe', require('stripe')(process.env.STRIPE_SECRET_TEST))
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors"); //make stripe request
const {
  models: { Order, CartItem, User, Pet },
} = require("../db");
module.exports = router;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [User, CartItem, Pet],
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//orders for specific user
router.get("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    const orders = await Order.findAll({
      where: {
        userId: req.params.id,
      },
      include: [{ model: CartItem, include: [Pet] }],
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", cors(), async (req, res, next) => {
  let { amount, id, userId, shippingAddress, billingAddress } = req.body;
  console.log(userId, "wutttttttttttt");
  try {
    //create new order
    let newOrder =
      typeof userId !== "string"
        ? await Order.create({
            shippingAddress,
            billingAddress,
            userId,
          })
        : await Order.create({
            shippingAddress,
            billingAddress,
          });
    const newOrderId = newOrder.id;

    //set parent orderID to cart items, set user ID to null so cart items disappear once order is placed
    if (typeof userId === "string") {
      await CartItem.update(
        {
          orderId: newOrderId,
          userId: null,
          authId: null,
        },
        {
          where: {
            authId: userId, //pull in user's current cart items using user ID
          },
        }
      );
    } else {
      await CartItem.update(
        {
          orderId: newOrderId,
          userId: null,
        },
        {
          where: {
            userId, //pull in user's current cart items using user ID
          },
        }
      );
    };

    //retrieve cart items using their parent order ID
    newOrder = await Order.findOne({
      where: {
        id: newOrderId,
      },
      include: [{ model: CartItem, include: [Pet] }],
    });

    const petIds = newOrder.cart_items.map(cartItem => {
      return cartItem.petId;
    });

    await Promise.all(petIds.map(petId => {
      Pet.update({
        orderId: newOrderId,
        userId
      }, {
        where: {
          id: petId
        }
      })
    }));

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Grace Barker",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json(newOrder);
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});
