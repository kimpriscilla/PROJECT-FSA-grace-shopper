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

//delete cart items for specific user
router.delete("/:userId/:id", async (req, res, next) => {
  try {
    const { id, userId } = req.params;
    await CartItem.destroy({
      where: {
        id,
        userId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
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
