import React from 'react'
import styled from 'styled-components'


const Noticia = () => {
  return (
    <Not>
        <div className="top">
            <div className="left">
                <h2>Noticias</h2>
                <h2>relacionadas</h2>
                <h3>Eventos destacados</h3>
            </div>
            <div className="ring">
                <p>¡No te pierdas ni un solo momento de la acción! Sigue leyendo para conocer las últimas noticias y eventos deportivos de la comunidad estudiantil.</p>
            </div>
        </div>
        <div className="body">
            <div className="card">
                <h5>Futbol</h5>
                <h3>28 y 29 de Abril</h3>
                <h3>inter futbol 2023</h3>
                <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Festasda.jpeg?alt=media&token=4d591521-0c5d-46dc-8bb5-f81c1c524726" alt="" />
            </div>
        </div>
    </Not>
  )
}

export default Noticia


const Not = styled.div`
width: 100%;
min-height: 100vh;
background-color: black;
.top{
    width: 100%;
    height: 40%;
    color: white;
    display: flex;
    .left{
        width: auto;
        padding: 5%;
        h2{
            text-transform: uppercase;
            font-size: 4rem;
        }
        h3{
            margin-top: 5%;
            font-weight: 400;
        }
    }
    .ring{
        display: flex;
        padding: 5%;
    }
}
.body{
    width: 100%;
    height: auto;
    padding: 2% 5%;
    .card{
        width:300px;
        color: white;
        background-color: #0f0f0f;
        padding: 20px;
        border-radius: 5px;
        h5{
            font-size: 15px;
            font-weight: 300;
        }
        h3{
            margin-top: 10px;
            font-size: 25px;
            font-weight: 400;
        }
        img{
            width: 100%;
            margin-top: 30px;
        }
    }
}
@media (max-width: 425px) {
    .top{
    flex-direction: column;
    .left{
        width: auto;
        padding: 2%;
        h2{
            font-size: 2rem;
        }
    }
    .ring{
        display: flex;
        padding: 5%;
        font-size: 15px;
    }
    }
    .body{
    padding: 2% 0%;
    display: flex;
    justify-content: center;
    }
}

`