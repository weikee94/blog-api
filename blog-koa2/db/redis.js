const redis = require("redis");
const { REDIS_CONF } = require("../config/db.js");

// create client
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF);
redisClient.on("error", (err) => {
  console.log(err);
});

module.exports = redisClient;
