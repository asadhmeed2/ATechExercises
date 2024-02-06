import React from "react";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.body}</div>
    </div>
  );
};
