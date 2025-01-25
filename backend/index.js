const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", authRoutes);

sequelize.sync({ alter: true }).then(() => {
    console.log("Base de datos sincronizada");
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
