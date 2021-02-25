import Express, { response } from 'express';

const App = Express();
const port = 45030;

const me = {
    color: "purple",
    name: "jessica gray"
};

App.get("/", function(req, res){
    res.send("Hello World!");
});

App.get("/person", function(req, res){
    res.json(me);
});

App.listen(port, function() {
    console.log("Server is running!");
});