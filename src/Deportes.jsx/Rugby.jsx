import React from 'react'
import styled from 'styled-components'


const Rugby = () => {
  return (
    <Cont>
        <Deporte>
            <Title>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fvoleybol.svg?alt=media&token=5a23ccef-ada1-4a05-ba32-b10dd92e1166" alt="" />
                    <h2>voleibol</h2>
                </div>
            </Title>
            <Reglamento>
                    <h2>Reglamento</h2>
                    <div>
                        <h3>ARTICULO 1</h3>
                        <p>Cada sector Estudiantil estará representado en  este Torneo por un solo Equipo.-</p>
                    </div>
                    <div>
                        <h3>ARTICULO  2</h3>
                        <p>El Torneo estará regido por el presente  Reglamento con  sus recientes modificaciones según las  normas  establecidas por la Comisión Técnica, disputándose los partidos acuerdo con las Reglas  Oficiales  de  Juego de la  Confederación  Argentina  de Voleibol C.A.V..-</p>
                    </div>
                    <div>
                        <h3>ARTICULO  3 </h3>
                        <p>El Torneo se jugará por el sistema de SIMPLE  ELIMI¬NACION.-</p>
                    </div>
                    <div>
                        <h3>ARTICULO  5 </h3>
                        <p>Los partidos se jugarán al mejor de tres set, o sea, Dos (2) SET GANADOS   con el sistema de TIE - BREAK a 25 Tantos.- Las finales tanto de   VARONES como de MUJERES, tendrán el mismo sistema.
El tercer Set es TIE- BREAK A 15 TANTOS, con diferencia de dos puntos.- </p>
                    </div>
                    <div>
                        <h3>ARTICULO  6</h3>
                        <p>Para la presentación de los Equipos en el Campo  de Juego a fin de iniciar el Encuentro habrá una tolerancia de Quince  (15)  minutos  de acuerdo a la  hora fijada solamente en el primer partido de la programación diaria.
Los  resultados de los partidos que  hubiera  disputado anteriormente  así como los que restan  disputarse se  computarán con el tanteador  0-2
</p>
                    </div>
                    <div>
                        <h3>ARTICULO 7</h3>
                        <p>La Red tendrá las siguientes alturas:

Categoría C (Varones)		2,43 Mts.
Categoría A y B (Varones)		2,24 Mts.
Categorías Femeninas (todas)	2,24 Mts.
</p>
                    </div>
                    <div>
                        <h3>ARTICULO 8</h3>
                        <p>
Las sanciones por INCONDUCTAS se  regirán  por  el Reglamento Disciplinario de las Olimpiadas.- 
</p>
                    </div>
            </Reglamento>
        </Deporte>
    </Cont>
  )
}

export default Rugby


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