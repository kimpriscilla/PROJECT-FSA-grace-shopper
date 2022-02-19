const router = require("express").Router();
const {
  models: { CartItem, Pet, User },
} = require("../db");
module.exports = router;

//load all cart items
router.get("/", async (req, res, next) => {
  try {
    const cartItems = await CartItem.findAll();
    res.json(cartItems);
  } catch (err) {
    next(err);
  }
});

//load cart items for specific user
router.get("/:id", async (req, res, next) => {
  try {
    const cartItems = await CartItem.findAll({
      where: {
        userId: req.params.id,
      },
      include: [Pet, User],
    });
    res.json(cartItems);
  } catch (err) {
    next(err);
  }
});

router.get("/guest/:auth", async (req, res, next) => {
  try {
    const cartItems = await CartItem.findAll({
      where: {
        authId: req.params.auth,
      },
      include: [Pet],
    });
    res.json(cartItems);
  } catch (err) {
    next(err);
  }
});

//delete cart items for specific user
router.delete("/:userId/:id", async (req, res, next) => {
  try {
    const { id, userId } = req.params;
    console.log(userId, "line 50, cartItems, userId");
    console.log(typeof userId * 1, "line 51, cartItem");

    userId * 1
      ? await CartItem.destroy({
          where: {
            id,
            userId,
          },
        })
      : await CartItem.destroy({
          where: {
            id,
            authId: userId,
          },
        });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.post("/guest/:petId", async (req, res, next) => {
  try {
    const { petId, authId } = req.body;
    /*const newCartItem = await CartItem.create({
      authId,
      orderId: null,
      petId,
    });*/
    console.log(petId, "line 80, cartItem.js, petId");
    const newCartItem = await CartItem.findOrCreate({
      where: { petId: petId },
      defaults: {
        authId,
        orderId: null,
        petId,
      },
    });
    res.json(newCartItem);
  } catch (error) {
    next(error);
  }
});

//add cart items for specific user
router.post("/:userId/:petId", async (req, res, next) => {
  try {
    const { userId, petId } = req.body;
    console.log(userId, petId);
    const newCartItem = await CartItem.create({
      orderId: null,
      userId,
      petId,
    });
    res.json(newCartItem);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { userId, petId, authId } = req.body;
    console.log(authId, "hey Im in the put route");
    console.log(petId, "115, petId, cartItems.js");
    console.log(req.body, "line 116, cartItems.js, req.body");
    const updatedItem = await CartItem.update(
      {
        userId: userId,
      },
      {
        where: {
          authId,
          petId: petId,
        },
      }
    );
    res.json(updatedItem);
    //bobby
  } catch (err) {
    next(err);
  }
});
