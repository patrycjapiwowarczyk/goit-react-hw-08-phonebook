import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/authorizationSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/contacts');
    }
  }, [user, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
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
                    }} variant="h4">REGISTER</Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }}
              id="name"
              label="Name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              fullWidth
              required
            />
          </Box>
          <Box mt={2}>
            <TextField
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }}
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
              required
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
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
