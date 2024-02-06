import config from "../config";

const getPosts = () => {
  return new Promise((resolve, reject) => {
    resolve(config.mokeUsers);
  });
};

const usersApi = { getPosts };

export default usersApi;
