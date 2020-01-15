module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('pay_types', [{
    type: 'Part Time',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    type: 'Full Time',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    type: 'Salary',
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]),
};
