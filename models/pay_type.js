module.exports = (sequelize, DataTypes) => {
    const timeoff = sequelize.define('pay_type', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return timeoff;
};
