import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { Box, Input, Button, Text,useToast  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../Utils/Firebase'; 
import '../Signup.css'; 

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const toast = useToast(); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      toast({
        title: 'Account created.',
        description: 'You have successfully signed up. You can now log in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigate('/login');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrorMessage('Error signing up. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log('User signed in with Google:', result.user);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      setErrorMessage('Error signing in with Google. Please try again.');
    }
  };

  return (
    <Box className="sign-up-form" p={4}>
      <form onSubmit={handleSignUp}>
        
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
        <Button type="submit" colorScheme="blue">
          Sign Up
        </Button>
        {errorMessage && <Text className="error-message">{errorMessage}</Text>}
      </form>
      <Button className="login-button" colorScheme="blue" onClick={() => navigate('/login')}>
        Login
      </Button>
      <Button className="google-sign-in-button" colorScheme="blue" onClick={handleGoogleSignIn}>
        Sign Up with Google
      </Button>
    </Box>
  );
}