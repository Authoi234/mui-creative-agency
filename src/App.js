import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { CssBaseline } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Home } from '@mui/icons-material';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout></Layout>,
      path: '/',
      children: [
        {
          element: <Home></Home>,
          path: '/'
        }
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
