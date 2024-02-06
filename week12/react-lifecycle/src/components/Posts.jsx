import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const Posts = ({ posts }) => {
  const [isWinSmall, setIsWinSmall] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWinSmall(window.innerWidth <= 700);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="posts-list">
      {posts?.map((post) => (
        <Post key={post.id} post={post} isWinSmall={isWinSmall} />
      ))}
    </div>
  );
};
