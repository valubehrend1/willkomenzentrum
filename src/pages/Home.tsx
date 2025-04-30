import { Box, Container} from '@mui/material';
import Header from '@/components/Header';
/* import NavigationMenu from '@/components/NavigationMenu';
import SearchBar from '@/components/SearchBar';
import CollapsiblePanel from '@/components/CollapsiblePanel';
import Footer from '@/components/Footer'; */

import EinburgerungPage from '@/components/Einburgerung';

const Home = () => {
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ flex: 1, pb: 7 }}>
      <EinburgerungPage />
      </Container>
      
    </Box>
  );
};

export default Home;