import React from 'react'
import styled from 'styled-components'
import { BsArrowUpRight } from 'react-icons/bs';

function Home() {
  return (
    <Cont className="App">
      <div className="img">
        <div className='filtro'>
        <div className="cart">
          <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/icon%2Folimpiadas-66tfpsn8muv0__1_-removebg-preview.png?alt=media&token=3c5fff1b-a64c-43d0-a3db-2042c2c91ca9" alt="" />
          <img className='medio' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
          <img className='chico' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/icon%2Fdescarga-removebg-preview.png?alt=media&token=acb89063-a5eb-48ad-b141-21354a59fa0c" alt="" />
        </div>
        <div className="info">
          <h5>21 de septiembre 2023</h5>
          <h5>17 escuelas</h5>
          <h5>mas de 11  disciplinas</h5>
          {/* <a href="">Noticias del evento <BsArrowUpRight></BsArrowUpRight> </a> */}
        </div>
        </div>
      </div>
    </Cont>
  )
}

export default Home

const Cont = styled.div`
position: relative;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
.img{
    width: 100%;
    height: 98%;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fcnr24Rz1OGiNpM8xLcLiz6BH75473zFTlKv3nbtr.png?alt=media&token=bd69b58b-becf-4bb8-9051-73fdf1f16716);
    background-size: cover;
    
    .filtro{
        width: 100%;
        height: 100%;
        background-color: #00000055;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s;
        :hover{
        background-color: #00000089;
        transition: 0.5s;
        }
        .cart{
          width: 350px;
          height: 400px;
          background-color: white;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img{
            width: 50%;
          }
          .medio{
            border-top: 2px solid gray;
            border-bottom: 2px solid gray;
            margin-top: 5px;
          }
          .chico{
            width: 100px;
            height: 100px;
          }
        }
        .info{
          padding: 20px;
          width: 90%;
          height: 70px;
          background-color: white;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          h5{
            font-size: 15px;
            font-weight: 500;
          }
          a{
            text-decoration: none;
            font-size: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: black;
            background-color: rgb(211, 147, 29);
            padding: 10px;
            border-radius: 3px;
          }
        }
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
@media (max-width: 425px) {
  .img{
    .filtro{
      .info{
       width: 93%;
       padding: 5px;
       justify-content: space-evenly;
       h5{
            font-size: 13px;
            font-weight: 500;
        }
      } 
    }
  }

}
@media (max-width: 375px){
  .img{
    .filtro{
      .info{
       width: 100%;
       padding: 5px;
       justify-content: space-around;
       h5{
            font-size: 12px;
            font-weight: 500;
        }
      } 
    }
  }
}
`
