import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavAdmin = () => {
  return (
    <Cont>
           <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fwqefra-removebg-preview-removebg-preview.png?alt=media&token=5b77af9c-1796-402e-a8d4-13b7619793ab" alt="" />
           <div className="links">
           {/* <Link className='link' to={'/Resultados'}>Resultados</Link>
           <Link className='link' to={'/Inscripcion'}>Inscripciones</Link>
           <Link className='link' to={'/Reglamento'}>Reglamento</Link>
           <Link className='link' to={'/Calendario'}>Calendario</Link>
           <Link className='link' to={'/FictureHome'}>Fixture</Link> */}
           </div>
           <div></div>
    </Cont>
  )
}

export default NavAdmin

const Cont = styled.div`
padding: 10px;
width: 100%;
height: 7vh;
display: flex;
align-items: center;
justify-content: space-between;
.logo{
    height: 100%;
}
.links{
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    .link{
      font-size: 17px;
      font-weight: 300;
      text-decoration: none;
      color: black;
    }
}
@media (max-width: 425px) {
padding: 5px;
justify-content: center;
.links{
  display: none;
}
}
`