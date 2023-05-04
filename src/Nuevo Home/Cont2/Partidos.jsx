import React from 'react'
import styled from 'styled-components'


const Partidos = () => {
  return (
    <Cont>
        <div className='head'>
            <h2>Horarios</h2>
            {/* <div className='genero'>
                <button>Femenino</button>
                <button>Masculino</button>
            </div> */}
        </div>
        <ContPartido>
            <h6>F</h6>
            <div className="vs">
                <p>ESCUELA AGROTECNICA</p>
                <p>VS</p>
                <p>BOP N°88</p>
            </div>
            <h6 className="flecha">25/06/2023</h6>
            <h6 className='lugar' > Polideportivo km4</h6>
            <h6 className="hora">15:00 AM</h6>
            <h6 className="categoria">Categoria B</h6>
            <h6 className="deporte">Basquet</h6>
        </ContPartido>

        <ContPartido>
            <h6>F</h6>
            <div className="vs">
                <p>ESCUELA AGROTECNICA</p>
                <p>VS</p>
                <p>BOP N°88</p>
            </div>
            <h6 className="flecha">25/06/2023</h6>
            <h6 className='lugar' > Polideportivo km4</h6>
            <h6 className="hora">15:00 AM</h6>
            <h6 className="categoria">Categoria B</h6>
            <h6 className="deporte">Basquet</h6>
        </ContPartido>        <ContPartido>
            <h6>F</h6>
            <div className="vs">
                <p>ESCUELA AGROTECNICA</p>
                <p>VS</p>
                <p>BOP N°88</p>
            </div>
            <h6 className="flecha">25/06/2023</h6>
            <h6 className='lugar' > Polideportivo km4</h6>
            <h6 className="hora">15:00 AM</h6>
            <h6 className="categoria">Categoria B</h6>
            <h6 className="deporte">Basquet</h6>
        </ContPartido>       
    </Cont>
  )
}

export default Partidos

const Cont = styled.div`
margin-top: 3%;
width: 100%;
height: auto;
.head{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .genero{
        button{
            border: transparent;
            margin-left: 5px;
            font-size: 17px;
            padding: 5px;
            border-radius: 5px;
            :hover{
                background-color: gray;
                color: white;
            }
        } 
    }
}
`
const ContPartido = styled.div`
border-left: 5px solid  rgb(8,142,81);
border-right:5px solid rgb(3, 129, 199) ;
background-color: white;
margin-top: 1%;
width: 100%;
height: 10vh;
padding: 5px;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 2px;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219);
.vs{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    p{
        margin-left: 6px;
        font-weight: 600;
    }
    img{
        width: 50px;
    }
}
h6{
    font-size: 15px;
}
.flecha{
    font-size: 15px;
}
@media (max-width: 1024px){
h6{
    font-size: 10px;
}
.vs{
    p{
        font-size: 10px;
        margin-left: 6px;
        font-weight: 600;
    }
}
}


`