import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import PLP from './components/plp';
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
