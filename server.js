console.log("starting...");

const express = require("express");

const dotenv = require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

const siteOwner = process.env.siteOwner || "Shehzad "  ;


const errorHandler = require("./middleware/errorhandler");


app.get("", (req, res) => {
    res.send(`Contact Manager ${siteOwner}`  );
});


// app.get("/api/v1/contacts", (req, res) => {
//   res.send("Get all Contacts");
// });

app.use(express.json())



app.use("/api/v1/contacts" , require("./routes/contactRoutes") );
app.use("/api/v2/contacts" , require("./routes/contactRoutesV2") );

app.use(errorHandler);


app.get("*", (req, res) => {
  res.send(`You're hitting a wrong end point`  );
});


app.listen(port, () => {
  console.log(`started server listening on http://localhost:${port}`);
});
