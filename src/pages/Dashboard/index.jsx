import { Tabs, TabList, Tab, TabPanel, Sheet, Stack } from '@mui/joy/';
import Specification from '../../components/Specifications';
import DroneList from '../../components/DroneList';

const Dashboard = () => {
  return (
    <Sheet>
      <Stack>
        <Tabs>
          <TabList>
            <Tab variant="plain" color="neutral">
              Specification
            </Tab>
            <Tab variant="plain" color="neutral">
              Drones
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <Specification />
          </TabPanel>
          <TabPanel value={1}>
            <DroneList />
          </TabPanel>
        </Tabs>
      </Stack>
    </Sheet>
  );
};

export default Dashboard;
