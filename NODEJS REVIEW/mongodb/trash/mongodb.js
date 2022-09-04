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
  }
);

// ////////////////////////////// DELETE

// db.collection("users")
//   .deleteMany({
//     age: 24,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .deleteOne({ description: "lick pussy" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
///////////////////////////////// UPDATE METHOD

// db.collection("users")
//   .updateOne(
//     {
//       _id: new ObjectID("630b9df552a6f78f733e2ea0"),
//     },
//     {
//       $inc: {
//         age: 1,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .updateMany(
//     { completed: false },
//     {
//       $set: {
//         completed: true,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

////////////////////////////////////Find one and find READ
// db.collection("users").findOne(
//   { _id: new ObjectID("630b9c3127973be1b1f71272") },
//   (error, user) => {
//     if (error) {
//       return console.log("Unable to Find one");
//     }
//     console.log(user);
//   }
// );

// db.collection("users")
//   .find({ age: 85 })
//   .toArray((error, users) => {
//     if (error) {
//       return console.log("Error in find");
//     }
//     console.log(users);
//   });
// db.collection("users")
//   .find({ age: 85 })
//   .count((error, count) => {
//     if (error) {
//       return console.log("Error in find");
//     }
//     console.log(count);
//   });
//     db.collection("tasks").findOne(
//       { _id: new ObjectID("630bc2cc443a361680f7466a") },
//       (error, task) => {
//         if (error) {
//           return console.log("error madafaka");
//         }
//         console.log(task);
//       }
//     );
//     db.collection("tasks")
//       .find({ completed: false })
//       .toArray((error, tasks) => {
//         console.log(tasks);
//       });
//   }
// );

/////////////////////////////////////////////////INSERT ONE CREATE
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
////////////////////////////////////////////////INSERT MANY
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
