import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import CopyLinkButton from "./CopyLinkButton"; // Import du Client Component pour partager l'article

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const projectId = client.config().projectId;
const dataset = client.config().dataset;

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

// Fonction pour récupérer les données du post
async function getData(slug: string) {
  return await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getData(params.slug);

  if (!post) {
    return <p>Article non trouvé</p>;
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <section className="article articleAccueil">
      <div className="container">
        <div className="retourarticle">
          <Link href="/articlesblog">
            <p>
              <i className="fa-solid fa-arrow-left"></i> Retour aux articles
            </p>
          </Link>
        </div>

        <div className="articletitre mb-4">
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              width={1600}
              height={400}
              priority
            />
          )}
        </div>

        <div className="articledatelocalisation">
          <p>
            <i className="fa-regular fa-calendar"></i>{" "}
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {post.location && (
            <p>
              <i className="fa-solid fa-location-dot"></i> {post.location}
            </p>
          )}
        </div>

        <h1 className="title">{post.title}</h1>

        <div className="text">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="articletags">
            <div className="articletag">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  <i className="fa-solid fa-tag"></i> {tag}
                </span>
              ))}
            </div>

            {/* Client Component pour le partage de lien */}
            <CopyLinkButton slug={params.slug} />
            
          </div>
        )}
      </div>
    </section>
  );
}
