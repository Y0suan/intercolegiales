import React from 'react'
import styled from 'styled-components'


const Cestoball = () => {
  return (
    <Cont>
        <Deporte>
            <Title>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fvoleybol.svg?alt=media&token=5a23ccef-ada1-4a05-ba32-b10dd92e1166" alt="" />
                    <h2>Cestoball</h2>
                </div>
            </Title>
            <Reglamento>
                    <h2>Reglamento</h2>
                    <div>
                        <h3>CESTO BALL:</h3>
                        <p>Las categorías “A” jugará dos (2) tiempos de 10’ y 10’ con cinco minutos de descanso. Y las Categorías “B” y “C” dos (2) tiempos de 15 y 15
                           El presente torneo regirá según las Reglas Oficiales del Juego.  Cuyas Lista de Buena Fe incluirá a 12 Jugadoras.- 
                        </p>
                    </div>
            </Reglamento>
        </Deporte>
    </Cont>
  )
}

export default Cestoball


const Cont = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Deporte = styled.div`
width: 90%;
height: 90%;
@media (min-width: 1440px) {
    width: 60%;
}
`

const Title = styled.h2`
width: 100%;
height:40%;
display: flex;
align-items: center;
border-bottom: 1px solid gray;
div{
    width: 60%;
    display: flex;
    align-items: center;
    img{
        padding: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #b9b9b9;
    }
    h2{
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-left: 4%;
    }
}
@media (min-width: 768px) {
    div{
    width: 100%;
    justify-content: center;
    img{
        width: 150px;
        height: 150px;
    }
    h2{
        font-size: 4rem;
    }
    }
}
@media (min-width: 1440px) {
    div{
    width: 100%;
    justify-content: start;
    img{
        width: 170px;
        height: 170px;
    }
    h2{
        font-size: 5rem;
    }
    }
}
`
const Reglamento = styled.div`
width: 100%;
height: 90%;
h2{
    font-size: 3rem;
}
div{
    margin-top: 15px;
}

`