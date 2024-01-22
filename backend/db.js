const mongoose = require("mongoose");

const MongoURI =
  "mongodb+srv://language_model:language_model9320@cluster0.xjj7khm.mongodb.net/Emitrr?retryWrites=true&w=majority";

const mongoDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(MongoURI);
      console.log("MongoDB connected");

      const fetchedData = await mongoose.connection.db.collection("sql_lang");
      const wdata = await fetchedData.find({}).toArray();

      const catData = Array.from(new Set(wdata.map(item => item.category)));
      const difficulty = Array.from(new Set(wdata.map(item => item.difficulty)));

      global.catData = catData;
      global.whole_data = wdata;
      global.diff_data = difficulty;

      resolve();
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      reject(error);
    }
  });
};

module.exports = mongoDB();
