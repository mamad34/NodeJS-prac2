//CRUD OP
const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = mongodb;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString());
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connect Correctly");
    const db = client.db(databaseName);
    /////////INSERT ONE
    // db.collection("users").insertOne(
    //   {
    //     name: "mamad2",
    //     age: 69,
    //   },
    //   (error, result) => {
    //     console.log("sex");
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    //   }
    // );
    /////////INSERT MANY
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "alexis texas",
    //       age: 85,
    //     },
    //     {
    //       name: "johnny sins",
    //       age: "32",
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert many");
    //     }
    //     console.log(result);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "doing ass",
    //       completed: true,
    //     },
    //     {
    //       description: "lick pussy",
    //       completed: false,
    //     },
    //     {
    //       description: "suck dick",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Cant insert many");
    //     }
    //     console.log(result);
    //   }
    // );
  }
);
