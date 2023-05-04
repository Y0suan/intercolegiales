import React from 'react'
import styled from 'styled-components'
import Deportes from '../PagesEfect/Deportes'
import { Link } from 'react-router-dom'
import Nav from '../PagesEfect/Nav'
import Contador from '../Contador/Contador'

const Reglamento = () => {
  return (
    <Cont>
            <Contador/>
            <Nav/>
            <div className="header">
            <div className="deportes">
                <a href="">Futbol</a>
                <a href="">Futsal</a>
                <Link  className='link'  to={'/Voleibol'}>Voleibol</Link>
                <Link className='link' to={'/Basquetbol'} >Baquetbol</Link>
                <Link className='link' to={'/Cestoball'} >Cestoball</Link>
                <a href="">Atletismo</a>
                <Link className='link' to={'/Maraton'}>Maraton</Link>
            </div>
            <div className="titulo">
                <h2 className='eldo' >ELDORADO 2023</h2>
                <h2>Reglamento</h2>
            </div>
        </div>
        <Deportes></Deportes>
    </Cont>
  )
}

export default Reglamento


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
    background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Ffeo-con-ganas-DiOWbQiS5c4-unsplash.jpg?alt=media&token=57537193-3fd6-4dc3-a0f9-f9a62e9beba2);
    background-size: cover;
    background-position: 20%;
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