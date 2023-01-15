
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme1 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
    },

  })
  const theme2 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#673ab7',
        main: '#ff5722',
        dark: '#002884',
        contrastText: '#fff',
      },
    },
  })
  return (
    <>
      <ThemeProvider theme={theme1}>

        <RouterProvider router={router}>

        </RouterProvider>

      </ThemeProvider>
    </>
  );
}

export default App;
