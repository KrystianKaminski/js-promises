class App {
    constructor() {
        this.listView = new ListView()
        this.userView = new UserView()
        this.notFoundView = new NotFoundView()
    }
    renderView(viewName, params) {
        switch(viewName) {
            case 'listView':
                // this.render(this.listView.render())
                this.listView.render(this.renderView.bind(this))
                    .then(viewContent => this.render(viewContent))
                break
            case 'userView':
                this.userView.render(params.uid)
                    .then(viewContent => this.render(viewContent))
                    .catch( () => this.render(this.notFoundView.render()))
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
    render(onClickHandler) {
        const promise = fetch('./data/users.json')
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div')
                div.innerText = 'ListView'
                data.forEach(user => {
                    const div2 = document.createElement('div')
                    div2.innerText = `${user.name} ${user.lastname}`
                    div2.addEventListener(
                        'click',
                        () => onClickHandler('userView', {uid: user.uid})
                    )
                    div.appendChild(div2)
                })
                return div
            })
            return promise
    }
}

class UserView {
    render(uid) {
        const promise = fetch(`./data/users/${uid}.json`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div')
                div.innerText = data.email
                return div
            })
            return promise
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