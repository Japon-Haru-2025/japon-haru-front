'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Search, Filter, X } from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/photo.css';

import { photos } from "../data/database";



const Galerie = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTag = searchParams.get("tag") || "";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [filteredImages, setFilteredImages] = useState(photos);
  const [showFilters, setShowFilters] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  // Pour afficher une image en grand
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Initialisation des tags et locations
    if (typeof window !== 'undefined') {
      const fetchedPhotos = photos;
      setFilteredImages(fetchedPhotos);
      setAllTags(Array.from(new Set(fetchedPhotos.flatMap((image) => image.tags))).sort());
      setAllLocations(Array.from(new Set(fetchedPhotos.map((image) => image.location))).sort());
    }
  }, []);

  useEffect(() => {
    let filtered = [...photos];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((image) => {
        const titleMatches = image.title && image.title.toLowerCase().includes(query);
        const descriptionMatches = image.description && image.description.toLowerCase().includes(query);
        const locationMatches = image.location && image.location.toLowerCase().includes(query);
        const photographerMatches = image.photographer && image.photographer.toLowerCase().includes(query);
        const tagsMatches = image.tags && image.tags.some((tag) => tag.toLowerCase().includes(query));

        return titleMatches || descriptionMatches || locationMatches || photographerMatches || tagsMatches;
      });
    }

    if (selectedTag) {
      filtered = filtered.filter((image) =>
        image.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter((image) => image.location === selectedLocation);
    }

    setFilteredImages(filtered);

    // Mise à jour des paramètres d'URL
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedTag) params.set("tag", selectedTag);
    router.push(`/galeriepage?${params.toString()}`);
  }, [searchQuery, selectedTag, selectedLocation, router]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
    setSelectedLocation("");
    router.push("/galeriepage");
  };

  // Fonction pour fermer la fenêtre modale
  const handleClose = () => {
    setSelectedImage(null);
  };

  // Fonction pour afficher l'image précédente
  const handlePrev = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  // Fonction pour afficher l'image suivante
  const handleNext = () => {
    setSelectedImage((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };


  return (
    <section className="photoAccueil galeriePhotos">

      <div className="container">

        {/* Titre section */}
        <div className="galerietitre mb-4">
          <Image
            src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f"
            alt="Japan Photo Gallery"
            width={1600}
            height={400}
            priority
          />
          <div className="titre">
            <h2>Nos photos</h2>
            <p>Découvrez nos photos prises chaque jour durant ce voyage</p>

            {/* Barre de recherche */}
            <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Recherche une photo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>

        {/* Filtres Section */}
        <div className="galeriefiltres">
          <div className="titre">
            <h2 className="titrefiltre">Galerie photos</h2>
            <div>
              <button
                className="btn me-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="me-1" /> Filtres
              </button>
              {(searchQuery || selectedTag) && (
                <button className="btn btn-clear" onClick={clearFilters}>
                  <X className="me-1" /> Supprimer Filtre
                </button>
              )}
            </div>
          </div>

          {showFilters && (
            <div className="filtretag">
              <div className="row">
                {/* Filtrer par tags */}
                <div className="col-md-12">
                  <h6>Filtrer selon les tag</h6>
                  <div className="d-flex flex-wrap">
                    <button
                      className={`btn btn-filtre btn-sm m-1 ${selectedTag === "" ? "btn-select" : ""}`}
                      onClick={() => setSelectedTag("")}
                    >
                      Tout
                    </button>
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        className={`btn btn-filtre btn-sm m-1 ${selectedTag === tag ? "btn-select" : ""}`}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Display filtered images */}
        <div className="row">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div key={image.id} className="col-md-6 col-lg-3 mb-4">
                <div className="card" onClick={() => setSelectedImage(index)}>
                  <Image
                    src={image.url}
                    alt={image.title}
                    className="card-img-top"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>Aucune image</p>
            </div>
          )}
        </div>

        {/* Lightbox for large image view */}
        {selectedImage !== null && (
          <div className="lightbox" onClick={handleClose}>
            <div className="prev-thumbnail" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
              <Image
                src={filteredImages[(selectedImage - 1 + filteredImages.length) % filteredImages.length].url}
                alt="Precedente"
                width={100}
                height={60}
              />
            </div>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                width={800}
                height={500}
              />
              <div className="description">
                <p className="titre">{filteredImages[selectedImage].title}</p>
                <p className="description">{filteredImages[selectedImage].description}</p>
                <p className="dateLocalisation">{filteredImages[selectedImage].date}</p>
              </div>
            </div>
            <div className="next-thumbnail" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
              <Image
                src={filteredImages[(selectedImage + 1) % filteredImages.length].url}
                alt="Suivante"
                width={100}
                height={60}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galerie;
