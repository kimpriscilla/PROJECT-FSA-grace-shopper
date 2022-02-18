const router = require("express").Router();
const { Sequelize } = require('sequelize');
const {
  models: { Breed, Pet },
} = require("../db");
module.exports = router;

/*
SELECT
  breeds.id,
  breeds.name,
  COUNT(pets.id) AS stock
FROM breeds
LEFT JOIN pets AS pets on breeds.id = pets.breedId
GROUP BY breeds.id, breeds.name
*/

//get all breeds
router.get("/", async (req, res, next) => {
  try {
    const breeds = await Breed.findAll({
      attributes: {
        include: [[Sequelize.fn("COUNT", Sequelize.col("pets.id")), "stock"]] //compute stock
      },
      include: [{
          model: Pet, attributes: []
      }],
      group: ['breeds.id', 'breeds.name'],
      });
    res.json(breeds)
  } catch (err) {
    next(err);
  }
});
