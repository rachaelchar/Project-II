module.exports = (sequelize, DataTypes) => {
  const timeoff = sequelize.define('leave_type', {
    leave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  return timeoff;
};
