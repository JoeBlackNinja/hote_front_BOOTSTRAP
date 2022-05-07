import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import { Enrutador } from './components/Enrutador';
import SignUp from './formularios/SignUp';
import {Carrousel} from './components/Carrousel';
import RegisterUser from './formularios/RegisterUser';
import Reservation from './formularios/Reservation'
import AboutUs from './components/AboutUs';

function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enrutador renderizador={<Carrousel/>}/>}/>
        <Route path="/home" element={<Enrutador renderizador={<Carrousel/>}/>}/>
        <Route path="/signup" element={<Enrutador renderizador={<SignUp/>}/>}/> 
        <Route path="/reservation" element={<Enrutador renderizador={<Reservation/>}/>}/>
        <Route path="/about" element={<Enrutador renderizador={<AboutUs/>}/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
