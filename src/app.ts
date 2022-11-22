import schema from "./schema/schema";
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((err: any) => {
    console.log(err);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
