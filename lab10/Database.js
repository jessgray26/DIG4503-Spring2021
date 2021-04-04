import MongoClient from 'mongodb';

const url = "mongodb+srv://JessicaGray:KVLPnFGHN72uqoo6@cluster0.yuzwq.mongodb.net";

const p = {                
    "firstName" : "Lebron",
    "lastName" : "James",
    "favoriteColor" : "Blue"
}

class Database {
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
            return await this.collection.insertOne(p);
        }
    }
    
    async readOne() {
        let result = await collection.findOne (p);
        result.forEach(document=>{
            console.log(document);
        });
    }
    
    close() {
        if(this.collection != null) {
          this.connection.close();
        }
      }
}

export default Database;