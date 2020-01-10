module.exports = (sequelize, DataTypes) => {
  const timeoff = sequelize.define('timeoff', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
    },
    vacation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return timeoff;
};
