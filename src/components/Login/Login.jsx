import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authorizationSlice';
import { useNavigate } from 'react-router-dom';
import { fetchContacts } from 'redux/contactsSlice';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const action = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(action)) {
      navigate('/contacts');
      dispatch(fetchContacts());
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="div"
        sx={{
          mt: 3,
          color: 'white',
          backgroundColor: 'rgba(32, 65, 61, 0.14)',
          padding: '35px',
        }}
      >
        <Typography sx={{
              color: 'black'
                    }} variant="h4" >LOGIN</Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
            sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
            }}
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
              required
              color="primary"
            />
          </Box>
          <Box mt={2}>
            <TextField
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }}
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mt={3}>
            <Button sx={{
              backgroundColor: 'rgba(20, 121, 11, 0.623)'
                    }} type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
