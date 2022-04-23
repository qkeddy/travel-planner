// Initialize Express.js router object
const router = require("express").Router();

// Import references to the route models
const { Location, Traveler, Trip } = require("../../models");

// GET all locations
router.get("/", async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// GET a single location
router.get("/:id", async (req, res) => {
    try {
        // Pass in the URL parameter location id
        const locationData = await Location.findByPk(req.params.id, {
            // JOIN with travelers, using the Trip through table
            include: [{ model: Traveler, through: Trip, as: "location_travelers" }],
        });

        if (!locationData) {
            res.status(404).json({ message: "No location found with this id!" });
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// CREATE (post) a location
router.post("/", async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err.errors);
    }
});

// DELETE a location
router.delete("/:id", async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!locationData) {
            res.status(404).json({ message: "No location found with this id!" });
            return;
        }

        res.status(200).json(locationData);
        console.log(locationData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Export the router object
module.exports = router;
