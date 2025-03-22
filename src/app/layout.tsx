// app/layout.tsx

import '../styles/article.css'; // Importation du fichier CSS pour les articles
import '../styles/footer.css'; // Importation du fichier CSS pour le Footer
import '../styles/navbar.css'; // Importation du fichier CSS pour le Navbar
import '../styles/photo.css'; // Importation du fichier CSS pour les photos
import '../styles/styles.css'; // Importation du fichier CSS pour les styles
import '../styles/homepage.css'; // Importation du fichier CSS pour la page d'accueil
import '../styles/typespage.css'; // Importation du fichier CSS pour les types
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du framework Bootstrap

import React from "react";
import Navbar from "../components/Navbar"; // Importation du composant Navbar
import Footer from "../components/Footer"; // Importation du composant Footer

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>*/}
      </head>
      <body>
        <Navbar />  {/* Affichage du Navbar global */}
        <main>{children}</main> {/* Affichage du contenu spécifique à chaque page */}
        <Footer />  {/* Affichage du Footer global */}
      </body>
    </html>
  );
}
