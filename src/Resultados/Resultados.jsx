import React from 'react'
import styled from 'styled-components'
import ListResultados from './ListResultados'
import Nav from '../PagesEfect/Nav'
import Contador from '../Contador/Contador'


const Resultados = () => {
  return (
    <Cont>
        <Contador/>
        <Nav/>
        <div className="header">
            <div className="deportes">
                <a href="">Futbol</a>
                <a href="">Futsal</a>
                <a href="">Voley</a>
                <a href="">Basquetbal</a>
                <a href="">Cestoball</a>
                <a href="">Atletismo</a>
                <a href="">Maraton</a>
            </div>
            <div className="titulo">
                <h2 className='eldo' >ELDORADO 2023</h2>
                <h2>Resultado</h2>
            </div>
        </div>
        <ListResultados></ListResultados>
    </Cont>
  )
}

export default Resultados

const Cont = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
.header{
    padding: 20px;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
}
.deportes{
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a{
        text-decoration: none;
        color: black;
        :hover{
            color: #2958F0;
        }
    }
}
.titulo{
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        border-left: 1px solid gray;
    }
    .eldo{
        color: #2451e6;
    }
}

.nav{
    width: 100%;
    height: 10vh;
}
.img{
    width: 100%;
    height: 80vh;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fmarkus-spiske-J_tbkGWxCH0-unsplash.jpg?alt=media&token=0ab7bd0f-9249-49a3-b4e0-a797881b05a7);
    background-size: cover;
    
    div{
        width: 100%;
        height: 100%;
        background-color: #00000078;
        padding: 25px;
    }
    h1{
        width: 500px;
        color: white;
        font-size: 90px;
    }
    h4{
        color: white;
        font-size: 20px;
    }
}
@media (max-width: 425px){
    .header{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    margin: 10px 0px;
}
.deportes{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a{
        font-size: 12px;
        text-decoration: none;
        color: black;
        :hover{
            color: #2958F0;
        }
    }
}
.titulo{
    font-size: 1.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        border-left: none;
    }
    .eldo{
        color: #2451e6;
    }
}
}
`