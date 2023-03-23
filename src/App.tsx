import './styles/Products.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './features/products/components/Header';
import ProductListingPage from './features/products/components/ProductListingPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<ProductListingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
