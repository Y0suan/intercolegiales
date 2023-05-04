import React from 'react'
import styled from 'styled-components'


const PartidosJugados = () => {
  return (
    <ContInfo>
        <h3>Finalizados</h3>
        <div className='cont' >
            <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F15.jpg?alt=media&token=ce8f939a-ef3e-400e-abb5-c2950949a795" alt="" />
            <div className="resultado">
            <h3> 3  VS   4 </h3>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F11.jpg?alt=media&token=712e56c7-1fce-4604-9a12-7183f2709aa5" alt="" />
            </div>
            <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F15.jpg?alt=media&token=ce8f939a-ef3e-400e-abb5-c2950949a795" alt="" />
            <div className="resultado">
            <h3> 3  VS   4 </h3>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F11.jpg?alt=media&token=712e56c7-1fce-4604-9a12-7183f2709aa5" alt="" />
            </div>
            <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F15.jpg?alt=media&token=ce8f939a-ef3e-400e-abb5-c2950949a795" alt="" />
            <div className="resultado">
            <h3> 3  VS   3 </h3>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F11.jpg?alt=media&token=712e56c7-1fce-4604-9a12-7183f2709aa5" alt="" />
            </div>
            <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F15.jpg?alt=media&token=ce8f939a-ef3e-400e-abb5-c2950949a795" alt="" />
            <div className="resultado">
            <h3> 3  VS   4 </h3>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2F11.jpg?alt=media&token=712e56c7-1fce-4604-9a12-7183f2709aa5" alt="" />
            </div>
        </div>
    </ContInfo>
  )
}

export default PartidosJugados

const ContInfo = styled.div`
width: 100%;
height: 60%;
overflow: hidden;
.cont{
    .card{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #c9c9c9ed;
        padding: 5px;
        border-radius: 5px;
        img{
            width: 50px;
        }
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219);
    transition: 5s;
    /* :hover{

        img{
        transition: 1s;
            width: 70px;
        }
        .resultado{
        transition: 1s;

            font-size: 50px;
        }
    } */
    }
}
@media (max-width: 425px){
width: 100%;
height: auto;
}
`