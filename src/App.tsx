import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import ProductListingPage from './features/products/productListingPage';
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
