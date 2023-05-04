import React from 'react'
import styled from 'styled-components'


const Basquetbol = () => {
  return (
    <Cont>
        <Deporte>
            <Title>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt="" />
                    <h2>Basquetbol</h2>
                </div>
            </Title>
            <Reglamento>
                    <h2>Reglamento</h2>
                    <div>
                        <h3>ARTICULO 1</h3>
                        <p>Las competencias se realizarán de  acuerdo  a  las Reglas  Oficiales de la Confederación Argentina de  Basquetbol  y con  las modificaciones que determine el Comité  Fiscalizador  de las Olimpiadas Estudiantiles.</p>
                    </div>
                    <div>
                        <h3>ARTICULO  2</h3>
                        <p>Los partidos a disputarse será por SIMPLE ELIMINA¬CION pasando  el Ganador a la otra faz Clasificatoria.</p>
                    </div>
                    <div>
                        <h3>ARTICULO  3 </h3>
                        <p>TIEMPOS DE JUEGO</p>
                        <p>Varones B y C 	4 tiempos de diez minutos corridos cada uno.-</p>
                        <p>Varones A   		4 tiempos de Ocho minutos corridos cada uno.-</p>
                        <p>Mujeres A  B y C	4 tiempos de Ocho minutos corridos cada uno.-</p>
                    </div>
                    <div>
                        <h3>ARTICULO  4 </h3>
                        <p>El reloj solamente será detenido por la mesa de control, durante la ejecución de los lanzamientos de tiros libres.
                           Todos los partidos se jugarán con reloj de veinticuatro (“24) segundos, que marcan el límite de tiempo de ataque de cada equipo.  
                           Los dos últimos minutos del 4to período de juego, serán cronometrados.-  
                        </p>
                    </div>
                    <div>
                        <h3>ARTICULO  5</h3>
                        <p>Cada Equipo estará integrado por (12) doce Jugadores y Un Director Técnico, quienes estarán en el Banco únicamente. -</p>
                    </div>
                    <div>
                        <h3>ARTICULO 6</h3>
                        <p>En caso de empate, se disputarán cinco (5) minutos de juego como complemento; de proseguir dicha igualdad, mediando un descanso de dos minutos, se prose¬guirá con otro tiempo complementario hasta establecer un GANADOR.- </p>
                    </div>
            </Reglamento>
        </Deporte>
    </Cont>
  )
}

export default Basquetbol


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