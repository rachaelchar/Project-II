module.exports = (sequelize, DataTypes) => {
    const timeoff = sequelize.define('leave_type', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        leave: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return timeoff;
};
