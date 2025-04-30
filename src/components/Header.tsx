import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { 
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import berlinLogo from '../../public/assets/berlin-logo.png'

const BerlinLogo = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  marginRight: theme.spacing(1),
}));

const BerlinText = styled('span')(({ theme }) => ({
  color: '#e53935',
  fontWeight: 'bold',
  marginRight: theme.spacing(0.5),
}));

const BreadcrumbBar = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.grey[100],
  borderRadius: 0,
}));

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export default function NavigationMenu() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
        <Box 
            component="img" 
            src={berlinLogo}
            alt="Berlin Logo" 
            sx={{ 
              height: '32px', 
              mr: 1,
              border: '1px solid red',
              p: 0.5,
              borderRadius: '2px'
            }} 
          />
          
          {isMobile ? (
            <Typography variant="subtitle1" sx={{ flexGrow: 1, ml: 1 }}>
              Willkommenszentrum
            </Typography>
          ) : (
            <>
              <Typography variant="subtitle1" sx={{ flexGrow: 1, ml: 1 }}>
                Willkommenszentrum
              </Typography>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      
      <BreadcrumbBar>
        <StyledBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Typography color="textSecondary" variant="body2">
            Startseite
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Aufenthalt
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ fontWeight: 500 }}>
            Einbürgerung
          </Typography>
        </StyledBreadcrumbs>
      </BreadcrumbBar>
      
      {isMobile && (
        <BottomNav showLabels>
          <BottomNavigationAction 
            label="Startseite" 
            icon={<HomeIcon />} 
          />
          <BottomNavigationAction 
            label="Menü" 
            icon={<MenuIcon />} 
          />
          <BottomNavigationAction 
            label="Suche" 
            icon={<SearchIcon />} 
          />
        </BottomNav>
      )}
    </>
  );
}