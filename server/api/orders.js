const router = require('express').Router();
const stripe = require('stripe')("sk_test_51KSVFvDkRSmF4QSn3kIBI4q18XWcJWTS1oEnHnW6juu4qZySzzsopg0DP6YH38VAYkLjjnMIF6915vhMsGePMlCb00vCKGAJHD");
//console.log('stripe', require('stripe')(process.env.STRIPE_SECRET_TEST))
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors'); //make stripe request
const { models: { Order, CartItem, User }} = require('../db');
module.exports = router;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [ User ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
});

//orders for specific user
router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params.id)
    const orders = await Order.findAll({
      where: {
        userId: req.params.id
      },
      include: [ CartItem ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
});

router.post('/:id', cors (), async (req, res, next) => {

  let { amount, id, userId, shippingAddress, billingAddress } = req.body;

	try {
    //create new order
    let newOrder = await Order.create({
      shippingAddress,
      billingAddress,
      userId
    });
    const newOrderId = newOrder.id;

    //set parent orderID to cart items, set user ID to null so cart items disappear once order is placed
    console.log('update user ID to null', userId)
    await CartItem.update({
      orderId: newOrderId,
      userId: null
    }, {
      where: {
        userId //pull in user's current cart items using user ID
      }
    });

    //retrieve cart items using their parent order ID
    newOrder = await Order.findOne({
      where: {
        id: newOrderId
      },
      include: [ CartItem ]
    });

		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Grace Barker",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		});
	};

});
