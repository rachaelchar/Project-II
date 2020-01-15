module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    // },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    working_status_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hire_date: {
      type: DataTypes.DATE,
    },
    vacation_time: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    sick_time: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    picture_fp: {
      type: DataTypes.STRING,
    },
    pay_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    underscored: true
  });

  return employee;
};
