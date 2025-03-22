"use client";

import React from "react";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";
import imgPhoto from '../public/Logo_Ecole_de_Provence.png';
import { urlFor } from '@/sanity/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/article.css";

const Blog = ({ posts }) => {
  // Fonction pour extraire et tronquer le contenu de 'body'
  const extractTextFromBody = (body) => {
    let bodyText = '';

    body?.forEach(block => {
      if (block._type === 'block' && block.children) {
        block.children.forEach(child => {
          if (child._type === 'span') {
            bodyText += child.text;
          }
        });
      }
    });

    return bodyText.slice(0, 150);
  };

  // Fonction pour copier le lien de l'article
  const handleCopyLink = (id) => {
    const url = `${window.location.origin}/article/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Lien copié dans le presse-papier');
    });
  };

  return (
    <section className="articleAccueil articleBlog">
      <div className="container">
        <div className="blogtitre mb-4">
          <Image
            src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f"
            alt="Articles du blog"
            width={1600}
            height={400}
            priority
          />
          <div className="titre">
            <h2>Notre blog</h2>
            <p>Découvrez nos histoires durant notre voyage au Japon</p>
          </div>
        </div>

        {/* Ajout d'un système de tri selon tags
        <div className="blogfiltres">
          <div className="titre">
            <h2 className="titrefiltre">Blog Articles</h2>
          </div>
        </div>
        */}

        <div className="row">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="col-md-6 col-lg-4 mb-4">
                <div className="blog">
                  <Link href={`/article/${post.slug.current}`} passHref>
                    <div className="card">
                      <Image
                        src={post.image ? urlFor(post.image).width(400).height(250).url() : imgPhoto}
                        alt={post.title}
                        style={{ objectFit: 'cover' }}
                        className="card-img"
                        width={400}
                        height={250}
                      />
                    </div>
                    <div className="infoblog">
                    <p className="dateloc">
                      {new Date(post.publishedAt).toLocaleDateString()} • {post.location ? (typeof post.location === "string" ? post.location : "Japon Haru") : "Japon Haru"}
                    </p>

                      <h5 className="titre">{post.title.slice(0, 25)}...</h5>
                      <p className="description">
                        {extractTextFromBody(post.body)}...
                      </p>
                    </div>
                  </Link>

                  <div className="posttags">
                    <div className="tags">
                      {Array.isArray(post.tags) && post.tags.length > 0 ? (
                        post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))
                      ) : (
                        <span className="tag">Aucun tag disponible</span> 
                      )}
                    </div>
                    <button
                      className="btn btn-share"
                      onClick={() => handleCopyLink(post._id)}
                      title="Copier le lien de l'article"
                    >
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>Aucun article trouvé</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
