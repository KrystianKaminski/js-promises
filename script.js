
fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())

// We call .json() on resolved response object
// Because we want to parse stream of bytes (body)
// into JS object (in most cases object)

    .then(data => {
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].name.first)
        }
    })

