import React from 'react';
import Link from 'next/link';

import '../styles/footer.css';


const Footer = () => {
  return (
    <section className="footer">

        <div className="container">

            <div className="row g-4">

                <div className='infoSite-center'>
                    <h2>Japon Haru 2025</h2>
                    <p>Suivez le séjour des élèves de Terminale 2025 du Lycée de Provence</p>
                </div>

                {/*
                <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className='infoSite'>
                    <h2>Japon Haru 2025</h2>
                    <p>Suivez le séjour des élèves de Terminale 2025 du Lycée de Provence</p>
                </div>

                <div className="navigationSite">
                    <h3>Navigation</h3>
                    <ul className="lien">
                        <li>
                            <Link href="/" passHref>
                                <p>Accueil</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/apropos" passHref>
                                <p>A propos</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/galeriepage" passHref>
                                <p>Galerie</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/articlesblog" passHref>
                                <p>Blog</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/loginuser" passHref>
                                <p>Utilisateur</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='categoriesArticles'>
                    <h3>Categorie Articles</h3>
                    <ul className="lien">
                        <li>
                            <Link href="/search?q=Tokyo" passHref>
                                <p>Tokyo</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/search?q=Kyoto" passHref>
                                <p>Kyoto</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/search?q=Food" passHref>
                                <p>Food</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/search?q=Nature" passHref>
                                <p>Nature</p>
                            </Link>
                        </li>
                    </ul>
                </div>*/}

            </div>

            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} VITRAT C&F. All rights reserved.</p>
            </div>
        </div>
    </section>
  );
};

export default Footer;
