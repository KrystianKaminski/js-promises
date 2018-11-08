class App {
    constructor() {
        this.listView = new ListView()
        this.userView = new UserView()
        this.notFoundView = new NotFoundView()
    }
    renderView(viewName) {
        switch(viewName) {
            case 'listView':
                // this.render(this.listView.render())
                this.listView.render()
                    .then(viewContent => this.render(viewContent))
                break
            case 'userView':
                this.render(this.userView.render())
                break
            case 'notFoundView':
                this.render(this.notFoundView.render())
                break
        }
    }
    render(viewContent) {
        document.body.innerHTML = ''

        document.body.appendChild(viewContent)
    }
}

class ListView {
    render() {
        const promise = fetch('./data/users.json')
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div')
                div.innerText = 'ListView'
                
                data.forEach(user => {
                    const div2 = document.createElement('div')
                    div2.innerText = `User ID ${user.uid}: Name: ${user.name} Lastname: ${user.lastname}`
                    div.appendChild(div2)
                })
                return div
            })
            return promise
    }
}

class UserView {
    render() {
        const div = document.createElement('div')
        div.innerText = 'UserView'
        return div
    }
}

class NotFoundView {
    render() {
        const div = document.createElement('div')
        div.innerText = 'NotFoundView'
        return div
    }
}

const app = new App()
app.renderView('listView')