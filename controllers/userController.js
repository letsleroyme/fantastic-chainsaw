// controllers/userController.js
const userService = require('../services/userService');
const {validationResult} = require('express-validator');

exports.updateBalance = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.send({errors: errors.array()});
        } else {
            const { userId } = req.params;
            const { amount } = req.body;

            const updatedUser = await userService.updateUserBalance(userId, amount);
            if (!updatedUser) {
                return res.status(404).send('User not found');
            }

            res.send({ newBalance: updatedUser.balance });
        }

    } catch (error) {
        if (error.message === 'Insufficient funds') {
            return res.status(400).send(error.message);
        }
        res.status(500).send(error.message);
    }
};