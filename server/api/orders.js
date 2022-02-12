const router = require('express').Router()
const { models: { Order, CartItem, User }} = require('../db');
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      attributes: ['id', 'shippingAddress', 'billingAddress']
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

router.post('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.body;

    //create new order
    let newOrder = await Order.create(req.body);
    const newOrderId = newOrder.id;

    //set parent orderID to cart items, set user ID to null so cart items disappear once order is placed
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

    res.json(newOrder);

  } catch (err) {
    next(err)
  }
});
