console.log("starting...");

const express = require("express");

const dotenv = require("dotenv").config();

const app = express();
const port = process.env.port || 5000;
const siteOwner = process.env.siteOwner || "Shehzad "  ;

app.get("", (req, res) => {
    res.send(`Contact Manager ${siteOwner}`  );
  });


app.get("/api/v1/contacts", (req, res) => {
  res.send("Get all Contacts");
});

app.listen(port, () => {
  console.log(`started server listening on http://localhost:${port}`);
});
