import { client } from "@/sanity/client";
import Blog from "../Blog"; // Import du Client Component

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, image, tags, location}`;

export default async function BlogServer() {
    const posts = await client.fetch(POSTS_QUERY); // Fetch côté serveur
    return <Blog posts={posts} />;
}
