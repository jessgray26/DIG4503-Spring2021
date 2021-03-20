import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

// original array
const person = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

// PUT person into array
App.put("/people/:person", (req, res) => {
    const addPerson = req.params.person;
    person.push(addPerson);
    res.json({person: addPerson});
});

// GET specific name from array
App.get("/people/:person", (req, res) => {
    let result = {name: "Not found!"};

    person.forEach((value) => {
        if(req.params.person == value){
            result = {name: value};
        }
    });
    res.json(result);
});

// GET search all names containing character
// I had to use '/search/:person' path instead of '/search/:name' because I would always get an empty array.  
App.get("/search/:person", (req, res) => {
    const findPerson = req.params.person;
    const searchComplete = person.filter(value => value.includes(findPerson));
    res.json({names: searchComplete});
});

// making sure port is listening & running
App.listen(port, () => {
    console.log("Server running!");
});