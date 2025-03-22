'use client';

import Image from 'next/image';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/typespage.css';

import ImgEtudiants from '../public/typeEtudiants.jpg';
import ImgPhotos from '../public/typePhotos.jpg';
import ImgArticles from '../public/typeArticles.jpg';



const TypesPage = () => {
    const items = [
        { image: ImgPhotos, title: 'Nos photos', color: '#D4A373', link: '/galeriepage' },
        { image: ImgEtudiants, title: 'Étudiants', color: '#FADADD', link: '/etudiants' },
        { image: ImgArticles, title: 'Nos articles', color: '#A3C585', link: '/articlesblog' },
      ];
    

    return (
        <section className="typespage">

            <div className="container">

                <div className="row justify-content-center">

                    {items.map((item, index) => (
                        <div key={index} className="col-md-4 d-flex justify-content-center">
                            <div className='cardContainer'>
                                <Image src={item.image} alt={item.title} width={300} height={200} className='image' />
                                <Link href={item.link}>
                                    <div className='overlay' style={{ backgroundColor: item.color }}>
                                        <h5 className='title'>{item.title}</h5>
                                        <p className='text'>Cliquez ici pour découvrir</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
  );
};


export default TypesPage;
