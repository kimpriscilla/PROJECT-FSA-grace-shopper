const router = require("express").Router();
const {
  models: { Pet, Breed },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    console.log('pets')
    const pets = await Pet.findAll({
      include: [ Breed ]
    });
    res.json(pets)
  } catch (err) {
    next(err);
  }
});
