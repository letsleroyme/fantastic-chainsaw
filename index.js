const express = require('express');
const { sequelize } = require('./models'); // Предполагается, что Sequelize уже настроен
const userRoutes = require('./routes/userRouter.js');
const app = express();
const { expressValidator } = require('express-validator');


app.use(express.json());

app.use("/user", userRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});



process.on("SIGINT", async() => {

    console.log("Приложение завершило работу");
    process.exit();
});