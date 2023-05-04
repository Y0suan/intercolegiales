import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';




const Deportes = () => {
  return (
    <Cont>
        <Deport>
            <div>
                <h3>A</h3>
                <a href="">Atletismo  <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt="" /> <AiOutlineArrowRight className='arrow'></AiOutlineArrowRight></a>
                
            </div>
            <div>
                <h3>B</h3>
                <Link className='link' to={'/Basquetbol'} >
                <a href="">Basquetbol   <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt="" className="icon colorBlue" /> <AiOutlineArrowRight className='arrow'></AiOutlineArrowRight></a>
                </Link>
            </div>
            <div>
                <h3>C</h3>
                <Link className='link' to={'/Cestoball'} >
                <a href="">Cestoball <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt="" /> </a>
                </Link>
            </div>
            <div>
                <h3>F</h3>
                <a href="">Futbol de campoc <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Ffutbol.svg?alt=media&token=7302dc83-f6db-47ff-8b05-05d754b424d4" alt="" /></a>
                <a href="">Fub/Sal <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Ffutbol.svg?alt=media&token=7302dc83-f6db-47ff-8b05-05d754b424d4" alt="" /> </a>
            </div>
            <div>
                <h3>M</h3>
                <Link className='link' to={'/Maraton'}>
                <a href="">Maraton<img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt="" />  <AiOutlineArrowRight className='arrow'></AiOutlineArrowRight> </a>
                </Link>
            </div>
            <div>
                <h3>V</h3>
                <Link  className='link'  to={'/Voleibol'}>
                <a href="">Voleibol  <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fvoleybol.svg?alt=media&token=5a23ccef-ada1-4a05-ba32-b10dd92e1166" alt=""  /> <AiOutlineArrowRight className='arrow'></AiOutlineArrowRight></a>
                </Link>
            </div>
            <div>
                <h3>R</h3>
                <a href="">Rugby <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Frugbi.svg?alt=media&token=601cd6e0-685c-43ee-91bd-f6bad28f1972" alt="iconRugby" /> </a>
            </div>
        </Deport>
        <Circel></Circel>
        <Circel2></Circel2>
        {/* <Line></Line> */}
        <Circel3></Circel3>
    </Cont>
  )
}

export default Deportes


const Cont = styled.div`
margin-top: 100px;
width: 100%;
height: auto;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

`
const Title = styled.h2`
width: 100%;
height: auto;
font-size: 7rem;
padding-left: 20%;
`
const Deport = styled.div`

width: 70%;
display: flex;
align-items: center;
flex-wrap: wrap;
div{
    padding: 4px;
    width: 25%;
    display: flex;
    flex-direction: column;
    h3{
        font-size: 60px;
        font-weight: 400;
    }
    .link{
        
    }
    a{
        width: 100%;
        border-radius: 5px;
        display: flex;
        text-decoration: none;
        color: black;
        font-size: 28px;
        font-weight: 400;
        position: relative;
        padding-left: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            position: absolute;
            width: 80px;
            height: 80px;
            top: -20px;
            right: 50px;
            visibility: hidden;
        }
        .arrow{
            visibility: hidden;
            color: black;
        }
    }
}
a:hover{
    transition: .4s;
    background-color: black;
    color: white;
    img{
        visibility: visible;
        background-color: white;
    }
    .arrow{
            visibility: visible;
            font-size: 30px;
            color: white;
    }
}
`
const Circel = styled.div`
position: absolute;
left: -200px;
bottom: -300px;
transition: 2s;
border: 40px solid rgb(3, 129, 199);
width:500px;
height: 500px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
z-index: -1;
`
const Circel2 = styled.div`
position: absolute;
right: -200px;
transition: 2s;
border: 40px solid  rgb(237, 45, 48);
width:400px;
height: 400px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`
const Circel3 = styled.div`
position: absolute;
left: -250px;
bottom: 10px;
transition: 2s;
border: 40px solid  rgb(248, 164, 53);
width:400px;
height: 400px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
z-index: -1;
`