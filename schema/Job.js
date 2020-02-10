const Job = `
  type Job {
    business: Business!
    role: Role!
    skills: [Skill],
    location: String,
    pay: Pay,
    benefits: [Benefit]
  }
`;

module.exports = Job;