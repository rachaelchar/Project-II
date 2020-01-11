
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('timeoffs', [{
    first_name: 'Rachael',
    last_name: 'Charewicz',
    start_date: '2020-02-24',
    end_date: '2020-02-04',
    reason: 'If I do not go to Italy for gelato I will die',
    vacation: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Marissa',
    last_name: 'Fortier',
    start_date: '2020-03-16',
    end_date: '2020-03-21',
    reason: 'BIRTHDAY TRIP #Broadway',
    vacation: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Brandon',
    last_name: 'Fall',
    start_date: '2020-01-16',
    end_date: '2020-01-18',
    reason: 'One too many Monsters',
    vacation: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Kyle',
    last_name: 'Jones',
    start_date: '2020-01-16',
    end_date: '2020-01-18',
    reason: 'Amazing international travel with my gorgeous family',
    vacation: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Aaron',
    last_name: 'Carter',
    start_date: '2020-01-16',
    end_date: '2020-01-18',
    reason: 'Caught the tail wind of Tailwind and it knocked me for a loop',
    vacation: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),
};

