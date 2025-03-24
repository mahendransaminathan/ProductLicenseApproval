//import logo from './logo.svg';

import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './modules/HomePage/HomePage.js';
         
import PersonDetails from './modules/PersonDetails/PersonDetails.js';
import CompanyDetails from './modules/CompanyDetails/CompanyDetails.js';
import ProductDetails from './modules/ProductDetails/ProductDetails.js';
import './App.css';
import { AppBar, Toolbar, Button, Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
}
);
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="ReactApp">
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/person">Person</Button>
              <Button color="inherit" component={Link} to="/company">Company</Button>
              <Button color="inherit" component={Link} to="/product">Product</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box className="content-container" sx={{ display: 'flex', justifyContent: 'center' }}>
                 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/person" element={<PersonDetails />} />
              <Route path="/company" element={<CompanyDetails />} />
              <Route path="/product" element={<ProductDetails />} />
            </Routes>
        </Box>
            
      </div>
      
      </Router>
    </ThemeProvider>
  );
}
export default App;
