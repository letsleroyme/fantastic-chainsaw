const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkSchema } = require('express-validator');
const schema = {
    amount: {
        notEmpty: true,
        errorMessage: 'Value must be set',
        isInt: true
    }
};

router.patch('/:userId/balance', checkSchema(schema), userController.updateBalance);

module.exports = router;