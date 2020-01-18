module.exports = (sequelize, DataTypes) => {
  const clockin = sequelize.define('clockin', {
    employee_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    week_num: {
      type: DataTypes.INTEGER(2),
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  return clockin;
};
