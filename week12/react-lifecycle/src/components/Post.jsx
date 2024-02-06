import React from "react";

export const Post = ({ post, isWinSmall }) => {
  return (
    <div className="post" style={isWinSmall ? { width: "100%" } : {}}>
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.body}</div>
    </div>
  );
};
