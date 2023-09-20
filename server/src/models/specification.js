import mongoose from 'mongoose';

const specificationSchema = new mongoose.Schema({
  name: String,
  motors: String,
  props: String,
  esc: String,
  fc: String,
  rx: String,
  gps: String,
  vtx: String,
  dc: String,
});

const Specification = mongoose.model('Specification', specificationSchema);

export default Specification;