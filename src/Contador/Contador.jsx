import React from 'react'
import { useEffect, useState ,useRef } from 'react'
import styled from 'styled-components'


const Contador = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("September 11,2023 ").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          // Stop Timer
  
          clearInterval(interval.current);
        } else {
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });



  return (
    <Timer>
    <h2>el evento comienza en </h2>
    <div>
    <p>{timerDays}:</p>
    <p>{timerHours}:</p>
    <p>{timerMinutes}:</p>
    <p>{timerSeconds}</p>
    </div>
    </Timer>
  )
}

export default Contador


const Timer = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #3f3f3f;
color: white;
padding: 5px;
background-color: #0078d0;
h2{
    font-size: 15px;
    font-weight: 300;
    margin-right: 10px;
}
div{
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 300;
}
`