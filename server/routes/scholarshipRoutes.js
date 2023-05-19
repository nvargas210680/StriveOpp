import Scholarship from "../models/scholarshipModel.js";

// Create a new scholarship.
const createScholarship = async (req,res) => {
    try {
        const newScholarship = new Scholarship(req.body);
        await newScholarship.save();
        res.send(newScholarship);
    } catch(error) {
        res.status(400).send({ message: error.message });
    }
};

// Get all scholarships.
const getAllScholarships = async (req,res) => {
    try {
        const scholarships = await Scholarship.find();
        res.json(playgrounds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single scholarship by id
const getScholarshipById = async (req,res) => {
    try {
        const scholarship = await Scholarship.findById(req.params.id);
        if (!scholarship) {
            return res.status(404).json({ message:'Scholarship not found'});
        }
        res.json(scholarship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single playground by name
