const router = require("express").Router();
const { Sequelize, Op } = require('sequelize');
const {
  models: { Breed, Pet },
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

//get all breeds
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
