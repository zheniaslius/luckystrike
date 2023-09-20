import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Drone from './pages/Drone';
import { useAuthUserStore } from './store/authUserStore';
import { useEffect } from 'react';

function App() {
  const store = useAuthUserStore();
  const user = store.authUser;

  useEffect(() => {
    const theUser = localStorage.getItem('user');

    if (theUser && !theUser.includes('undefined')) {
      store.setAuthUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="drones/:id"
          element={
            <ProtectedRoute user={user}>
              <Drone />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
