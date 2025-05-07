import { createTheme } from '@mui/material/styles';

// Tema personalizado para la aplicación que es compatible con los estilos de Berlín
const theme = createTheme({
  palette: {
    primary: {
      main: '#e53935', // Rojo similar al branding de Berlin
    },
    secondary: {
      main: '#f8bbd0', // Rosa claro para el selector de idioma
    },
    // Mantenemos los colores de fondo y texto pero permitimos que los estilos de Berlín tengan prioridad
  },
  typography: {
    // Dejamos la configuración básica de tipografía pero con menor especificidad
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    // Mantenemos algunas personalizaciones de componentes pero reducimos su especificidad
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    // Eliminamos algunas configuraciones que podrían estar en conflicto con los estilos de Berlín
  },
});

export default theme;