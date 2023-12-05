const { users, sequelize } = require('../models');

exports.updateUserBalance = async (userId, amount) => {
    return await sequelize.transaction(async (transaction) => {
        const user = await users.findByPk(userId,
            { transaction });
        if (!user) {
            throw new Error('User not found');
        }

        const newBalance = Number(user.balance) + Number(amount);
        if (newBalance < 0) {
            throw new Error('Insufficient funds');
        }

        user.balance = newBalance;
        await user.save({ transaction });

        return user;
    });
};