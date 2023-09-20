import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Autocomplete, Stack } from '@mui/joy';
import { vtxOptions, dcOptions } from './autocompleteOptions';

const CustomInput = ({ ...props }) => <Input {...props} sx={{ mb: 3 }} />;

const SpecificationForm = ({ onSubmit }) => {
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const updateAutocomplete = name => (e, { label }) => {
    updateData({ target: { name, value: label } });
  };

  const addSpecification = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={addSpecification}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <CustomInput name="name" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>Motors</FormLabel>
        <CustomInput name="motors" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>Props</FormLabel>
        <CustomInput name="props" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>ESC</FormLabel>
        <CustomInput name="esc" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>FC</FormLabel>
        <CustomInput name="fc" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>RX</FormLabel>
        <CustomInput name="rx" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>GPS</FormLabel>
        <CustomInput name="gps" onChange={updateData} />
      </FormControl>
      <FormControl>
        <FormLabel>VTX</FormLabel>
        <Autocomplete name="vtx" options={vtxOptions} sx={{ mb: 3 }} onChange={updateAutocomplete('vtx')} />
      </FormControl>
      <FormControl>
        <FormLabel>DC-DC</FormLabel>
        <Autocomplete name="dc" options={dcOptions} sx={{ mb: 3 }} onChange={updateAutocomplete('dc')} />
      </FormControl>
      <Stack alignItems="center">
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default SpecificationForm;
