const apiUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export default apiUser;