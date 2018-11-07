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
    removeItem() {
        this.users.splice()
    }
    render() {
        this.container.innerHTML = ''

        const list = document.createElement('ul')

        this.users.forEach( user => {
            const li = document.createElement('li')
            const button = document.createElement('button')
            button.innerText = 'Usuń'
            li.innerText = `${user.name.first} ${user.name.last}`
            list.appendChild(li)
            list.appendChild(button)
            li.addEventListener('click', () => {
                alert(`${user.email}`)
            })
            button.addEventListener('click', () => {
                this.users.splice(this.user,1)
                this.render()
            })
        })

        this.container.appendChild(list)
    }
}

const list = new UserList(document.body, 21)