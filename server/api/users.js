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
      include: [
        { model: Order, include: [{ model: CartItem, include: [Pet] }] },
      ],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //console.log("AM I WORKINGGGGG>>>????", req.body);
    const findUser = await User.findAll({
      where: {
        email: req.body.email,
      },
    });

    if (findUser===[]) {
      res.json('User already exists')
    } else {
      const newUser = await User.create(req.body);
      res.json(newUser);
    }
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
    //console.log("this is working");
    const targettedUser = await User.findByPk(req.params.id);
    await targettedUser.update(req.body);
    res.send(targettedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await User.findByPk(req.params.id);
    await deleteUser.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
