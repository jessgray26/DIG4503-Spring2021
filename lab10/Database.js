import MongoClient from 'mongodb';

const url = "mongodb+srv://JessicaGray:KVLPnFGHN72uqoo6@cluster0.yuzwq.mongodb.net";

const person = {"_id":{"$oid":"6068c8e868af533c14a25ee5"},"firstName":"Lebron","lastName":"James","favoriteColor":"Blue"};

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }

    async createOne() {
        if(this.collection != null) {
            return await this.collection.insertOne(person);
        }
    }

    async readOne() {
        if(this.collection != null) {
            return await collection.findOne(person);
        }
    }

    close() {
        if(this.collection != null) {
        this.collection.close();
        }
    }

}