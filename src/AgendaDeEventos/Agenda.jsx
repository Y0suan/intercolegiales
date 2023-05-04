import React from 'react'
import styled from 'styled-components';
import Calendario from './Calendario';
import Ficture from './Ficture';


const Agenda = () => {
  return (
    <Cont>
            <div className="headero">
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
                <h2>Agenda</h2>
            </div>
        </div>
        <div className='cont'>
        <Ficture></Ficture>
        <Calendario></Calendario>
        </div>
    </Cont>
  )
}

export default Agenda

const Cont = styled.div`
width: 100%;
height: auto;
background-color: #F4F5FA;
display: flex;
flex-direction: column;
.headero{
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
.cont{
    width: 100%;
    height: 100vh;
    display: flex;
}
.img{
    width: 100%;
    height: 80vh;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fmiguel-teirlinck-VDkRsT649C0-unsplash.jpg?alt=media&token=f0787b23-c663-4c1d-b68b-9e5d68514dcc);
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
@media (max-width: 768px){
    .cont{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    }
}
@media (max-width: 425px){
    .img{
    width: 100%;
    height: 40vh;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fmiguel-teirlinck-VDkRsT649C0-unsplash.jpg?alt=media&token=f0787b23-c663-4c1d-b68b-9e5d68514dcc);
    background-size: cover;
    background-position: 20%;
    div{
        width: 100%;
        height: 100%;
        background-color: #00000078;
        padding: 25px;
    }
    h1{
        width: 100%;
        color: white;
        font-size: 50px;
    }
    h4{
        color: white;
        font-size: 20px;
    }
}
}
@media (max-width: 425px){
    .headero{
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