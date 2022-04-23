const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        budget: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        traveler_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        // Store a reference of the `id` of the `location` of the trip
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "location",
                key: "id",
                unique: false,
            },
        },
        // Store a reference of the `id` of the `traveler` who is on the trip
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "traveler",
                key: "id",
                unique: false,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: "trip",
    }
);

module.exports = Trips;
