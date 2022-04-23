const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Traveler extends Model {}

Traveler.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: "traveler", // Declared for other models to reference; Has no relation to the table name.
    }
);

module.exports = Traveler;
