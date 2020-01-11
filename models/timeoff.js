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
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
    },
    vacation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return timeoff;
};
