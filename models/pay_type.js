module.exports = (sequelize, DataTypes) => {
  const timeoff = sequelize.define('pay_type', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  return timeoff;
};
