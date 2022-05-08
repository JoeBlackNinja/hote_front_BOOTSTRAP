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
import {Reservation} from './formularios/Reservation'
import AboutUs from './components/AboutUs';
import {SignUpBootstrap} from '../src/formularios/SignUpBootstrap';
import {Login} from '../src/formularios/Login';
import {Bills} from '../src/formularios/Bills';
import { Statistics } from './components/Statistics';
import { Anomalies } from './formularios/Anomalies'

function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enrutador renderizador={<Carrousel/>}/>}/>
        <Route path="/home" element={<Enrutador renderizador={<Carrousel/>}/>}/>
        <Route path="/signup" element={<Enrutador renderizador={<SignUpBootstrap/>}/>}/> 
        <Route path="/reservation" element={<Enrutador renderizador={<Reservation/>}/>}/>
        <Route path="/about" element={<Enrutador renderizador={<AboutUs/>}/>}/>    
        <Route path="/bills" element={<Enrutador renderizador={<Bills/>}/>}/>    
        <Route path="/login" element={<Enrutador renderizador={<Login/>}/>}/>
        <Route path="/statistics" element={<Enrutador renderizador={<Statistics/>}/>}/>
        <Route path="/anomalies" element={<Enrutador renderizador={<Anomalies/>}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
