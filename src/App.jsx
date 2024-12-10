// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Main} from './pages/Main/Main';  // Importe seu componente Main
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Defina a rota inicial para o Main */}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
