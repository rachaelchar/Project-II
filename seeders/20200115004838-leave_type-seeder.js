
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('leave_types', [{
    leave: 'Vacation',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    leave: 'Sick',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    leave: 'Disabled',
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]),
};
