const apiCaller = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .catch(error => console.error(error));
};
export default apiCaller;
