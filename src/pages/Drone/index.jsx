import { useParams } from 'react-router-dom';
import DroneTable from '../../components/Drone/DroneTable';
import { useRequest } from '../../api/useRequest';

const Drone = () => {
  const { id } = useParams();
  const { data } = useRequest(id ? `/drones/${id}` : null);

  return <div>{data && <DroneTable data={[data]} />}</div>;
};

export default Drone;
