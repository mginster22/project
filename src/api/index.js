export const getRandomUsers = (options = {}) => {
  const { page, results = 5 } = options;
  return fetch(
    `https://randomuser.me/api/?page=${page}&results=${results}&seed=foot`
  ).then((response) => response.json());
};
