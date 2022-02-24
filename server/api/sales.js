const router = require("express").Router();
const { Sequelize, Op } = require('sequelize');
const {
  models: { Breed, Pet, Order },
} = require("../db");
module.exports = router;

/*
SELECT
  breeds.id, breeds.name,
  SUM(pets.price) AS [Sales]
FROM Breeds
LEFT JOIN (SELECT * FROM pets WHERE pets.orderId IS NOT NULL) pets ON pets.breedId = breeds.id
GROUP BY breeds.id, breeds.name
*/

//get all sales by breed
router.get("/", async (req, res, next) => {
  try {
    const breeds = await Breed.findAll({
      attributes: {
        include: [[Sequelize.fn("SUM", Sequelize.col("pets.price")), "sales"]] //compute sales
      },
      include: [ { model: Pet, attributes: [], where: { orderId: { [Op.ne]: null } } } ],
      group: ['breeds.id', 'breeds.name'],
    })
    res.json(breeds)
  } catch (err) {
    next(err);
  }
});

//get all orders by state

/*
SELECT
  orders.sState AS 'feature',
  COUNT(orders.id) AS 'value'
FROM orders
GROUP BY orders.sState
*/

router.get('/state', async(req, res, next) => {
  try {
    const orders = await Order.findAll({
      attributes:
        [['sState', 'name'], [Sequelize.fn('COUNT', Sequelize.col('orders.id')), 'value']]
      ,
      group: ['orders.sState']
    });
    res.json(orders)
  } catch(err) {
    next(err);
  };
});
