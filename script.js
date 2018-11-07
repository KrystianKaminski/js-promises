
fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())

// We call .json() on resolved response object
// Because we want to parse stream of bytes (body)
// into JS object (in most cases object)

    .then(data => {
        const arr = []
        for (let i = 0; i < data.results.length; i++) {
            arr.push(data.results[i].name.first)
        }
        console.log(arr)

        for (let a = 0; a < arr.length; a++) {
            const div = document.createElement('div')
            div.innerHTML = arr[a]
            document.body.appendChild(div)
        }
    })

