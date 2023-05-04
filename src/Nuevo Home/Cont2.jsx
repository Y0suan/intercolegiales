import React from 'react'
import styled from 'styled-components'
import Header from './Cont2/Header'
import Nav from './Cont2/Nav'
import Partidos from './Cont2/Partidos'


const Cont2 = () => {
  return (
    <Cont>
        <ContInt>
            <Header></Header>
            <Partidos></Partidos>
        </ContInt>
    </Cont>
  )
}

export default Cont2


const Cont = styled.div`
width: 70%;
height: auto;
@media (max-width: 425px){
  width: 100%;
}
`

const ContInt = styled.div`
width: 100%;
height: auto;
padding: 5%;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219);
background-color: #c7c7c7;
border-radius: 5px;
`
