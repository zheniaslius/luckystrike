import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="169027321973-3s3tua3nin2gpfq758dj3kpq7fe8jlh0.apps.googleusercontent.com">
    <SWRConfig value={{ fetcher }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </LocalizationProvider>
    </SWRConfig>
  </GoogleOAuthProvider>
);
