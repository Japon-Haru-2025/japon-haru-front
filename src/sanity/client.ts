import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

// Configuration de votre client Sanity
export const client = createClient({
  projectId: "f3re1cp2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Ajout du token ici
});

// Créez l'outil builder pour gérer les images
const builder = imageUrlBuilder(client);

// Fonction pour générer l'URL de l'image
export function urlFor(source) {
  return builder.image(source);
}