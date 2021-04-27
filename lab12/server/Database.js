import MongoClient from 'mongodb';

const URL = "mongodb+srv://JessicaGray:KVLPnFGHN72uqoo6@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    async createOne(ISBN, title, author, description) {
        const result = await this.collection.insertOne({"ISBN": ISBN, "title": title, "author": author, "description": description});
        if(result !== null) {
            return {ISBN, title, author, description};
        } else {
            return null;
        }
    }

    async readOne(ISBN) {
        const result = await this.collection.findOne({"ISBN": ISBN});
        if(result !== null) {
            return result;
        } else {
            return {"book": "not found"};
        };
    }

    async deleteOne(ISBN){
        const result = await this.collection.deleteOne({"ISBN": ISBN});
        if(result !== null) {
            return result.deletedCount;
        } else {
            return {"books": "delete unsuccessful!"};
        };
    }

    close() {
        if(this.collection !== null) {
        this.collection.close();
        }
    }
}