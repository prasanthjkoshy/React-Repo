import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/header';
import PLP from './containers/plp';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<PLP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
