import Database from './Database.js';

import Express from 'express';

const App = Express();
const port = 45030;
const person = {"_id":{"$oid":"6068c8e868af533c14a25ee5"},"firstName":"Lebron","lastName":"James","favoriteColor":"Blue"};

App.use(Express.json());

const d = new Database();

App.put("/people/create", (req, res) => {
    d.createOne(req.body, (req, res) );
    if (person == null) {
        res.json({person: "not found"})
      } else {
        res.json({person: person})
      }
});

App.get("/people/:person", (req, res) => {
    d.createOne(req.params.person, (req, res) );
    if (person == null) {
        res.json({person: "not found"})
      } else {
        res.json({firstName: person})
      }
});


App.listen(port, () => {
    console.log("Server running!");
});