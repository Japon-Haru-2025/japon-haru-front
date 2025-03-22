'use client';

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Empêcher le scroll quand le menu est ouvert
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <section className="menu">
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand title" href="/">
            <p>Japon Haru 2025</p>
          </Link>

          {/* Bouton hamburger */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/apropos" onClick={() => setIsOpen(false)}>A propos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/galeriepage" onClick={() => setIsOpen(false)}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/articlesblog" onClick={() => setIsOpen(false)}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/loginuser" onClick={() => setIsOpen(false)}>Utilisateur</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
