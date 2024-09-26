import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import { AuthProvider } from './Contexts/AuthContext'; 

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        {/* Wrap your app with AuthProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/signup" element={<Layout><SignUp /></Layout>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
