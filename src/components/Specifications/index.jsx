import SpecificationsTable from './SpecificationsTable';
import { Button, Sheet } from '@mui/joy';
import AddForm from './AddSpecificationForm';
import { useMutate, useRequest } from '../../api/useRequest';
import AddModal from '../modals/AddModal';
import useModal from '../modals/useModal';

const Specifications = () => {
  const { open, triggerOpen } = useModal();
  const trigger = useMutate('/specifications');
  const { data } = useRequest('/specifications');

  const handleSubmit = async (data) => {
    trigger(data);
    triggerOpen();
  };

  return (
    <>
      <Sheet>
        <SpecificationsTable data={data} />
        <Button sx={{ mt: 4 }} onClick={triggerOpen}>
          Create Specification
        </Button>
      </Sheet>
      <AddModal title="Create Specification" onClose={triggerOpen} open={open}>
        <AddForm onSubmit={handleSubmit} />
      </AddModal>
    </>
  );
};

export default Specifications;
