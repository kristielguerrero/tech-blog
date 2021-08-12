const sequelize = require("../config/connections");
const userSeed = require("./userSeeds");

const seedData = async () => {
  await sequelize.sync({ force: true });
  await userSeed();

  process.exit(0);
};

seedData();
