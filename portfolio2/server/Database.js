import MongoClient from "mongodb";

const URL =
  "mongodb+srv://JessicaGray:KVLPnFGHN72uqoo6@cluster0.yuzwq.mongodb.net";

export default class Database {
  constructor() {
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect() {
    this.connection = await MongoClient.connect(URL, {
      useUnifiedTopology: true,
    });
    this.database = this.connection.db("portfolio2");
    this.collection = this.database.collection("JessicaGray");
  }

  async createOne(username, country, city, activities, priority) {
    const result = await this.collection.insertOne({
      username: username,
      country: country,
      city: city,
      activities: activities,
      priority: priority,
    });
    if (result !== null) {
      return { username, country, city, activities, priority };
    } else {
      return null;
    }
  }

  async readMany(country) {
    if (this.collection !== null) {
      const cursor = await this.collection.find({ country: country }).toArray();

      return cursor;
    } else {
      return { books: "not found" };
    }
  }

  async updateOne(username, country, city, activities, priority) {
    const result = await this.collection.updateOne(
      { username: username },
      {
        $set: {
          country: country,
          city: city,
          activities: activities,
          priority: priority,
        },
      }
    );
    if (result !== null) {
      return { country, city, activities, priority };
    } else {
      return { entry: "update unsuccessful!" };
    }
  }

  async deleteOne(username) {
    const result = await this.collection.deleteOne({ username: username });
    if (result !== 0) {
      return result.deletedCount;
    } else {
      return { entry: "delete unsuccessful!" };
    }
  }

  close() {
    if (this.collection !== null) {
      this.collection.close();
    }
  }
}
