module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0
            },
            defaultValue: 10000
        },

    }, {
        timestamps: false,
    });
    return User;
};