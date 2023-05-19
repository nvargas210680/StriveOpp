import express from 'express';
import { createScholarship,
    getAllScholarships,
    getScholarshipById,
    getScholarshipByName,
    updateScholarshipById,
    deleteScholarshipById } from '../controllers/scholarshipController.js';

const scholarshipRouter = express.Router();

scholarshipRouter.post('/create', createScholarship);
scholarshipRouter.get('/', getAllScholarships);
scholarshipRouter.get('/:id', getScholarshipById);
scholarshipRouter.get('/name/:name', getScholarshipByName);
scholarshipRouter.patch('/:id', updateScholarshipById);
scholarshipRouter.delete('/:id', deleteScholarshipById);

export default scholarshipRouter;