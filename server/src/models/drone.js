import mongoose, { Schema } from 'mongoose';

const droneSchema = new mongoose.Schema(
  {
    _id: String,
    bpakId: String,
    type: { type: Schema.Types.ObjectId, ref: 'Specification' },
    dateOfReady: Date,
    dateOfRelease: Date,
    pilotFlightId: String,
    softwareVersion: String,
    configVersion: String,
    airunitVersion: String,
    preassemblingCheck: Date,
    readyToFlight: Date,
    testFlight: Date,
    status: String,
  },
  { timestamps: true }
);

const Drone = mongoose.model('Drone', droneSchema);

export default Drone;
