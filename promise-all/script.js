const displayAllUsersEmail = () => {
    fetch('./data/users.json')
        .then(response =>response.json())
        .then(users => {
            users.forEach(user => {
                fetch(`./data/users/${user.uid}.json`)
                .then(response =>response.json())
                .then(console.log)
            })
        })
}

displayAllUsersEmail()