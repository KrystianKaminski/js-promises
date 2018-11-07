
fetch('https://randomuser.me/api')
    .then(response => response.json())

// We call .json() on resolved response object
// Because we want to parse stream of bytes (body)
// into JS object (in most cases object)

    .then(data => console.log(data.results[0].name.first))

