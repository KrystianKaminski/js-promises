// Creation of promise in sync
const promise = fetch('https://randomuser.me/api')

// Then is for registering functions that will be called with promise will be resolved
promise 
    .then(() => {
        console.log('Im on the function that will be called when promise is resolved!')
})

// then is sync and returns NEW promise
// function that is passed as arg into then will be called async when promise will be resolved
const promise2 = promise.then(() => {
    
});