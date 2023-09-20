import Table from '@mui/joy/Table';

const droneSpecs = [
  { id: '_id', label: 'Drone ID' },
  { id: 'type', label: 'Drone type' },
  { id: 'bpakId', label: 'BPAK ID' },
  { id: 'dateOfReady', label: 'Date of Ready' },
  { id: 'dateOfRelease', label: 'Date of Release' },
  { id: 'pilotFlightId', label: 'Pilot flight ID' },
  { id: 'softwareVersion', label: 'Software version' },
  { id: 'configVersion', label: 'Config version' },
  { id: 'airunitVersion', label: 'AirUnit (VTX) version' },
  { id: 'preassemblingCheck', label: 'Preassembling Check' },
  { id: 'readyToFlight', label: 'Ready to Flight' },
  { id: 'testFlight', label: 'Test Flight' },
  { id: 'status', label: 'Status' },
];

const renderField = (drone, idx) => {
  const res = Object.keys(drone).reduce(
    (acc, key) => ({
      ...acc,
      [key]: key === 'type' ? drone[key]?.name : drone[key],
    }),
    {}
  );

  return res[droneSpecs[idx]['id']];
};

export default function DroneTable({ data }) {
  return (
    <Table sx={{ '& thead th:nth-child(1)': { width: '20%' } }}>
      <thead>
        <tr>
          <th />
          {data?.map((row) => (
            <th key={row?.name}>{row?.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {droneSpecs.map((row, idx) => (
          <tr key={row.id}>
            <th scope="row">{droneSpecs[idx]['label']}</th>
            {data?.map((drone) => (
              <td scope="row" key={drone._id}>
                {renderField(drone, idx)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
