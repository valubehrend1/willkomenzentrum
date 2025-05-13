import { Box, Container, useMediaQuery, Grid, useTheme } from '@mui/material';
import HeaderBerlin from '../components/Header';
import NavigationButtonsBerlin from '../components/NavigationButtonsBerlin';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import Uberblick from '@/components/Uberblick';
import Breadcrumb from '@/components/Breadcrumb';
import '../../public/styles/home.css'
/* import NavigationMenu from '@/components/NavigationMenu';
import CollapsiblePanel from '@/components/CollapsiblePanel';
 */

import React from 'react';
const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [isOpen, setIsOpen] = React.useState(isDesktop);

  React.useEffect(() => {
    // Actualizar isOpen cuando cambie el tamaño de la pantalla
    setIsOpen(isDesktop);
  }, [isDesktop]);

  const handleButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="page-wrapper">
        <HeaderBerlin />

        <div id="layout-grid" className='kiekma ' role='main'>
          <Breadcrumb />
              <div className='search-container'>
                <SearchBar />
              </div>

              {!isDesktop && <h2>Einbürgerung</h2>}

              {isDesktop ? (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <NavigationButtonsBerlin
                      handleButtonClick={handleButtonClick}
                      isOpen={isOpen}
                      isDesktop={isDesktop}
                    />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Uberblick isDesktop={isDesktop} />
                  </Grid>
                </Grid>
              ) : (
                <>
                  <NavigationButtonsBerlin
                    handleButtonClick={handleButtonClick}
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                  />
                  {isOpen && <Uberblick />}
                </>
              )}
            </div>

        <div className='layout-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;