import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Intro = () => {
  return (
    <Cont>
        <div className='cont'>
            <div className="contXL imagen3 ">
                <h2>Inscripcion</h2>
                <Link className='link' to={'/Inscripcion'}>Inscribete</Link>
                {/* <h2>Resultados</h2>
                <Link className='link' to={'/Resultados'}>Ver</Link> */}
            </div>
            <div className="contX imagen2">
                <h2>Reglamento</h2>
                <Link className='link' to={'/Reglamento'}>Ver</Link>
            </div>
            <div className="contX image1">
            <h2>Agenda de Eventos</h2>
                <Link className='link' to={'/Calendario'}>Ver</Link>
            </div>
            <div className="contXL imagen4">
                <h2>Resultados</h2>
                <Link className='link' to={'/Resultados'}>Ver</Link>
            </div>
            <div className="contXL imagen6">
                <h2>fixture</h2>
                <Link className='link' to={'/FictureHome'}>Ver</Link>
            </div>
            <div className="contX imagen5">
            </div>
        </div>
    </Cont>
  )
}

export default Intro



const Cont = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
margin-bottom: 5%;
margin-top: 5%;
.cont{
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .contXL{
        border-radius: 3px;
        margin: 6px;
        width: 60%;
        height: 300px;
        background-color: aqua;
        background-size: cover;
        padding: 20px;
        position: relative;
        h2{
            font-size: 50px;
            color: white;
            text-transform: uppercase;
        }
        .link{
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding:10px 20px;
            text-decoration: none;
            color: black;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
    .image1{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fbraden-collum-9HI8UJMSdZA-unsplash.jpg?alt=media&token=9a119221-6570-41e5-997d-423cdb6d43e3);
    }  
    .imagen2{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Falex-_AOL4_fDQ3M-unsplash.jpg?alt=media&token=ce7177c3-8abd-4593-a93b-c83743e41308);
    } 
    .imagen3{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fciprian-pardau-j8fVoo3i8xk-unsplash.jpg?alt=media&token=0df18a01-76b1-48bb-990a-148761c34337);
    } 
    .imagen4{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fmartin-sanchez-pX91vVDV6GQ-unsplash.jpg?alt=media&token=d2de1902-78e6-494f-9abc-f0d115724816);
    }
    .imagen5{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fjoshua-burdick-0xpFNUjzdbw-unsplash.jpg?alt=media&token=74f42bf1-4433-4a6f-b032-27a58b8d0531);
    }
    .imagen6{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fchandan-chaurasia-tAcoHIvCtwM-unsplash.jpg?alt=media&token=4775fcab-004a-49ec-bef3-cd12a4d35936);
    }
    .contX{
        border-radius: 3px;
        margin: 6px;
        width: 30%;
        height: 300px;
        background-color: burlywood;
        background-size: cover;
        padding: 20px;
        position: relative;
        h2{
            font-size: 50px;
            color: white;
            text-transform: uppercase;
        }
        a{
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding:10px 20px;
            text-decoration: none;
            color: black;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
}
@media (max-width: 768px) {
    .cont{

    height: 70%;

    .contXL{
        h2{
            font-size: 30px;
        }
    }
    .contX{
        h2{
            font-size: 30px;

        }
    }
}
}
@media (max-width: 425px){
    height: auto;
    .cont{
    width: 90%;
    height: 90%;
    display: flex;
    .contXL{
        border-radius: 3px;
        margin: 6px;
        width: 90%;
        height: 140px;
        background-color: aqua;
        background-size: cover;
        padding: 20px;
        position: relative;
        h2{
            font-size: 50px;
            color: white;
            text-transform: uppercase;
        }
        .link{
            width: 90%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding:10px 20px;
            text-decoration: none;
            color: black;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
    .image1{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fbraden-collum-9HI8UJMSdZA-unsplash.jpg?alt=media&token=9a119221-6570-41e5-997d-423cdb6d43e3);
        height: 200px;
    }  
    .imagen2{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Falex-_AOL4_fDQ3M-unsplash.jpg?alt=media&token=ce7177c3-8abd-4593-a93b-c83743e41308);
    } 
    .imagen3{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fciprian-pardau-j8fVoo3i8xk-unsplash.jpg?alt=media&token=0df18a01-76b1-48bb-990a-148761c34337);
    } 
    .imagen4{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fmartin-sanchez-pX91vVDV6GQ-unsplash.jpg?alt=media&token=d2de1902-78e6-494f-9abc-f0d115724816);
    }
    .contX{
        border-radius: 3px;
        margin: 6px;
        width: 90%;
        height: 140px;
        background-color: burlywood;
        background-size: cover;
        padding: 20px;
        position: relative;
        h2{
            font-size: 50px;
            color: white;
            text-transform: uppercase;
        }
        a{
            width: 90%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding:10px 20px;
            text-decoration: none;
            color: black;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
}
}
@media (max-width: 320px){
    .cont{
    width: 90%;
    height: 90%;
    display: flex;
    .contXL{
        border-radius: 3px;
        margin: 6px;
        width: 90%;
        height: 140px;
        background-color: aqua;
        background-size: cover;
        padding: 20px;
        position: relative;
        h2{
            font-size: 40px;
            color: white;
            text-transform: uppercase;
        }
        .link{
            width: 90%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding:10px 20px;
            text-decoration: none;
            color: black;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
    .image1{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fbraden-collum-9HI8UJMSdZA-unsplash.jpg?alt=media&token=9a119221-6570-41e5-997d-423cdb6d43e3);
        height: 200px;
    }  
    .imagen2{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Falex-_AOL4_fDQ3M-unsplash.jpg?alt=media&token=ce7177c3-8abd-4593-a93b-c83743e41308);
    } 
    .imagen3{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fciprian-pardau-j8fVoo3i8xk-unsplash.jpg?alt=media&token=0df18a01-76b1-48bb-990a-148761c34337);
    } 
    .imagen4{
        background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fmartin-sanchez-pX91vVDV6GQ-unsplash.jpg?alt=media&token=d2de1902-78e6-494f-9abc-f0d115724816);
    }
    .imagen4{
      background-image: url(https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/imagenes%2Fedgar-chaparro-_T-D4Bb-H88-unsplash.jpg?alt=media&token=c04378c2-90b0-491c-908d-9e3dc870fbe5);
    } 
    .contX{
        border-radius: 3px;
        margin: 6px;
        width: 90%;
        height: 140px;
        background-color: burlywood;
        background-size: cover;
        padding: 20px;
        position: relative;
        h2{
            font-size: 40px;
            color: white;
            text-transform: uppercase;
        }
        a{
            width: 90%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding:10px 20px;
            text-decoration: none;
            color: black;
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
}
}
`
