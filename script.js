class UserList {
    constructor(container, id) {
        this.users = []
        this.container = container
        this.id = id
        this.init()
    }

    init() {
        this.render()
        this.fetchUsers()
    }

    fetchUsers() {
        fetch(`https://randomuser.me/api/?results=${this.id}`)
            .then(response =>
                response.json())
            .then(data => {
                this.users = (data.results);
                this.render()
            })
    }
    render() {
        this.container.innerHTML = ''

        const list = document.createElement('ul')

        this.users.forEach( user => {
            const li = document.createElement('li')
            li.innerText = `${user.name.first} ${user.name.last}`
            list.appendChild(li)
            li.addEventListener('click', () => {
                alert(`${user.email}`)
            })
        })

        this.container.appendChild(list)
    }
}

const list = new UserList(document.body, 21)