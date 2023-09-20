import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUserStore';
import { useEffect } from 'react';

const Login = ({ user }) => {
  const store = useAuthUserStore();
  const navigate = useNavigate();

  const loginUser = (user) => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
    store.setAuthUser(user);
    navigate('/dashboard');
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return <GoogleLogin onSuccess={loginUser} />;
};

export default Login;
