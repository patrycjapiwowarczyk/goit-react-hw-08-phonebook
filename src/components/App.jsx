import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Header from './Header/Header';
import Notification from './Notification/Notification';
import Authorization from './Authorization/Authorization';
import eventEmitter from 'eventEmiter';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/authorizationSlice';

const Register = lazy(() => import('./Register/Register'));

const pageTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9CB3A9',
      hover: 'rgba(255, 0, 0, 0.666)',
    },
    secondary: {
      main: '#000000',
    },
    black: {
      main: 'black',
    },
    background: {
      default: '#FFFFFFF',
      paper: '#000000',
    },
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onLogout = () => {
      dispatch(logoutUser());
    };

    eventEmitter.on('logout', onLogout);

    return () => {
      eventEmitter.off('logout', onLogout);
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      <div>
        <Header />
        <Routes>
          <Route
            path="/*"
            element={
              <Authorization>
                <Outlet />
              </Authorization>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Notification />
      </div>
    </ThemeProvider>
  );
}

export default App;
