import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';

const CardButton = ({ title, onClick }) => (
  <Button
    variant="solid"
    size="md"
    color="primary"
    aria-label="Explore Bahamas Islands"
    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
    onClick={onClick}
  >
    {title}
  </Button>
);

const DroneCard = ({ _id, createdAt }) => {
  const createdDate = dayjs(createdAt).toString();
  const navigate = useNavigate();

  const openDronePage = (id) => {
    navigate(`/drones/${id}`);
  };

  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{_id}</Typography>
        <Typography level="body-sm">{createdDate}</Typography>
      </div>
      <CardContent orientation="horizontal"></CardContent>
      <CardActions buttonFlex="0 1 120px">
        <CardButton title="View" onClick={() => openDronePage(_id)} />
        <CardButton title="Update" />
      </CardActions>
    </Card>
  );
};

export default DroneCard;
