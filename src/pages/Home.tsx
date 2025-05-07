import { Box, Container } from '@mui/material';
import HeaderBerlin from '../components/Header';
import NavigationButtonsBerlin from '../components/NavigationButtonsBerlin';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
/* import NavigationMenu from '@/components/NavigationMenu';
import CollapsiblePanel from '@/components/CollapsiblePanel';
 */

import React from 'react';
const Home = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <HeaderBerlin />

        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="lg" sx={{ p: 2, width: '100%' }}>
            <Box sx={{ marginBottom: 2 }}>
              <SearchBar />
            </Box>
            <NavigationButtonsBerlin handleButtonClick={handleButtonClick} isOpen={isOpen}/>
          </Container>
        </Box>

        <Box sx={{
          width: '100%',
          marginTop: 'auto' // Esto empuja el footer hacia abajo si hay espacio disponible
        }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;