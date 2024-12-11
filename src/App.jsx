// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Main} from './pages/Main/Main';  
import { Restaurante } from './pages/Restaurantes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Defina a rota inicial para o Main */}
        <Route path="/" element={<Main />} />
        <Route path="/restaurante" element={<Restaurante />} />
      </Routes>
    </Router>
  );
}

export default App;
