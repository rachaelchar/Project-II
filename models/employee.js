module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    // name, employee code, admin permissions, hire date, accrued time, position, salary/hourly, picture link

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permission: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hireDate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    accruedTime: {
      type: DataTypes.DECIMAL(3, 2),
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pay: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },

  });

  return employees;
};
