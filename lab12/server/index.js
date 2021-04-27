import Database from './Database.js';
import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(Express.json(), CORS());

const d = new Database();

d.connect(); 

// User Adds book to database
App.put("/books/", async(req, res) => {

    const ISBN = req.body.ISBN;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    
    const result = await d.createOne(ISBN, title, author, description);

    res.json(result);
    console.log(result);

});

// User Finds one book
App.get("/books/", async (req, res) => {

    const ISBN = req.query.ISBN;

    const result = await d.readOne(ISBN);

    res.json(result);
    console.log(result);
});

// User Deletes a book
App.delete("/books/", async (req, res) => {

    const ISBN = req.query.ISBN;

    const result = await d.deleteOne(ISBN);

    res.json(result);
    console.log(result);
});

App.listen(port, () => {
    console.log("Server running!");
});