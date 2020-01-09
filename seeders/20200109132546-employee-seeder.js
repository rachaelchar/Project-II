
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('employees', [{
    first_name: 'Rachael',
    last_name: 'Charewicz',
    admin: true,
    code: 'RRRR',
    working_status: false,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type: 'Salary',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Aaron',
    last_name: 'Carter',
    admin: true,
    code: 'AAAA',
    working_status: false,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type: 'Salary',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Marissa',
    last_name: 'Fortier',
    admin: true,
    code: 'MMMM',
    working_status: false,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type: 'Salary',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Kyle',
    last_name: 'Jones',
    admin: true,
    code: 'KKKK',
    working_status: false,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type: 'Salary',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Brandon',
    last_name: 'Fall',
    admin: true,
    code: 'BBBB',
    working_status: false,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type: 'Salary',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),
};
