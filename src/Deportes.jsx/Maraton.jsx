import React from 'react'
import styled from 'styled-components'


const Maraton = () => {
  return (
    <Cont>
        <Deporte>
            <Title>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt="" />
                    <h2>Maraton</h2>
                </div>
            </Title>
            <Reglamento>
                    <h2>Reglamento</h2>
                    <h3>Para niñas y varones por Colegios participantes: </h3>
                    <div>
                        <h3>30  Niñas</h3>
                        <p>10 de la Categoría Juveniles	“C”</p>
                        <p>10 de la Categoría Juveniles	“B”</p>
                        <p>10 de la Categoría Juveniles	“A”</p>
                    </div>
                    <div>
                        <h3>30  Varones</h3>
                        <p>10 de la Categoría Juveniles	“C”</p>
                        <p>10 de la Categoría Juveniles	“B”</p>
                        <p>10 de la Categoría Juveniles	“A”</p>
                    </div>
                    <div>
                        <p>* En cada categoría, se podrán incluir dos (2) Suplentes.-</p>
                    </div>
                    <div>
                        <h3>LLEGADA: Según el recorrido</h3>
                        <p>NIÑAS: Cruzarán por boquilla ROJA.-</p>
                        <p>VARONES: Cruzarán por la boquilla AZUL.-</p>
                    </div>
                    <div>
                        <p>Para el ordenamiento Clasificatorio (una vez ingresado a las boquillas de acceso) lo harán caminando y es imprescindible hacer entrega del número que lo identifique como corredor/a.-</p>
                        <p>NUMERACION:  A  los  efectos organizativos,  el  Departamento  de Educación   Física Municipal  proveerá a las Instituciones participantes, los números correspondientes (para Niñas color rojo y para los Varones color azul)  </p>
                    </div>
                    <div>
                        <h3>GANARÁ</h3>
                        <p>La  Institución que llegue con sus atletas en el  mejor orden clasificatorio. 
                           De esta manera todos los puestos revisten importancia. El objetivo es llegar, la clasificación se dará por Niñas y Varones respectivamente. ganará quien sume más puntos basándose en el  puesto que le cupo en la llegada.-
                        </p>
                    </div>
                    <div>
                        <h3>SUPLENTES</h3>
                        <p>Se  incorporarán  en  caso  de  AUSENCIA  del Titular en la Maratón; Por las  siguientes causas:</p>
                        <p>A-Ante alguna Lesión del titular.- </p>
                        <p>B-Por ausencia del titular.- </p>
                    </div>
                    <div>
                        <h3>COLORES</h3>
                        <p>A  los  efectos de un mejor  desenvolvimiento y control, en  la grilla  de LLEGADA habrá dos vías de accesos a las cuales  se accederá  caminando respetando su orden de llegada, al momento de ingresar a la boquilla.  Al final de la mencionada "boquilla" se deberá entregar al  Docente  responsable, el número que le  correspondió  en  la competencia.</p>
                    </div>
                    <div>
                        <h3>DESCALIFICACIÓN: </h3>
                        <p>  Cuando un Atleta sea mal incluido en la maratón y/o que no haya realizado el recorrido total de su categoría, la Institución escolar a la que representa, será descalificada del evento.- 
                            Cualquier situación no prevista el este  Reglamento será  resuelta por el CONSEJO DISCIPLINARIO.-
                        </p>
                    </div>
            </Reglamento>
        </Deporte>
    </Cont>
  )
}

export default Maraton


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