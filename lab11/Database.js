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
        if(this.collection !== null) {
            const result = await this.collection.insertOne({"ISBN": ISBN, "title": title, "author": author, "description": description});
            return {ISBN, title, author, description};
        } else {
            return null;
        }
    }

    async readOne(ISBN) {
        if(this.collection !== null) {
            const result = await this.collection.findOne({"ISBN": ISBN});
            return {"book found!": result};
        } else {
            return {"book": "not found"}; // For some reason this is not returning what I want. Keeps giving me "book found!: null"...
        };
    }

    async readMany(author){
        if(this.collection !== null) {
            const cursor = await this.collection.find({"author": author}).toArray();

            return {"books found!": cursor};
        } else {
            return {"books": "not found"};
        };
    }

    async updateOne(ISBN, title, author, description){
        if(this.collection !== null) {
            const result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"title": title, "author": author, "description": description}});
            return {ISBN, title, author, description};
        } else {
            return {"book": "update unsuccessful!"};
        };
    }

    async deleteOne(ISBN){
        if(this.collection !== null) {
            const result = await this.collection.deleteOne({"ISBN": ISBN});
            return {"books": result.deletedCount};
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