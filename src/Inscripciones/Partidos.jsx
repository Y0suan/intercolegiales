import React from 'react'
import styled from 'styled-components'

const Partidos = () => {
  return (
    <Cont>
        <div className="form">
            <form className='cont' action="">
                <div className="ecuelas">
                    <Label1 htmlFor="">Escuelas</Label1>
                    <div>
                    <Input1 type="text" placeholder='EquipoA' />
                    <Input1 type="text" placeholder='EquipoB' />
                    </div>
                </div>
                <div className='deporte'>
                <Label1>Depote</Label1>
                <select className='select' name="" id="">
                    <option value="">Futsal</option>
                    <option value="">Futbol</option>
                    <option value="">Voley</option>
                    <option value="">Basquet</option>
                    <option value="">Rugby</option>
                    <option value="">Cestobal</option>
                    <option value="">Atletismo</option>
                </select>
                </div>
                <div className="genero">
                    <Label1>Genero: </Label1>
                    <div>
                    <InputCheck type="radio" name="genero" id="genero" />
                    <label  htmlFor="">F</label>
                    <InputCheck   type="radio" name="genero" id="genero" />
                    <label htmlFor="">M</label>
                    </div>    
                </div>
                <div className="categoria">
                    <label htmlFor="">Categoria:</label>
                    <div>
                    <div>
                    <Input1 type="radio" name="categoria" id="genero" />
                    <label htmlFor="">A</label>
                    </div>
                    <div>
                    <Input1 type="radio" name="categoria" id="genero" />
                    <label htmlFor="">B</label>
                    </div>
                    <div>
                    <Input1 type="radio" name="categoria" id="genero" />
                    <label htmlFor="">C</label>
                    </div>
                    </div>
                </div>
                <div className='lugar'>
                <Label1 htmlFor="">Lugar:</Label1>
                <Input1 type="text" />
                </div>
                <div className='Fecha'>
                    <Label1>Fecha y Horario:</Label1>
                    <Input1 type="date" name="" id="" />
                </div>
            </form>
        </div>
    </Cont>
  )
}

export default Partidos

const Cont = styled.div`
width: 100%;
height: 100vh;
display:flex;
justify-content: center;
align-items: center;
.form{
    width: 320px;
    height: 500px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.404);
    padding: 20px;

}
form{
    width: 100%;
    height: 90%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.ecuelas{
    div{
        display: flex;
        justify-content: space-between;
    }
}
.deporte{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .select{
    height: 30px;
    width: 47%;
    display: flex;
    border-radius: 3px;
}
}
.genero{
    display: flex;
    width: 100%;
    div{
        margin-left: 30px;
        display: flex;
    }
    label{
        margin-right: 20px;
    }
}
.categoria{
    width: 100%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            width: 20px;
            height: 20px;
            margin-left: 10px;
        }
    }
}
.lugar{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.Fecha{
    display: flex;
    flex-direction: column;
    width: 100%;
}
`
const Input1 = styled.input`
height: 30px;
width: 47%;
border-radius: 3px;
border: 1px solid grey;
`
const Label1 = styled.label`
font-size: 15px;
margin-bottom: 2px;
`

const InputCheck = styled.input`
height: 20px;
width: 20px;
`