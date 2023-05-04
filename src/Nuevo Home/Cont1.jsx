import React from 'react'
import styled from 'styled-components'
import Deportes from './Cont1/Deportes'
import PartidosJugados from './Cont1/PartidosJugados'


const Cont1 = () => {
  return (
    <Cont>
        <ContInfo>
          <Deportes></Deportes>
          <PartidosJugados></PartidosJugados>
        </ContInfo>
    </Cont>
  )
}

export default Cont1

const Cont = styled.div`
position: relative;
width: 30%;
height: 100vh;
/* background-color: #CFD2D8; */
display: flex;
justify-content: center;
align-items: center;
padding: 0% 2%;
@media (max-width: 1024px){
width: 40%;
}
@media (max-width: 425px){
width: 100%;
height: 50vh;
}
`
const ContInfo = styled.div`
width: 100%;
height: 100%;
background-color: white;
border-radius: 5px;
padding: 20px;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219);
@media (max-width: 425px){
  width: 100%;
height: auto;
}
`
