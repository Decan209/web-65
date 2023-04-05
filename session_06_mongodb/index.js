import express from "express";
import { MongoClient, ObjectId } from "mongodb";

async function main() {
  const app = express();
  const mongodbURL =
    "mongodb+srv://web_65:7vIC6ZHyo3CpZ7rS@cluster0.sugjv2y.mongodb.net/test";
  const client = new MongoClient(mongodbURL);
  try {
    await client.connect();
    console.log("Connected to mongodb successfully");

    app.get("/", async (req, res) => {
      const teachersCollections = client.db("web_65").collection("teachers");
      const teachers = await teachersCollections.find().toArray();
      // teachersCollections.insertMany([
      //   {
      //     name: "test 2",
      //     qty: 2,
      //   },
      //   {
      //     name: "test 3",
      //     qty: 3,
      //   },
      //   {
      //     name: "test 4",
      //     qty: 4,
      //   },
      // ]);
      // const a = await teachersCollections.deleteOne({
      //   _id: new ObjectId("642988fb4e62fd88edb941fa"),
      // });
      // const teachers = await teachersCollections.find().toArray();
      // const singleTeacher = await teachersCollections.find().toArray();

      res.status(200).json({
        message: "Success",
        data: teachers,
      });
    });
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }

  app.listen(8080);
}

main();

// Filter condition
/*
 <key> : <value> => equal
 <key>: { $gt: <value> } => $gt, $lt, $gte, $lte  => greater than, less than, greater than or equal, less than or equal
 */
