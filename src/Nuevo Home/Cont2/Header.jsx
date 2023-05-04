import React from 'react'
import styled from 'styled-components'
import { FaCircle } from 'react-icons/fa';



const Header = () => {
  return (
    <Cont>
        <h2>Proximo Evento</h2>
        <div>
            <img className='basquet' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2FHow_To_Draw_A_Cartoon_Basketball___A_Step_by_Step_Guide-removebg-preview.png?alt=media&token=dce3ab2a-1508-46da-8474-f7ac12e0859a" alt="" />
            <a className='live' href="https://www.youtube.com/watch?v=zUaYZRu8aiU"><FaCircle className='icon'/> En vivo</a>
            <div className="partido">
                <div className='jugadores'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F15.jpg?alt=media&token=ce8f939a-ef3e-400e-abb5-c2950949a795" alt="" />
                    <h3>VS</h3>
                    <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F11.jpg?alt=media&token=712e56c7-1fce-4604-9a12-7183f2709aa5" alt="" />
                </div>
                <div className="fecha">
                    <h5>20/06/2023</h5>
                    <h6>en el polideportivo del 4km</h6>
                </div>
                <div className="botones">
                    <button className='azul' >En vivo</button>
                    <button>Calendario</button>
                </div>
            </div>
        </div>
    </Cont>
  )
}

export default Header
const Cont = styled.div`
width: 100%;
height: 50vh;
h2{
    font-size: 40px;
    font-weight: 500;
}
div{
    width: 100%;
    height: 90%;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
    background-color: white;
    .basquet{
        position: absolute;
        bottom: 10;
        right: 100px;
        width: 250px;       
    }
    .live{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        font-weight: 600;
        margin-bottom: 7px;
        .icon{
            color: #d40505;
        }

    }
    .partido{
        width: 60%;
        height: 60%;
        padding: 20px;
        background-color: #ffffff;
        justify-content: space-around;
        /* box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219); */
        .jugadores{
            background-color: transparent;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            h3{
                background-color: white;
                padding: 10px;
                border-radius: 5px;
                color: gray;
            }
            img{
                width: 60px;
                border-radius: 50%;
            }
        }
        .fecha{
            margin: 10px 0;
            width: 75%;
            height: auto;
            justify-content: flex-start;
            flex-direction: row;
            background-color: transparent;
            align-items: flex-end;
            h5{
                font-size: 15px;
            }
            h6{
               font-size: 15px;
               margin-left: 5px;
               color: gray;
            }
        }
        .botones{
            margin-top: 5px;
            background-color: transparent;
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            button{
                width: 40%;
                height: 40px;
                border-radius: 5px;
                border: transparent;
                font-size: 17px;
                font-weight: 500;
                cursor: pointer;
                background-color: #222222;
                color: white;
            }
            .azul{
                background-color: #025BFF;
                color: white;
            }
        }
    }

}
@media (max-width: 425px){
  width: 100%;
height: auto;
}
`
