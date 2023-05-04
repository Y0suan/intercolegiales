
import './App.css'
import styled from 'styled-components'
import Home from './PagesEfect/Home'
import Escuelas2 from './PagesEfect/Escuelas copy'
import Deportes from './PagesEfect/Deportes'
import Home2 from './Nuevo Home/Home'
import Partidos from './Inscripciones/Partidos'
import Intro from './Intro'
import Nav from './PagesEfect/Nav'
import Ficture from './fixture/Modelo1'
import Noticia from './EventosRelacionados/Noticia'
import Contador from './Contador/Contador'

function App() {
 

  return (
    <Cont className="App">
      <Contador/>
      <Nav></Nav>
      <Home/>
      <Intro></Intro>
      <Noticia/>
      {/* <Home2/> */}
      {/* <Ficture></Ficture> */}
      {/* <Escuelas2></Escuelas2> */}
      {/* <Deportes></Deportes> */}
      {/* <Cont2></Cont2> */}
      
    </Cont>
  )
}

export default App



const Cont = styled.div`
width: 100%;
overflow: hidden;
/* :hover{
.c1{
transition: 3s;
left: -300px;
bottom: -200px;
}
.c2{
transition: 2s;
right: -350px;
bottom: 200px;
}
.c3{
top: -300px;
left: -200px;
transition:4s;
}
.c4{
bottom:-200px;
right: -100px;
transition: 2s;
} */


`

const Cont2 = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
`