// Initialize Express.js router object
const router = require("express").Router();

// Import references to the route models
const { Location, Traveler, Trip } = require("../../models");

// GET all travelers
router.get("/", async (req, res) => {
    try {
        const travelerData = await Traveler.findAll();
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// GET a single traveler
router.get("/:id", async (req, res) => {
    try {
        const travelerData = await Traveler.findByPk(req.params.id, {
            // JOIN with locations, using the Trip through table
            include: [{ model: Location, through: Trip, as: "planned_trips" }],
        });

        if (!travelerData) {
            res.status(404).json({ message: "No traveler found with this id!" });
            return;
        }

        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// CREATE a traveler
router.post("/", async (req, res) => {
    try {
        const travelerData = await Traveler.create(req.body);
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(400).json(err.errors);
        console.log(err.errors);
    }
});

// DELETE a traveler
router.delete("/:id", async (req, res) => {
    try {
        const travelerData = await Traveler.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!travelerData) {
            res.status(404).json({ message: "No traveler found with this id!" });
            return;
        }

        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

module.exports = router;
