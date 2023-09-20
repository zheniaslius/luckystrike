import { Button, Stack } from '@mui/joy';
import DroneCard from './DroneCard';
import { useRequest, useMutate } from '../../api/useRequest';
import useModal from '../modals/useModal';
import AddModal from '../modals/AddModal';
import AddDroneForm from '../Drone/AddDroneForm';

const DroneList = () => {
  const { open, triggerOpen } = useModal();
  const trigger = useMutate('/drones');
  const { data } = useRequest('/drones');

  const handleSubmit = async (data) => {
    trigger(data);
    triggerOpen();
  };

  return (
    <div>
      <Stack flexDirection="column" alignItems="flex-end">
        <Button sx={{ mb: 4 }} onClick={triggerOpen}>
          Create Drone
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={3}>
      {data?.map((drone) => (
        <DroneCard key={drone.__id} {...drone} />
      ))}
      </Stack>
      <AddModal onClose={triggerOpen} title="Create Drone" open={open}>
        <AddDroneForm onSubmit={handleSubmit} />
      </AddModal>
    </div>
  );
};

export default DroneList;
