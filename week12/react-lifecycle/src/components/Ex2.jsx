import React, { useEffect, useState } from "react";
import usersApi from "../apis/users.api";
import { Posts } from "./Posts";

export const Ex2 = () => {
  const [posts, setPosts] = useState([]);

  //eff get users
  useEffect(() => {
    (async () => {
      const apiPosts = await usersApi.getPosts();

      setPosts(apiPosts.splice(0, 10));
    })();
  }, []);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};
