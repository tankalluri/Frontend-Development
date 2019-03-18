var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {//Create
    var dbo = db.db("mydb");
    var myobj = { name: "One Summers", author: "Some Random Guy", ISBN: "876590", publication:"Penguin" };
    dbo.collection("book").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 row inserted!");
      db.close();
});
});

MongoClient.connect(url, function(err, db) {//Read one row
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("book").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {//Read all rows
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("book").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {//Update
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { ISBN: "876590" };
    var newvalues = { $set: {name: "Ek Mausam", author: "John Green" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 row updated");
      db.close();
    });
  });

MongoClient.connect(url, function(err, db) {//Delete
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { ISBN: "123456" };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 row deleted");
      db.close();
    });
  });