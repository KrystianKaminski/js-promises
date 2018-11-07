class UserList {
    constructor(container) {
        this.users = []
        this.container = container
    }
    render() {
        this.container.innerHTML = ''

        const list = document.createElement('ul')

        this.users.forEach( user => {
            const li = document.createElement('li')
            li.innerText = `${name.first} ${name.last}`
        })

        this.container.appendChild(ul)
    }
}