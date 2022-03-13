// CRUD Create Read Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();

console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString());
console.log(id.toHexString().length);
console.log(id.getTimestamp());

//   127.0.0.1 is localHost
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database ");
    }

    // console.log("Connected Corectyl");

    const db = client.db(databaseName);

    ////////////////////////////////////////////////////////
    // insert one CREATE
    ////////////////////////////////////////////////////////

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Johnny Sins",
    //     age: 32,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     } else {
    //       db.collection("users")
    //         .findOne({ _id: result.insertedId })
    //         .then((res) => {
    //           console.log("dick", res);
    //         });
    //       console.log(result);
    //       // result.ops dose not support on mongodb V4.4
    //     }
    //   }
    // );

    ////////////////////////////////////////////////////////
    //insert many
    ////////////////////////////////////////////////////////

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Puss",
    //       age: 85,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Unable to insert documents!");
    //     } else {
    //       const ids = Object.keys(result.insertedIds).map((item) => {
    //         return result.insertedIds[item];
    //       });
    //       console.log(ids);
    //       db.collection("users")
    //         .find({ _id: { $in: ids } })
    //         .toArray((err, res) => {
    //           if (err) {
    //             console.log("this err", err);
    //           } else {
    //             console.log("dicke khar ", res);
    //           }
    //         });
    //     }
    //     console.log(result);
    //   }
    // );

    ////////////////////////////////////////////////////////
    // Challange Code
    ////////////////////////////////////////////////////////

    // db.collection("tasks").insertMany(
    //   [
    //     { discription: "Bullshit task to do", complete: true },
    //     { discription: "Bullshit masterbate to do", complete: false },
    //     { discription: "Bullshit education to do", complete: true },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Error in inserting to the DB");
    //     } else {
    //       const ids = Object.keys(result.insertedIds).map((item) => {
    //         return result.insertedIds[item];
    //       });
    //       console.log(ids);
    //       db.collection("tasks")
    //         .find({ _id: { $in: ids } })
    //         .toArray((err, res) => {
    //           if (err) {
    //             console.log("err", err);
    //           } else {
    //             res;
    //             console.log("go to hell res", res);
    //           }
    //         });
    //     }
    //   }
    // );

    ////////////////////////////////////////////////////////
    //READING DATA
    ////////////////////////////////////////////////////////

    // db.collection("users").findOne(
    //   { name: "Johnny Sins", age: 1 },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable To Fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users").findOne(
    //   { _id: new ObjectID("62263e25e9bb9267802f4780") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable To Fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // find dose not support CallBack it returns a Cursor OR Pointer
    // and the cursor has toArray method that have a CallBack Function

    // db.collection("users")
    //   .find({ age: 85 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 85 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    ////////////////////////////////////////////////////////
    //CHALANGE OF READING
    ////////////////////////////////////////////////////////

    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectID("62263f071659b60ec6f2a074"),
    //   },
    //   (error, lastTask) => {
    //     if (error) {
    //       return console.log("Error while finding last task");
    //     }
    //     console.log("last task is : ", lastTask);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ complete: true })
    //   .toArray((error, completedTasks) => {
    //     console.log(completedTasks);
    //   });

    ////////////////////////////////////////////////////////
    //UPDATING IN MONGODB
    ////////////////////////////////////////////////////////

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("622654cef6025e01dbbebc82"),
    //     },
    //     {
    //       // $set is an update operator
    //       $set: {
    //         name: "Alexis Texas",
    //       },
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
    //     {
    //       complete: false,
    //     },
    //     {
    //       $set: {
    //         complete: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("result", result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log("err", error);
    //   });

    ////////////////////////////////////////////////////////
    // DELETING IN MONGODB
    ////////////////////////////////////////////////////////

    // db.collection("users")
    //   .deleteMany({
    //     age: 23,
    //   })
    //   .then((result) => {
    //     console.log("result", result);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

    // db.collection("tasks")
    //   .deleteOne({
    //     discription: "Bullshit masterbate to do",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
);

// Install mongoose
