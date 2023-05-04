import React from 'react'
import styled from 'styled-components'


const Deportes = () => {
  return (
    <ContInfo>
        <div className="deporte uno"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt="" /><h4>basquet</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Ffutbol.svg?alt=media&token=7302dc83-f6db-47ff-8b05-05d754b424d4" alt="" /><h4>futsal</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fvoleybol.svg?alt=media&token=5a23ccef-ada1-4a05-ba32-b10dd92e1166" alt="" /><h4>voley</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt="" /><h4>atletismo</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Frugbi.svg?alt=media&token=601cd6e0-685c-43ee-91bd-f6bad28f1972" alt="" /><h4>rugby</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fath%20(1).svg?alt=media&token=42cad4e4-ff37-4f16-87e8-4a9bb0331ed1" alt=" " /><h4>maraton</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Fbkb.svg?alt=media&token=7d71351d-8dc6-4635-a858-1565c48b47df" alt=" " /><h4>cestobal</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Ffutbol.svg?alt=media&token=7302dc83-f6db-47ff-8b05-05d754b424d4" alt=" " /><h4>futbol</h4></div>
        <div className="deporte"><img src="https://firebasestorage.googleapis.com/v0/b/tzuzul-react.appspot.com/o/iconos%2Faero.svg?alt=media&token=90ed2895-607f-4a12-8900-71c754361634" alt=" " /><h4>aerobic</h4></div>      
    </ContInfo>
  )
}

export default Deportes

const ContInfo = styled.div`
width: 100%;
height: 50%;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
.deporte{
    width: 30%;
    height: 30%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #c9c9c9ed;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.219);
    img{
      width: 80%;
    }
    h4{
      text-transform: uppercase;
    }
    .uno{
      background-color: rgb(237, 45, 48);
    }
    :hover{
       img{
        width: 90%;
       }
    }
}
@media (max-width: 425px){
width: 100%;
height: auto;
}
`
