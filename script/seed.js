"use strict";

const {db, models: {User, Breed, Pet, Order} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ email: 'jenniferlu32@gmail.com', password: '123' }),
    User.create({ email: 'kencrosas@gmail.com', password: '123' }),
    User.create({ email: 'priscillakim58@gmail.com', password: '123' }),
    User.create({ email: 'agartrell@gmail.com', password: '123' }),
  ]);
  
  const breeds = await Promise.all([
    Breed.create({ name: "Retrievers (Labrador)", stock: 1 }),
    Breed.create({ name: "German Shepherd", stock: 3 }),
    Breed.create({ name: "Retrievers (Golden)", stock: 5 }),
    Breed.create({ name: "Bulldogs", stock: 1 }),
    Breed.create({ name: "Poodles", stock: 3 }),
    Breed.create({ name: "Beagles", stock: 2 }),
    Breed.create({ name: "Rottweilers", stock: 5 }),
    Breed.create({ name: "Dachshunds", stock: 5 }),
    Breed.create({ name: "Siberian Huskies", stock: 1 }),
    Breed.create({ name: "Shih Tzu", stock: 1 }),
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
      breedId: breeds[4].id,
    }),
    Pet.create({
      price: 350.0,
      description: "skdjfndjnfskdf",
      gender: "male",
      size: "medium",
      dateOfBirth: "2021-12-31",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      breedId: breeds[3].id,
    }),
    Pet.create({
      price: 1000,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "male",
      size: "large",
      dateOfBirth: "2022-02-22",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      breedId: breeds[2].id,
    }),
    Pet.create({
      price: 220.0,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "female",
      size: "small",
      dateOfBirth: "2022-01-08",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      breedId: breeds[9].id,
    }),
    Pet.create({
      price: 575.0,
      description: "fmdgjfngksrjngrjgsgk",
      gender: "female",
      size: "small",
      dateOfBirth: "2022-01-08",
      imageUrl:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      breedId: breeds[6].id,
    }),
  ]);
  
  const orders = await Promise.all([
    Order.create({
      shippingAddress: "1 Main St, Skokie, IL 60600",
      billingAddress: "1 Main St, Skokie, IL 60600",
      userId: users[0].id,
    }),
    Order.create({
      shippingAddress: "5 Commercial Rd, Germantown, MD 20045",
      billingAddress: "1 Bank Rd, Germantown, MD 20045",
      userId: users[1].id,
    }),
    Order.create({
      shippingAddress: "5000 Skippack Pike, Blue Bell, PA 30308",
      billingAddress: "500 Broadway, New York, NY 10002",
      userId: users[2].id,
    }),
    Order.create({
      shippingAddress: "5 Bloomingdale Rd, Muncie, IN 50058",
      billingAddress: "5 Bloomingdale Rd, Muncie, IN 50058",
      userId: users[3].id,
    }),
  ])
  
  console.log(breeds[1])

  console.log(`seeded ${users.length} users`);
  return {
    users,
    pet,
    breeds,
    orders
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
