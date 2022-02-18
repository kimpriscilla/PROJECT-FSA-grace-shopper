const router = require("express").Router();
const {
  models: { User, Order, CartItem, Pet },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email", "imageUrl"],
      include: [Order, CartItem],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //console.log("AM I WORKINGGGGG>>>????", req.body);
    res.send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      // include: [ Order, CartItem ]
      include: [{ model: Order, include: [CartItem] }],
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    console.log("this is working");
    const targettedUser = await User.findByPk(req.params.id);
    await targettedUser.update(req.body);
    res.send(targettedUser);
  } catch (error) {
    next(error);
  }
});
