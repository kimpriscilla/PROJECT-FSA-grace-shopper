const router = require("express").Router();
const { Sequelize } = require('sequelize');
const {
  models: { Breed, Pet },
} = require("../db");
module.exports = router;

/*
SQL query
SELECT
  breeds.id,
  breeds.name,
  COUNT(pets.id) AS stock
FROM breeds
LEFT JOIN pets AS pets on breeds.id = pets.breedId
GROUP BY breeds.id

*/
router.get("/", async (req, res, next) => {
  try {
    console.log('running')
    const breeds = await Breed.findAll({
      // include: [ Pet ]
      // include: [[Sequelize.fn("COUNT", Sequelize.col("pet.id")), "pets"]]
      attributes: {
        include: [[Sequelize.fn("COUNT", Sequelize.col("pets.id")), "stock"]]
      },
      include: [{
          model: Pet, attributes: []
      }],
      group: ['Breed.id']
      })
    res.json(breeds)
  } catch (err) {
    next(err);
  }
});
