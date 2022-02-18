const router = require("express").Router();
const {
  models: { Pet, Breed },
} = require("../db");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: [Breed],
    });
    res.json(pets);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    res.send(await Pet.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    res.json(pet);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let pet = await Pet.findByPk(req.params.id);
    await pet.update(req.body);
    pet = await Pet.findOne({
      where: {
        id: req.params.id,
      },
      include: [Breed],
    });
    res.json(pet);
  } catch (err) {
    next(err);
  }
});
