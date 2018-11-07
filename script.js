// function that is passed into then() is called when promise will be resolved
// with promise resolution(value)

// in fetch promise is resolving into Response object

fetch('https://randomuser.me/api')
    .then(response => console.log(response))

// when data will be fetched promise is resolved
// and function passed to  then is called with 
// resolved data as an argument