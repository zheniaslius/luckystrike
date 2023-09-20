import { Button, Sheet } from '@mui/joy';
import { useMutate, useRequest } from '../../api/useRequest';
import DroneTable from './DroneTable';
import AddDroneForm from './AddDroneForm';
import AddModal from '../modals/AddModal';
import useModal from '../modals/useModal';

const Drone = () => {
  const { open, triggerOpen } = useModal();
  const trigger = useMutate('/drone');
  const { data } = useRequest('/drone');

  const handleSubmit = async (data) => {
    trigger(data);
    triggerOpen();
  };

  return (
    <>
      <Sheet>
        <DroneTable data={data} />
        <Button sx={{ mt: 4 }} onClick={triggerOpen}>
          Create Drone
        </Button>
      </Sheet>
      <AddModal onClose={triggerOpen} title="Create Drone" open={open}>
        <AddDroneForm onSubmit={handleSubmit} />
      </AddModal>
    </>
  );
};

export default Drone;
