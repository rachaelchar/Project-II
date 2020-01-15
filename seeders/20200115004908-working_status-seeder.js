
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('working_statuses', [{
    status: 'Clocked-In',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    status: 'Clocked-Out',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    status: 'On Leave',
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]),
};
