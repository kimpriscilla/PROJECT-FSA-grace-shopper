"use strict";

const {
  db,
  models: { User, Pet },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ email: "jenniferlu32@gmail.com", password: "123" }),
    User.create({ email: "kencrosas@gmail.com", password: "123" }),
    User.create({ email: "priscillakim58@gmail.com", password: "123" }),
    User.create({ email: "agartrell@gmail.com", password: "123" }),
  ]);

  const pet = await Promise.all([
    Pet.create({
      price: 250.0,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "female",
      size: "small",
      dateOfBirth: "2022-01-08",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
    }),
    Pet.create({
      price: 350.0,
      description: "skdjfndjnfskdf",
      gender: "male",
      size: "medium",
      dateOfBirth: "2021-12-31",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
    }),
    Pet.create({
      price: 1000,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "male",
      size: "large",
      dateOfBirth: "2022-02-22",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
    }),
    Pet.create({
      price: 220.0,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "female",
      size: "small",
      dateOfBirth: "2022-01-08",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
    }),
    Pet.create({
      price: 575.0,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "female",
      size: "small",
      dateOfBirth: "2022-01-08",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users,
    pet,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
