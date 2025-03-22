'use client';

import React from "react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/about.css';


const About = () => {
  return (
    <section className="about">

        <div className="container">

            {/* Titre section */}
            <div className="aboutitre mb-4">
                <Image
                    src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f"
                    alt="Etudiants Provence"
                    width={1600}
                    height={400}
                    priority
                />
                <div className="titre">
                    <h2>A Propos</h2>
                    <p>Les élèves de Terminale 2025 du Lycée de Provence</p>
                </div>
            </div>

            {/* Description */}
            <div className="aboutdescription">
                <p>Upon arriving in Hakone, I was immediately struck by the fresh mountain air and the peaceful atmosphere, a welcome change from the energetic buzz of Tokyo. My first stop was Lake Ashi, a crater lake that formed after a volcanic eruption thousands of years ago. I boarded a sightseeing cruise on a replica pirate ship, which sounds touristy but was actually quite charming. From the deck, I got my first clear view of Mount Fuji rising majestically in the distance, its perfect conical shape exactly as I had always imagined.</p>
                <p>After the cruise, I took the Hakone Ropeway, a cable car that provided aerial views of the volcanic valley below. The sulfuric vents of Owakudani, an active volcanic zone, created an otherworldly landscape of barren rock and steam rising from the earth. Here, I tried the famous black eggs, which are regular eggs boiled in the sulfuric hot springs. Legend has it that eating one adds seven years to your life!</p>
                <p>In the afternoon, I visited the Hakone Open-Air Museum, which features an impressive collection of sculptures set against the backdrop of the surrounding mountains. The combination of art and nature created a harmonious experience that was both stimulating and relaxing.</p>
                <p>As the day drew to a close, I indulged in one of Japan's most beloved traditions: the onsen (hot spring bath). Soaking in the mineral-rich waters while gazing at Mount Fuji in the distance was a moment of pure bliss. The Japanese have perfected the art of relaxation, and I can now understand why onsens are such an integral part of their culture.</p>
            </div>

        </div>
    </section>
  );
};

export default About;
