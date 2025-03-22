// app/post.tsx
import React from "react";
import ArticleDetails from '../../components/article/[id]'; // Importer le composant ArticleDetails

const Post = () => {
  return (
    <div>
      <ArticleDetails />
    </div>
  );
};

export default Post;
