const { User } = require("../models");

const userData = [
  {
    first_name: "Samuel",
    last_name: "Mendez",
    email: "example@user.com",
    password: "1234Sammy",
  },
  {
    first_name: "Sarah",
    last_name: "Sosa",
    email: "you@example.com",
    password: "dogAndcat",
  },
];

const userSeed = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = userSeed;
