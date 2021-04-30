import Database from "./Database.js";
import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

App.use(Express.json(), CORS());

const d = new Database();

d.connect();

// User Puts
App.put("/jessicagray/", async (req, res) => {
  const username = req.body.username;
  const country = req.body.country;
  const city = req.body.city;
  const activities = req.body.activities;
  const priority = req.body.priority;

  const result = await d.createOne(
    username,
    country,
    city,
    activities,
    priority
  );

  res.json(result);
  console.log(result);
});

// User Searches
App.get("/jessicagray/", async (req, res) => {
  const country = req.query.country;

  const result = await d.readMany(country);

  res.json(result);
  console.log(result);
});

// User Updates
App.patch("/jessicagray/", async (req, res) => {
  const username = req.body.username;

  const country = req.body.country;
  const city = req.body.city;
  const activities = req.body.activities;
  const priority = req.body.priority;

  const result = await d.updateOne(
    username,
    country,
    city,
    activities,
    priority
  );

  res.json(result);
  console.log(result);
});

// User Deletes
App.delete("/jessicagray/", async (req, res) => {
  const username = req.query.username;

  const result = await d.deleteOne(username);

  res.json(result);
  console.log(result);
});

App.listen(port, () => {
  console.log("Server running!");
});
