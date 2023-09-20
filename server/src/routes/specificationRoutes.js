import express from 'express';
import {
  createSpecification,
  getSpecifications,
  getSpecificationById,
  updateSpecificationById,
  deleteSpecificationById,
} from '../controllers/specificationController.js';

const router = express.Router();

// Create a new specification
router.post('/specifications', createSpecification);

// Get all specifications
router.get('/specifications', getSpecifications);

// Get a single specification by ID
router.get('/specifications/:id', getSpecificationById);

// Update a specification by ID
router.put('/specifications/:id', updateSpecificationById);

// Delete a specification by ID
router.delete('/specifications/:id', deleteSpecificationById);

export default router;