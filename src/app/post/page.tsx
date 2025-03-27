// app/post.tsx
import React from "react";
import ArticleDetails from '../../components/article/[slug]'; // Importer le composant ArticleDetails
import About from "@/components/About";

const Post = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default Post;
