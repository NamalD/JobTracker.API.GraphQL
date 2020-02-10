const Job = require("./Job");
const Query = require("./Query");

const Schema = `
  ${Job}
  ${Query}
`;

module.exports = Schema;