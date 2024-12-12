// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Main} from './pages/Main/Main';  
import { Restaurante } from './pages/Restaurantes';
import { Login } from './pages/Cadastro';
import { Delivery } from './pages/Delivery';
import { Reservas } from './pages/Reservas';
import { Rodizio } from './pages/Rodizio';
import { Carrinho } from './pages/Carrinho';
import './App.css';
import { Cadastro } from './pages/Cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        {/* Defina a rota inicial para o Main */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/reservas" element={<Reservas />}/>
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/rodizio" element={<Rodizio />}/>
        <Route path="/carrinho" element={<Carrinho />}/>
      </Routes>
    </Router>
  );
}

export default App;
