import Drone from '../models/drone.js';

// Create a new drone
export const createDrone = async (req, res) => {
  try {
    const drone = new Drone(req.body);
    await drone.save();
    res.status(201).json(drone);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get all drones
export const getDrones = async (req, res) => {
  try {
    const drone = await Drone.find().populate('type').exec();
    res.status(200).json(drone);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a single drone by ID
export const getDroneById = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id).populate('type').exec();
    if (!drone) {
      return res.status(404).json({ error: 'drone not found' });
    }
    res.status(200).json(drone);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a drone by ID
export const updateDroneById = async (req, res) => {
  try {
    const drone = await Drone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!drone) {
      return res.status(404).json({ error: 'drone not found' });
    }
    res.status(200).json(drone);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a drone by ID
export const deleteDroneById = async (req, res) => {
  try {
    const drone = await Drone.findByIdAndRemove(req.params.id);
    if (!drone) {
      return res.status(404).json({ error: 'drone not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
