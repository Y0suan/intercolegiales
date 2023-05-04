import React from 'react'
import styled from 'styled-components'
import Ficture from './Modelo1'

const FictureHome = () => {
  return (
    <Cont>
        <div className="header">
            <div className="deportes">
                <a href="">Futbol</a>
                <a href="">Futsal</a>
                <a href="">Voley</a>
                <a href="">Basquetbal</a>
                <a href="">Cestoball</a>
            </div>
            <div className="titulo">
                <h2 className='eldo' >ELDORADO 2023</h2>
                <h2>FIXTURE</h2>
            </div>
        </div>
        <div className='desplegar'>
        <h3>Categoria A</h3>
        <Ficture></Ficture>
        </div>
        <div className='desplegar' >
        <h3>Categoria B</h3>
        <Ficture></Ficture>     
        </div>
        <div className='desplegar'>
        <h3>Categoria C</h3>
        <Ficture></Ficture>
        </div>
    </Cont>
  )
}

export default FictureHome
const Cont = styled.div`
width: 100%;
height: 100vh;
.header{
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
.desplegar{
    width: 100%;
    height: 13vh;
    overflow: hidden;
    margin-bottom: 10px;
    transition: 2s;
    :hover{
        height: 100vh;
        transition: 2s;
    }
}
h3{
    left: 10px;
    font-size: 3rem;
    position: absolute;
    color: #fdfdfd;
    border-bottom: 1px solid #fdfdfd;
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
.desplegar{
    width: 100%;
    height: 13vh;
    overflow: hidden;
    overflow-x: scroll;
    margin-bottom: 10px;
    transition: 2s;
    :hover{
        height: 100vh;
        transition: 2s;
    }
}
}
`
