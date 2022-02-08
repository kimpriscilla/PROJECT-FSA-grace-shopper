const router = require("express").Router();
const {
  models: { Pet, Breed },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: [ Breed ]
    });
    res.json(pets)
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    res.json(pet)
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let pet = await Pet.findByPk(req.params.id);
    await pet.update(req.body);
    pet = await Pet.findByPk(req.params.id);
    res.json(pet)
  } catch (err) {
    next(err);
  }
});
