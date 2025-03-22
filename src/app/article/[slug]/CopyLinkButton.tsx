"use client";

import { useState } from "react";

export default function CopyLinkButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/article/${slug}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Réinitialise après 2s
      });
    }
  };

  return (
    <button
        className="articlepartage" 
        onClick={handleCopyLink}
        title="Copier le lien de l'article"
    >
      <i className="fa-regular fa-paper-plane"></i> 
      {copied ? " Lien copié !" : " Partager l'article"}
    </button>
  );
}
