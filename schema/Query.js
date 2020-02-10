const Query = `
  type Query {
      status: String!
      job: Job!
      blockers: [Blocker]
      interviews: [Interview]
      offers: [Offer]
  }
`;

module.exports = Query;