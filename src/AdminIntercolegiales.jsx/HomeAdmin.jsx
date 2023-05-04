import React from 'react'
import styled from 'styled-components'
import NavAdmin from './NavAdmin'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HomeAdmin = () => {


  return (
    <Cont>
        <NavAdmin/>
        <Home>
            <div className="card">
                <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fklara-kulikova-uJ8EkPM6mDQ-unsplash.jpg?alt=media&token=df8d528d-d991-4757-908e-446c43c81d90" alt="" />
                <div className="texto">
                    <div>
                    <h1>intercolegiales</h1>
                    <h1>Eldorado 2023</h1>
                    </div>
                    <p>¡Prepárate para las Olimpiadas Estudiantiles! Este emocionante evento deportivo reúne a estudiantes de toda la ciudad para competir en una variedad de deportes y demostrar sus habilidades atléticas. Con eventos como carreras, saltos, lanzamientos y juegos de equipo, las Olimpiadas Estudiantiles son una oportunidad única para que los jóvenes atletas muestren su espíritu deportivo</p>
                  <Link  to={'/AgendarUnEvento'}> <a href="">Agregar un evento</a></Link> 
                </div>
            </div>
        </Home>

        <ContInst>
          <div className='contCard'>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt="" /> 
            <a target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSe1HYUL_Nu2xw50MjDqbkPwToF_4K9GpoED8iHh_wdnsOevsA/viewform">Inscribete en atletismo <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
           </div>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt="" />
            <a target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSdxlB-eXm2NpTFiMZ5bgJzCTkpTNvMxZojuOsWEO5MqA8PaHQ/viewform">Inscribete en Basquetbal <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
            </div>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt="" />
            <a  target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSf3YJbUVywxAjrBhoD5BvA9nNfrA3j56W0ZgRKyBX-4UCx4UA/viewform">Inscribete en Cestoball <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
            </div>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Ffutbol.svg?alt=media&token=7302dc83-f6db-47ff-8b05-05d754b424d4" alt="" />
            <a target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSfzWs6GcRm2GSAf5Qo-WXz-OUujdIkgFxYkxlLp9tyFA_NtFg/viewform">Inscribete en Futbol <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
            </div>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Ffutbol.svg?alt=media&token=7302dc83-f6db-47ff-8b05-05d754b424d4" alt="" />
            <a target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSdARXS7ODFx_HdBSuDy5a_3MlOV9btLWDdpV_j6H5ZDQwkNoQ/viewform">Inscribete en Futsal <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
            </div>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt="" />
            <a target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSe1HYUL_Nu2xw50MjDqbkPwToF_4K9GpoED8iHh_wdnsOevsA/viewform">Inscribete en la Maraton <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
            </div>
            <div className="cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fvoleybol.svg?alt=media&token=5a23ccef-ada1-4a05-ba32-b10dd92e1166" alt="" />
            <a target={'_blank'} href="https://docs.google.com/forms/d/e/1FAIpQLSetWUrWVpuCo0tJme4BW4PULMNfCPr6tv4OwshQZJh99pd7ZA/viewform">Inscribete en Voley <AiOutlineArrowRight className='arrow'/> </a>
            <img className='fondo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
            </div>
            </div>
        </ContInst>

    </Cont>
  )
}

export default HomeAdmin

const Cont = styled.div`
width: 100%;
height: 100vh;
overflow-x: hidden;
`
const Home = styled.div`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.card{
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% 0%;
    img{
        width: 70%;
        height: 100%;
    }
    .texto{
        padding: 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
          h1{
            text-transform: uppercase;
            line-height: 90%;
            font-size:3rem;
        }}
        p{
          text-align: justify;
        }
        a{
            width: fit-content;
            text-decoration: none;
            color: white;
            background-color: black; 
            padding: 10px 30px;
            border-radius: 5px;
            font-weight: 200;
        }
    }
}
@media (max-width: 425px) {
  height: auto;
      .card{
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    display: flex;
    margin: 3% 0%;
    img{
        width: 70%;
    }
    .texto{
        width: 70%;
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
          h1{
            text-transform: uppercase;
            line-height: 90%;
            font-size:2rem;
        }
        }
        p{
          text-align: justify;
        }
        a{
            width: fit-content;
            text-decoration: none;
            color: white;
            background-color: black; 
            padding: 10px 30px;
            border-radius: 5px;
            font-weight: 200;
        }
    }
}
    }
@media (max-width: 425px) {
      .card{
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    display: flex;
    margin: 3% 0%;
    img{
        width: 70%;
    }
    .texto{
        width: 70%;
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1{
            text-transform: uppercase;
            line-height: 90%;
            font-size:2.6rem;
        }
        p{
          margin-top: 10px;
        }
        a{
            width: 100%;
            text-align: center;
            margin-top:10px ;
        }
    }
}
    }
`

const ContInst = styled.div`
width: 100%;
height: auto;
padding: 5%;
display: flex;
overflow-x: scroll;
.contCard{
  display: flex;
  height: auto;
}
.cart{
  margin-left: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219);
    width: 230px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .fondo{
        position: absolute;
        z-index: -1;
    }
    a{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1a1a1a;
        margin-top: 15px;
        background-color: #ececec;
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 15px;
        .arrow{
            margin-left: 20px;
        }
    }
    img{
        width: 50%;
        z-index: 1;
    }
}
`