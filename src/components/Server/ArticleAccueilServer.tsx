import { client } from '@/sanity/client';
import ArticleAccueil from '../ArticleAccueil'; // Import du Client Component

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)] | order(publishedAt desc) [0...12] { _id, title, slug, publishedAt, image }`;

export default async function ArticleAccueilServer() {
    const posts = await client.fetch(POSTS_QUERY); // Récupération des articles sur le serveur

    return <ArticleAccueil posts={posts} />;
}
