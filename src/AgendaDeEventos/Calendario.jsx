import React from 'react'
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'
import styled from 'styled-components';
import getAll from '../function/getAll';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid'

const Calendario = () => {
  return (
    <ContCal>
        <FullCalendar 
        height={'90%'}
handleWindowResize={true}
navLinks={true}   

locale={esLocale}
headerToolbar={{
 start:'today prev next',
 center:'title',
 end: 'dayGridMonth,listWeek'
}}
plugins={[ daygridPlugin , timeGridPlugin, listPlugin]}
        initialView={['dayGridMonth']}

      

        ></FullCalendar>
    </ContCal>
  )
}

export default Calendario

const ContCal = styled.div`
width: 40%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
*::-webkit-scrollbar {
    display: none;
}
.fc-toolbar-title{
    font-size: 20px;
    margin: 0px 15px;
}

.fc-list-event-title{
    height: 60px;
    font-size: 20px;
    font-weight: 500;
}
.fc-list-day-side-text{
    font-weight: 500;
    font-size: 15px;
}
.fc-list-day-text{
    display: none;
}
.fc-list-event-dot{
    height: 60px;
    border-radius: 0;
    border-top-left-radius:5px ;
}
.fc-list-event-time{
    display: none;
}
@media (max-width: 768px){
width: 100%;
height: 100vh;
}
`