const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.port || 5000;
const siteOwner = process.env.siteOwner || "Shehzad ";
const errorHandler = require("./middleware/errorhandler");
const connectToDb = require("./configs/dbConnection");

connectToDb();

app.get("", (req, res) => {
  res.send(`Contact Manager ${siteOwner}`);
});

// app.get("/api/v1/contacts", (req, res) => {
//   res.send("Get all Contacts");
// });

app.use(express.json());


app.use("/api/v1/contacts" , require("./routes/contactRoutes/contactRoutes") )
// below is version 2 of contact routes 
// app.use("/api/v2/contacts", require("./routes/contactRoutes/contactRoutesV2"));

app.use("/api/v1/users" , require("./routes/userRoutes/userRoutesV1") )




app.use(errorHandler);

app.get("*", (req, res) => {
  res.send(`You're hitting a wrong end point`);
});

app.listen(port, () => {
  console.log(`started server listening on http://localhost:${port}`);
});
