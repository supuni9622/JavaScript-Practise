// Mongo db with node.js

// Set up the mongodb connection

var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/fruits";

mongoClient.connect(url, (err, db)=> {
    if(err){
        console.log(err);
    }else{
        console.log("Connected to ", url);

        var collections = db.db('fruits').collection('Apples');

        var doc1 = {"name" : "red apples", "color" : "red"};
        var doc2 = {"name" : "green apples", "color" : "green"};

        collections.insert([doc1,doc2], (err, res) => {
            if(err){
                console.log(err);
            }else{
                console.log("Inserted document", res.insertedCount);
            }
            db.close();
        });
        
    }
});

