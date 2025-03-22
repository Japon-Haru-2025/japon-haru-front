'use client';

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import LogoProvence from '../public/Logo_Ecole_de_Provence.png';
import '../styles/homepage.css';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countdown'>
        {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className='countdownItem'>
                <span>{timeLeft[interval]}</span>
                <small>{interval.toUpperCase()}</small>
            </div>
        ))}
    </div>
  );
};


const HomePage = () => {
  return (
    <section className="homepage">

        <div className='content'>

            <Image src={LogoProvence} alt="Logo" width={100} height={100} className='logoprovence' />

            <h1>Japon Haru 2025</h1>
            <p>Séjour des élèves de Terminale du Lycée Provence</p>

            <Countdown targetDate="2025-04-01T05:00:00" />

        </div>

    </section>
  );
};


export default HomePage;
