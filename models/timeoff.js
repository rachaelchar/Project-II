module.exports = (sequelize, DataTypes) => {
  const timeoff = sequelize.define('timeoff', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.UUID,
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
    leave_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    underscored: true
  });

  return timeoff;
};
