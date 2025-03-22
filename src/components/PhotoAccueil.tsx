'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { photos } from '../data/database';

import '../styles/photo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PhotoAccueil = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (index) => {
        setSelectedImage(index);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handlePrev = () => {
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
    };

    const handleNext = () => {
        setSelectedImage((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
    };

    // Filtrer pour ne garder que les 4 dernières photos
    const lastFourPhotos = photos.slice(-4);

    return (
        <section className="photoAccueil">

            <div className="container">
                <h2 className="text-center fw-bold mb-4">Nos Photos</h2>

                <div className="row">
                    {lastFourPhotos.map((photo, index) => (
                        <div key={photo.id} className="col-md-6 col-lg-3 mb-4">
                            <div className="card" onClick={() => handleClick(index)}>
                                <Image 
                                    src={photo.url}
                                    alt={photo.title} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="card-img"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        
            {selectedImage !== null && (
                <div className="lightbox" onClick={handleClose}>
                    <div className="prev-thumbnail" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                        <Image 
                            src={photos[(selectedImage - 1 + photos.length) % photos.length].url} 
                            alt="Precedente" 
                            width={100} 
                            height={60} 
                        />
                    </div>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <Image 
                            src={photos[selectedImage].url} 
                            alt={photos[selectedImage].title} 
                            width={800} 
                            height={500} 
                        />
                        <div className="description">
                            <p className='titre'>{photos[selectedImage].title}</p>
                            <p className='description'>{photos[selectedImage].description}</p>
                            <p className='dateLocalisation'>{photos[selectedImage].date}</p>
                        </div>
                    </div>
                    <div className="next-thumbnail" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                        <Image 
                            src={photos[(selectedImage + 1) % photos.length].url} 
                            alt="Suivante" 
                            width={100} 
                            height={60} 
                        />
                    </div>
                </div>
            )}

            <div className="container">
                <Link className="lienPhotos" href="/galeriepage">
                    <p>Voir tous nos photos</p>
                </Link>
            </div>

        </section>
    );
};

export default PhotoAccueil;
