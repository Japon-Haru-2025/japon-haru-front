// app/page.tsx
import React from "react";
import HomePage from "../components/HomePage"; // Importer le composant HomePage
import TypesPage from "../components/TypesPage"; // Importer le composant TypesPage
import ArticleAccueilServer from "@/components/Server/ArticleAccueilServer";
import PhotoAccueil from "../components/PhotoAccueil"; // Importer PhotoAccueil

export default function Home() {
  return (
    <div>
      <HomePage />  
      <TypesPage /> 
      <ArticleAccueilServer /> 
      <PhotoAccueil />
    </div>
  );
}
