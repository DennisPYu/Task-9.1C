import { Box } from '@chakra-ui/react';
import Header from './Header';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Box p={4}>
        {children}
      </Box>
    </Box>
  );
}
