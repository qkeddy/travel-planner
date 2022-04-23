const Location = require("./Location");
const Traveler = require("./Traveler");
const Trip = require("./Trip");

// A trip can have many locations
Location.belongsToMany(Traveler, {
    // Many to many table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false,
    },
    // Define an alias for when data is retrieved
    as: "location_travelers",
    // foreignKey: "traveler_id",
});

// A trip can have many travelers
Traveler.belongsToMany(Location, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false,
    },
    // Define an alias for when data is retrieved
    as: "planned_trips",
    // foreignKey: "location_id",
});

module.exports = { Traveler, Location, Trip };
