import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack, Autocomplete } from '@mui/joy';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useRequest} from '../../api/useRequest';

const CustomInput = ({ ...props }) => <Input {...props} sx={{ mb: 3 }} />;

const DatesRow = ({ children }) => (
  <Stack spacing={3} sx={{ mb: 3 }} direction="row" justifyContent="flex-start" alignItems="flex-start">
    {children}
  </Stack>
);

const AddDroneForm = ({ onSubmit }) => {
  const { data: specs } = useRequest('/specifications');
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const updateDate = (name) => (value) => {
    updateData({ target: { name, value: value.toString() } });
  };

  const updateAutocomplete = name => (e, { _id }) => {
    updateData({ target: { name, value: _id } });
  };

  const addSpecification = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={addSpecification}>
      <FormControl>
        <FormLabel>Drone ID</FormLabel>
        <CustomInput name="_id" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>Drone type</FormLabel>
        <Autocomplete getOptionLabel={o => o.name} name="type" options={specs} sx={{ mb: 3 }} onChange={updateAutocomplete('type')} />
      </FormControl>
      {/* <FormControl>
        <FormLabel>BPAK ID</FormLabel>
        <CustomInput name="bpakId" onChange={updateData} />
      </FormControl>
      <DatesRow>
        <DatePicker label="Date of Ready" value={data.dateOfReady} onChange={updateDate('dateOfReady')} />
        <DatePicker
          label="Date of Release"
          value={data.dateOfRelease}
          onChange={updateDate('dateOfRelease')}
        />
      </DatesRow>
      <FormControl>
        <FormLabel>Pilot flight ID</FormLabel>
        <CustomInput name="pilotFlightId" onChange={updateData} />
      </FormControl> */}
      <FormControl>
        <FormLabel>Software version</FormLabel>
        <CustomInput name="softwareVersion" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>Config version</FormLabel>
        <CustomInput name="configVersion" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>AirUnit (VTX) version</FormLabel>
        <CustomInput name="airunitVersion" onChange={updateData} />
      </FormControl>
      {/* <DatesRow>
        <DatePicker
          label="Preassembling Check"
          value={data.preassemblingCheck}
          onChange={updateDate('preassemblingCheck')}
        />
        <DatePicker
          label="Ready to Flight"
          value={data.readyToFlight}
          onChange={updateDate('readyToFlight')}
        />
        <DatePicker label="Test Flight" value={data.testFlight} onChange={updateDate('testFlight')} />
      </DatesRow>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <CustomInput name="status" onChange={updateData} />
      </FormControl> */}
      <Stack alignItems="center">
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default AddDroneForm;
