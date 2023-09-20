import Table from '@mui/joy/Table';

const droneSpecs = [
  { id: 'motors', label: 'motors' },
  { id: 'props', label: 'props' },
  { id: 'esc', label: 'ESC' },
  { id: 'fc', label: 'FC' },
  { id: 'rx', label: 'RX' },
  { id: 'gps', label: 'GPS' },
  { id: 'vtx', label: 'VTX' },
  { id: 'dc', label: 'DC-DC' },
];

export default function SpecificationsTable({ data }) {
  return (
    <Table sx={{ '& thead th:nth-child(1)': { width: '20%' } }}>
      <thead>
        <tr>
          <th />
          {data?.map((row) => (
            <th key={row.name}>{row.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {droneSpecs.map((row, idx) => (
          <tr key={row.id}>
            <th scope="row">
              {droneSpecs[idx]['label']}
            </th>
            {data?.map((spec) => (
              <td scope="row" key={spec.__id}>
                {spec[droneSpecs[idx]['id']]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
