const router = require('express').Router()
const { models: { Order }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      // explicitly select only the id and username fields - even though
      // orders' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'shippingAddress', 'billingAddress']
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
});
