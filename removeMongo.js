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

        // Delete documents

        var collections = db.db('fruits').collection('Apples');

        collections.remove({"name" : "red apples", "color":"blue"},(err, res) => {
            if(err){
                console.log(err);
            }else{
                console.log('Deleted', res);
            }
            db.close();
        });
        
    }
});

