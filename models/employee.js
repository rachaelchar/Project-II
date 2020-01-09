module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        working_status: {
            type: DataTypes.BOOLEAN
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hire_date: {
            type: DataTypes.DATE
        },
        vacation_time: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: 0.0
        },
        sick_time: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: 0.0
        },
        picture_fp: {
            type: DataTypes.STRING
        },
        pay_type: {
            type:DataTypes.STRING
        }
    });

    return Employee;
};