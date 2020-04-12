var uniqueRandom = require('unique-random-array');
var startwart = require("./star-war.json");

module.exports = {
  all: startwart,
  random:uniqueRandom(startwart)
};
