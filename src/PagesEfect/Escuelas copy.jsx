import React from 'react'
import styled from 'styled-components'
import getAll from '../function/getAll';

const Escuelas2 = () => {
    const [escuelas,setEscuelas]=React.useState([]);
  
    function actualizarEstadoEventos(){
        getAll().then((escuelas)=>{
            setEscuelas(escuelas);
        });
       }
    
       React.useEffect(()=>{
        actualizarEstadoEventos();
       },[]);
    
     



  return (
    <Cont>
        <Title>Participantes</Title>
        <Escuelas>
        {escuelas && escuelas.map((escuela)=>(
            <div>
                <img className='uno' style={{background:(escuela.color)}} src={escuela.icon} alt="" />
                <h3>{escuela.nombre}</h3>
                <img src={escuela.logo} alt="" />
            </div>
        ))}    

        </Escuelas>
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>

    </Cont>
  )
}

export default Escuelas2


const Cont = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
.circle{
background-color: rgb(248, 194, 53);
width: 150%;
height: 150px;
position: absolute;
border-radius: 500px;
left: -200px;
z-index: -1;
}
.circle2{
background-color: rgb(8, 190, 82);
width: 150px;
height: 800px;
position: absolute;
border-radius: 500px;
left: 100px;
top: 400px;
}

.circle3{
background-color: rgb(3, 129, 199);
transform: rotate(50deg);
width: 500px;
height: 150px;
position: absolute;
border-radius: 500px;
right: -140px;
top: 400px;
}
`

const Title = styled.h2`
width: 100%;
display: flex;
justify-content: center;
text-transform: uppercase;
font-size: 3rem;
z-index: 1;
@media (min-width: 800px) {
    margin-top: 10%;
    font-size: 8rem;
}
`

const Escuelas = styled.h2`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column-reverse;
font-size: 150%;
background-color: #ced4da;
div{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    text-transform: uppercase;
    position: relative;
    color: #1a1b1d;
    border-bottom: .5px solid #afafaf;
    padding-left: 3px;
    .uno{
        visibility: visible;
        position: relative;
        height:80px;
        width: 80px;
        padding:2px ;
    }
    h3{
        margin-left: 5%;
    }
    .colorRed{
        background-color: rgb(237, 45, 48) ;
    }
    .colorYellow{
        background-color: rgb(248, 164, 53);
    }
    .colorBlue{
        background-color: rgb(3, 129, 199);
    }
    .colorGren{
        background-color: rgb(8, 142, 81);
    }
    img{
        visibility: hidden;
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 10px;
    }
}
div:hover{
    background-color: black;
    color: white;
    transition: 1s;
    img{
        visibility: visible;
        z-index: 1;
    }
    /* .icon{
        visibility: visible;
        position: relative;
        width: 70px;
        height: 70px;
        padding: 5px;
        margin-left: 15px ;
    } */
}
@media (min-width: 700px) {
    font-size:150%;
    width: 60%;
    div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100px;
    text-transform: uppercase;
    position: relative;
    color: #1a1b1d;
    border-bottom: .5px solid #afafaf;
    .uno{
        visibility: visible;
        position: relative;
        height: 100px;
        width: 100px;
    }
    h3{
        margin-left: 5%;
    }
    .colorRed{
        background-color: rgb(237, 45, 48) ;
    }
    .colorYellow{
        background-color: rgb(248, 164, 53);
    }
    .colorBlue{
        background-color: rgb(3, 129, 199);
    }
    .colorGren{
        background-color: rgb(8, 142, 81);
    }
    img{
        visibility: hidden;
        position: absolute;
        width: 200px;
        height: 200px;
        right: 0px;
        border-radius: 10px;
    }
}
}
`






