import Database from '../Database.js';
import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(Express.json(), CORS());

const d = new Database();

d.connect(); 

// Add book to database
App.put("/books/:ISBN", async(req, res) => {

    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    
    const result = await d.createOne(ISBN, title, author, description);

    res.json(result);
    console.log(result);

});

// Find one book
App.get("/books/:ISBN", async (req, res) => {

    const ISBN = req.params.ISBN;

    const result = await d.readOne(ISBN);

    res.json(result);
    console.log(result);
});

// Search many books
App.post("/books/search", async (req, res) => {
    const author = req.query.author
    
    const cursor = await d.readMany(author);
    
    res.json(cursor);
    console.log(cursor);
});

// Update a book
App.patch("/books/:ISBN", async (req, res) => {

    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await d.updateOne(ISBN, title, author, description);

    res.json(result);
    console.log(result);
});

// Delete a book
App.delete("/books/:ISBN", async (req, res) => {

    const ISBN = req.params.ISBN;

    const result = await d.deleteOne(ISBN);

    res.json(result);
    console.log(result);
});

App.listen(port, () => {
    console.log("Server running!");
});