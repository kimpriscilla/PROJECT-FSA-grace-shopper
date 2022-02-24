"use strict";

const {
  db,
  models: { User, Breed, Pet, Order, CartItem },
} = require("../server/db");

const { petData } = require("./pet.js");

const { breedImg } = require("./breedPics.js");

const { userData } = require("./users.js");

const { ordersData } = require("./orders.js");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      email: "jenniferlu32@gmail.com",
      password: "123",
      imageUrl: "https://www.bootdey.com/img/Content/avatar/avatar8.png",
    }),
    User.create({
      email: "kencrosas@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    }),
    User.create({
      email: "priscillakim58@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar3.png",
    }),
    User.create({
      email: "admin@admin.com",
      password: "123",
      role: "admin",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar4.png",
    }),
    User.create({
      email: "rebecca@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    }),
    User.create({
      email: "lucy@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar5.png",
    }),
    User.create({
      email: "sam@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar6.png",
    }),
    User.create({
      email: "charlie@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
    }),
    User.create({
      email: "alex@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    }),
    User.create({
      email: "lauren@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar4.png",
    }),
    User.create({
      email: "quinn@gmail.com",
      password: "123",
      imageUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    }),

    // User.create({ email: "jenniferlu32@gmail.com", password: "123" }),
    // User.create({ email: "kencrosas@gmail.com", password: "123" }),
    // User.create({ email: "priscillakim58@gmail.com", password: "123" }),
    // User.create({ email: "admin@admin.com", password: "123", role: "admin" }),
    // User.create({ email: "rebecca@gmail.com", password: "123" }),
    // User.create({ email: "lucy@gmail.com", password: "123" }),
    // User.create({ email: "sam@gmail.com", password: "123" }),
    // User.create({ email: "charlie@gmail.com", password: "123" }),
    // User.create({ email: "alex@gmail.com", password: "123" }),
    // User.create({ email: "lauren@gmail.com", password: "123" }),
    // User.create({ email: "quinn@gmail.com", password: "123" }),
  ]);

  userData.forEach(async (user) => await User.create(user));

  const breeds = await Promise.all([
    Breed.create({
      name: "Labrador Retriever",
      imageUrl: "https://images.dog.ceo/breeds/labrador/n02099712_6897.jpg",
    }),
    Breed.create({
      name: "German Shepherd",
      imageUrl:
        "https://images.dog.ceo/breeds/germanshepherd/n02106662_3953.jpg",
    }),
    Breed.create({
      name: "Golden Retriever",
      imageUrl:
        "https://images.dog.ceo/breeds/retriever-golden/n02099601_2440.jpg",
    }),
    Breed.create({
      name: "Bulldog",
      imageUrl: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",
    }),
    Breed.create({
      name: "Poodle",
      imageUrl:
        "https://images.dog.ceo/breeds/poodle-standard/n02113799_525.jpg",
    }),
    Breed.create({
      name: "Beagle",
      imageUrl: "https://images.dog.ceo/breeds/beagle/n02088364_17294.jpg",
    }),
    Breed.create({
      name: "Rottweiler",
      imageUrl: "https://images.dog.ceo/breeds/rottweiler/n02106550_6926.jpg",
    }),
    Breed.create({
      name: "Dachshund",
      imageUrl: "https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg",
    }),
    Breed.create({
      name: "Siberian Husky",
      imageUrl: "https://images.dog.ceo/breeds/husky/n02110185_11841.jpg",
    }),
    Breed.create({
      name: "Shih Tzu",
      imageUrl: "https://images.dog.ceo/breeds/shihtzu/n02086240_6833.jpg",
    }),
  ]);

  console.log(breeds.map((el) => console.log("NAME", el.name)));

  const randomNumber = function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const orders = await Promise.all([
    Order.create({
      shippingAddress: "1 Main St, Skokie, IL 60600",
      billingAddress: "1 Main St, Skokie, IL 60600",
      userId: users[1].id,
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
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[4].id,
    }),
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[5].id,
    }),
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[6].id,
    }),
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[7].id,
    }),
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[8].id,
    }),
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[9].id,
    }),
    Order.create({
      shippingAddress:
        "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      billingAddress: "50 State Rt 120, East Rutherford, New Jersey(NJ), 07073",
      userId: users[10].id,
    }),
    ordersData.forEach(async (orders) => await Order.create(orders)),
  ]);

  const pet = await Promise.all([
    Pet.create({
      name: "Ava",
      price: 250.0,
      description:
        "Energy, sass, brains -- Ava is a loving firecracker. This hairy girl is good with dogs, walks well on leash, seems housebroken, and LOVES to play and to learn tricks she can do in return for treats. She's a little anxious in new situations, but she's very trusting and sweet -- just needs a little time to decompress and lots of exercise to help her chill out. Ava came from a home where she wasn't getting enough exercise, so she's a little overweight and needs a home where she's getting a minimum of 90 minutes of serious exercise a day. Running, fetch, long walks... this girl is not a couch potato and needs humans who will keep her brain and body busy. She's a little to enthusiastic with her mouth when playing with toys, so she needs a grownups only home. Heads up, she is NOT HYPOALLERGENIC -- this girl sheds a good amount.",
      gender: "Female",
      size: "Small",
      dateOfBirth: "2022-01-08",
      breedId: breeds[4].id,
      orderId: orders[0].id,
      userId: users[0].id,
    }),
    Pet.create({
      name: "Brutis",
      price: 350.0,
      description:
        "Brutis is a seven-year-old male Bulldog mix. This friendly, gentle boy enjoys meeting new people and getting tons of attention. This sweetie knows basic commands, is house-trained and crate trained. Brutis has a low energy level-- although he loves his walks and playtime. Brutis needs an experienced owner and needs to be your one and only pet in the home.",
      gender: "Male",
      size: "Medium",
      dateOfBirth: "2021-12-31",
      imageUrl: "/default.png",
      breedId: breeds[3].id,
      orderId: orders[1].id,
      userId: users[1].id,
    }),
    Pet.create({
      name: "Pip",
      price: 1000,
      description: `Pip has all the love in the world and gives it openly to those around her. She adores a good cuddle and will burrow herself any way possible to make it happen. Pip also loves exploring the East River and making new friends - the quote "though she is little, she is fierce" captures her confidence in playing with big dogs, pretty perfectly. While she is a speedster with fetch (she'll even throw the toy across the room and play all by herself if need be) - Pip keeps at your side when it comes to walks. With sharp awareness of behavioral cues, Pip has an adaptable and enthusiastic spirit. Although capable of finding her voice, Pip is a fairly quiet pup. Again, attributed to a keen awareness of her surroundings, Pip hasn't felt the need to really bark since being a big city girl.`,
      gender: "Male",
      size: "Large",
      dateOfBirth: "2022-02-22",
      breedId: breeds[2].id,
      orderId: orders[2].id,
      userId: users[2].id,
    }),
    Pet.create({
      name: "Lily",
      price: 220.0,
      description:
        "Lily is a big bundle of joy. She loves semi-playing fetch, meeting new people, and giving kisses. Lily is a very curious dog yet caring and loving. She has bursts of energy then can naps for hours afterward. She loves to nap on the couch andwith you in the bed, but is also completely fine sleeping in her crate at night just as long as she gets a treat out of it! Though when she is awake she needs lots of attention and entertainment.She always gravitates towards squeaky toys and she sometimes plays with her food as if kibble jumps. Lily likes to be active when she has the energyand she's energetic for most of the day. She currently is obsessed with shoes and will grab 'em given the chance. Lily's a little shy with strangers for about 1 minute, after that she's made a new best friend. Lily has a great personality with lots of love to give.",
      gender: "Female",
      size: "Small",
      dateOfBirth: "2022-01-08",
      breedId: breeds[9].id,
      orderId: orders[3].id,
      userId: users[3].id,
    }),
    Pet.create({
      name: "Summer",
      price: 575.0,
      description:
        "Summer is a 3 months old, 17-pound female from the NYCACC. She is a crate-trained, housebroken Summer Russel Terrier mix with all the spunk and intelligence that are characteristic of this breed. She seeks a spacious home and dreams of having a yard, outside the city with folks who have experience with JR-type (terrier) dogs! Because she struggles with dog reactivity on walks, Waggytail has enrolled Summer in a 4-week home-based training program. Summer will be sent to her new forever home with a VIP SWAG BAG: 2 complimentary sessions with his AMAZING trainer, toys, collar, and leash are included.",
      gender: "Female",
      size: "Small",
      dateOfBirth: "2022-01-08",
      breedId: breeds[6].id,
      orderId: orders[4].id,
      userId: users[4].id,
    }),

    petData.forEach(async (pet) => {
      const newPet = await Pet.create({
        name: pet.name,
        price: pet.price,
        description: pet.description,
        email: pet.email,
        gender: pet.gender,
        size: pet.size,
        dateOfBirth: pet.dateOfBirth,
        breedId: breeds[randomNumber(1, 10)].id,
        imageUrl: "",
      });
      const oneBreed = await Breed.findByPk(newPet.breedId);
      const breedName = oneBreed.dataValues.name;
      const imgArray = breedImg[breedName];
      const oneImage = imgArray[Math.floor(Math.random() * imgArray.length)];
      Pet.update({ imageUrl: oneImage }, { where: { id: newPet.id } });
    }),
  ]);

  // const cartItems = await Promise.all([
  //   CartItem.create({
  //     userId: 1,
  //     petId: 2,
  //   }),
  //   CartItem.create({
  //     userId: 1,
  //     petId: 3,
  //   }),
  // ]);

  console.log(`seeded ${users.length} users`);
  return {
    users,
    pet,
    breeds,
    //orders,
    //cartItems,
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
