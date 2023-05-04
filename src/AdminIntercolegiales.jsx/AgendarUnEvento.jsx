import React from 'react'
import styled from 'styled-components'
import NavAdmin from './NavAdmin'

//icon
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdOutlineUploadFile } from 'react-icons/md';


const AgendarUnEvento = () => {
 

  return (
    <Cont>
        <NavAdmin></NavAdmin>
        <Agendar>
          <h1>Agrega un evento relacionado</h1>
          <div className="form">
        <InputCont>
         <input placeholder="Nombre del Evento" className="input-field" type="text"/>
         <label for="input-field" className="input-label">Nombre del Evento</label>
         <span className="input-highlight"></span>
        </InputCont>
        <InputCont>
         <input placeholder="Informacion del Evento" className="input-field" type="text"/>
         <label for="input-field" className="input-label">Informacion del Evento</label>
         <span className="input-highlight"></span>
        </InputCont>
        <div>
        <InputCont>
         <input placeholder="Fecha" className="input-field" type="date"/>
         <label for="input-field" className="input-label">Fecha</label>
         <span className="input-highlight"></span>
        </InputCont>
        <InputCont>
         <input placeholder="Hora" className="input-field" type="time"/>
         <label for="input-field" className="input-label">Hora</label>
         <span className="input-highlight"></span>
        </InputCont>
        </div>
        <InputCont>
         <input placeholder="Lugar" className="input-field" type="text"/>
         <label for="input-field" className="input-label">Lugar</label>
         <span className="input-highlight"></span>
        </InputCont>
        </div>
        <InputImg>
        <div className="wapper">
        <form  id='formImg' action="#">
          <input type="file" className='fileIntput' hidden />
          <AiOutlineCloudUpload className='icon'/>
          <p>Sube una Imagen Relacionada</p>
        </form>
        <section className='progressSection'>
          <li className='row'>
            <MdOutlineUploadFile className='icon'/>
            <div className="content">
              <div className="details">
                <span className='name'>image_01.png</span>
                <span className='percent'>50%</span>
              </div>
              <div className="progressBar">
                <div className="progress"></div>
              </div>
            </div>
          </li>
        </section>
        <section className='uploadedSection'>
          <li className="row">
            <div className="content">
            <MdOutlineUploadFile className='icon' />
            <div className="details">
              <span className="name">image_01.png</span>
              <span className="size">70 KB</span>
            </div>
            </div>
          </li>
        </section>
        </div>
        </InputImg>
         <input className='env' type="button" value="enviar" />
        </Agendar>
        
    </Cont>
  )
}

export default AgendarUnEvento

const Cont = styled.div`
width: 100%;
height: auto;
`
const Agendar = styled.div`
margin-bottom: 60px;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.form{
  width: 500px;
  div{
  display: flex;
}
}
.env{
  padding: 10px 60px;
  border: transparent;
  background-color: #007bff ;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
}

`
const InputCont = styled.div`
  position: relative;
  margin: 20px;
  margin-top: 30px;

/* Input field */
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
}

/* Input label */
.input-label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Input highlight */
.input-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #007bff;
  transition: all 0.3s ease;
}

/* Input field:focus styles */
.input-field:focus + .input-label {
  top: -20px;
  font-size: 12px;
  color: #007bff;
}

.input-field:focus + .input-label + .input-highlight {
  width: 100%;
}

`
const InputImg = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
.wapper{
  width: 35%;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 5px ;
  form{
    height: auto;
    padding: 30px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    border: 2px dashed #ccc;
    p{
      color: #007bff;
    }
    .icon{
      color: #007bff;
      font-size: 40px;
    }
  }
  section{
    .row{
      background-color: #e9f0ff;
      margin-bottom: 10px;
      list-style: none;
      padding: 15px 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon{
        font-size: 30px;
        color: #007bff;
      }
    }
  }
  .details{
    span{
      font-size: 14px;
    }
  }
  .progressSection .row .content{
    width: 100%;
    margin-left: 15px;
  }
  .progressSection{
    .details{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .progressBar{
      margin: 5px 0;
      height: 6px;
      width: 100%;
      background-color: #fff;
      margin-bottom: 4px;
      border-radius: 30px;
      .progress{
        height: 100%;
        width: 40%;
        background-color: #007bff;
        border-radius: inherit;
      }
    }
  }
  .uploadedSection{
    .content{
      display: flex;
      align-items: center;
    }
    .details{
      display: flex;
      margin-left:15px;
      flex-direction: column;
      .size{
        font-size: 11px;
        color: #007bff;
      }
    }

  }
}
`

