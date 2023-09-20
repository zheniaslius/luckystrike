import express from 'express';
import {
  createDrone,
  getDrones,
  getDroneById,
  updateDroneById,
  deleteDroneById,
} from '../controllers/droneController.js';

const router = express.Router();

// Create a new specification
router.post('/drones', createDrone);

// Get all specifications
router.get('/drones', getDrones);

// Get a single specification by ID
router.get('/drones/:id', getDroneById);

// Update a specification by ID
router.put('/drones/:id', updateDroneById);

// Delete a specification by ID
router.delete('/drones/:id', deleteDroneById);

export default router;