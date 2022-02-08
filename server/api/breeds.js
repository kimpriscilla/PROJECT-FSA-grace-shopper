const router = require("express").Router();
const {
  models: { Breed },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const breeds = await Breed.findAll({
      attributes: ['id', 'name', 'stock']
    })
    res.json(breeds)
  } catch (err) {
    next(err);
  }
});
