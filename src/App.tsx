import './styles/Products.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './features/products/components/Header';
import ProductListingPage from './features/products/components/ProductListingPage';
import { Box } from '@mui/material';

function App() {
  return (
    <Box textAlign='center'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<ProductListingPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
