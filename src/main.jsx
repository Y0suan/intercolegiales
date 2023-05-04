import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Voley from './Deportes.jsx/Voley'
import Atletismo from './Deportes.jsx/Atletismo'
import Maraton from './Deportes.jsx/Maraton'
import Rugby from './Deportes.jsx/Rugby'
import Cestoball from './Deportes.jsx/Cestoball'
import Basquetbol from './Deportes.jsx/Basquetbol'
import Resultados from './Resultados/Resultados'
import Partidos from './Inscripciones/Partidos'
import Inscripcion from './Inscripciones/Inscripcion'
import Reglamento from './Reglamento/Reglamento'
import Calendario from './AgendaDeEventos/Calendario'
import Agenda from './AgendaDeEventos/Agenda'
import FictureHome from './fixture/Ficture'
import HomeAdmin from './AdminIntercolegiales.jsx/HomeAdmin'
import AgendarUnEvento from './AdminIntercolegiales.jsx/AgendarUnEvento'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Voleibol' element={<Voley/>} />
      <Route path='/Atletismo' element={<Atletismo/>} />
      <Route path='/Maraton' element={<Maraton/>} />
      <Route path='/Rugby' element={<Rugby/>} />
      <Route path='/Cestoball' element={<Cestoball/>} />
      <Route path='/Basquetbol' element={<Basquetbol/>} />
    
      <Route path='/Resultados' element={<Resultados/>} />
      <Route path='/Inscripcion' element={<Inscripcion/>} />
      <Route path='/Reglamento' element={<Reglamento/>} />


      <Route path='/Calendario' element={<Agenda/>} />
      <Route path='/FictureHome' element={<FictureHome/>} />

      <Route path='/HomeAdmin' element={<HomeAdmin/>} />
      <Route path='/AgendarUnEvento' element={<AgendarUnEvento/>} />
    </Routes>
    </BrowserRouter>
 
  </React.StrictMode>,
)
