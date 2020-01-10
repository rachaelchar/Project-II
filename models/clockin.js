module.exports = (sequelize, DataTypes) => {
  const clockin = sequelize.define('clockin', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clocked_in: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
    },
    week_num: {
    // attach to clock in 
      type: DataTypes.INTEGER(2),
    },
    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return clockin;
};
