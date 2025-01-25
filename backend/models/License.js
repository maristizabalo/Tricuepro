const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const License = sequelize.define("License", {
    status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "inactive",
    },
    expiration_date: {
        type: DataTypes.DATE,
    },
});

License.belongsTo(User);

module.exports = License;
