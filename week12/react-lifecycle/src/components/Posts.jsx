import React from "react";
import { Post } from "./Post";

export const Posts = ({ posts }) => {
  return (
    <div className="posts-list">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
