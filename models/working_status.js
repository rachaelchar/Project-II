module.exports = (sequelize, DataTypes) => {
    const timeoff = sequelize.define('working_status', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        underscored: true
      });

    return timeoff;
};
