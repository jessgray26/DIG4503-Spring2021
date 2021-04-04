import Database from './Database.js';

import Express from 'express';

const App = Express();
const port = 45030;

App.use(Express.json());

const db = new Database();

App.put("/people/create", (req, res) => {
    let create = req.body;
    res.json(create);
});

App.get("/people/:person", (req, res) => {
    res.json( { 
        person: req.params.person
    });
});

App.listen(port, () => {
    console.log("Server running!");
});