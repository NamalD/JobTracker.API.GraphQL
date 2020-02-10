"use strict";

let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');
const Schema = require('./schema');

// Construct a schema, using GraphQL schema language
let schema = buildSchema(Schema);

let statuses = [
  "pending", "blockedByCompany", "blockedByMe", "rejected", "interviewing", "offered"
];

// The root provides a resolver function for each API endpoint
let root = {
  status: () => {
    let index = Math.trunc(Math.random() * 6);
    return statuses[index];
  },
  job: () => {
    return {
      businessName: "Test"
    };
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');