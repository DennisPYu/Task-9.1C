import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { Box, Input, Button, Text, useToast} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const toast = useToast(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Logged in.',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigate('/'); // Navigate to home page after successful login
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <Box className="login-form" p={4}>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="blue" className="login-button">
          Login
        </Button>
        {errorMessage && <Text className="error-message">{errorMessage}</Text>}
      </form>
      <Button
        className="sign-up-button"
        colorScheme="blue"
        onClick={() => navigate('/signup')}
      >
        Sign Up
      </Button>
    </Box>
  );
}
