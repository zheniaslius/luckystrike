import Specification from '../models/specification.js';

// Create a new specification
export const createSpecification = async (req, res) => {
  try {
    console.log(req.body)
    const specification = new Specification(req.body);
    await specification.save();
    res.status(201).json(specification);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all specifications
export const getSpecifications = async (req, res) => {
  try {
    const specifications = await Specification.find();
    res.status(200).json(specifications);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single specification by ID
export const getSpecificationById = async (req, res) => {
  try {
    const specification = await Specification.findById(req.params.id);
    if (!specification) {
      return res.status(404).json({ error: 'Specification not found' });
    }
    res.status(200).json(specification);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a specification by ID
export const updateSpecificationById = async (req, res) => {
  try {
    const specification = await Specification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!specification) {
      return res.status(404).json({ error: 'Specification not found' });
    }
    res.status(200).json(specification);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a specification by ID
export const deleteSpecificationById = async (req, res) => {
  try {
    const specification = await Specification.findByIdAndRemove(req.params.id);
    if (!specification) {
      return res.status(404).json({ error: 'Specification not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
