module.exports = (sequelize, DataTypes) => {
  const timeoff = sequelize.define('working_status', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  return timeoff;
};
