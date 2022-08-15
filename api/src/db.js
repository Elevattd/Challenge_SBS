const mongoose = require("mongoose");
const { DB_URL, DB_PORT } = require("../config");

const connect = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/challengeSBS`, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`LOAD DB      --> ON: ${DB_PORT}`);
  } catch (error) {
    console.log("error:", error);
  }
};

module.exports = {
  connect,
};
