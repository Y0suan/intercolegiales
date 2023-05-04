import React from 'react'
import styled from 'styled-components'
import Cont1 from './Cont1'
import Cont2 from './Cont2'

const Home = () => {
  return (
    <Cont>
        <Cont1></Cont1>
        <Cont2></Cont2>
    </Cont>
  )
}

export default Home

const Cont = styled.div`
display: flex;
position: relative;
@media (max-width: 1024px){

}
@media (max-width: 425px){
flex-direction: column;
height: auto;
display: none;
}
`