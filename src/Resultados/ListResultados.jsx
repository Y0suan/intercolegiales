import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ListResultados = () => {
  return (
    <Cont>
      <Card>
        <div className="categoria">Categoria A</div>
        <div className='logo'>
          <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F12.jpg?alt=media&token=662300cf-8683-4992-a681-4a21c34734f5" alt="" />
        </div>
        <h4 className='escuela'>Instituto San Fransisco de Asis</h4>
        <h5 className="deporte">Voley</h5>
        <h5 className='premio'>Primer Lugar</h5>
      </Card>
    </Cont>
  )
}

export default ListResultados

const Cont = styled.div`
width: 100%;
height: 100vh;
background-color: #f3f3f3;
padding: 5%;
`

const Card = styled.div`
width: 250px;
height: 350px;
background-color: #ffffff;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content:space-around;
padding: 10px;
.categoria{
font-weight: 300;
text-transform: uppercase;
font-size: 14px;
}
.logo{
  width: 100%;
  display: flex;
  justify-content: center;
  img{
    border-radius: 50%;
  }
}
.escuela{
font-size: 20px;
font-weight: 400;
border-bottom: 1px solid gray;
}
.deporte{
  font-size: 18px;
  font-weight: 400;
  color: #6e6e6e;
}
.premio{
  font-size: 18px;
  font-weight: 400;
  color: #6e6e6e;
}
`