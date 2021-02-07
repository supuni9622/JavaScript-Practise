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

        // Find documents

        var collections = db.db('fruits').collection('Apples');

        collections.find().toArray((err, res) => {
            if(err){
                console.log(err);
            }else if(res.length){
                console.log(res);
            }else{
                console.log('No maches found');
            }
            db.close();
        });
        
    }
});

