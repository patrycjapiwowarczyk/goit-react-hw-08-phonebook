import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/authorizationSlice';
import { clearContacts } from 'redux/contactsSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Link, Button } from '@mui/material';

const NavLink = React.forwardRef((props, ref) => (
  <Button
    ref={ref}
    component={RouterNavLink}
    variant="outlined"
    disableElevation
    sx={{
      '&.active': {
        backgroundColor: 'primary.main',
        color: 'white',
        textDecoration: 'none',
      },
      '&:hover': {
        backgroundColor: 'primary.main',
        color: 'white',
      },
      transition: 'background-color 250ms, color 250ms',
    }}
    {...props}
  />
));

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearContacts());
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="nav"
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
        }}
      >
        {user ? (
          <Link component="span" color="inherit" underline="none">
            {user.email}
          </Link>
        ) : (
          <NavLink to="/register" color="secondary">
            Register
          </NavLink>
        )}
        {user ? (
          <Button variant="outlined" color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <NavLink to="/login" color="secondary">
            Login
          </NavLink>
        )}
      </Box>
    </Container>
  );
};

export default Header;
