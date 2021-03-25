import MongoClient from 'mongodb';

const URL = "mongodb+srv://JessicaGray:KVLPnFGHN72uqoo6@cluster0.yuzwq.mongodb.net"

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({price:{$lte: 200}, beds:{$gte: 5}, "review_scores.review_scores_rating":{$gte: 99}})

    cursor.forEach(document=>{
        console.log(document);
    }, () => {
        connection.close();
    });
})
.catch(error =>{

    console.log("Error: " + error);
})