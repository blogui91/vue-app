function load(component) {
    return () => System.import(`views/${component}.vue`)
}

export let user_routes = [
     {
        path: '/users',
        name: 'app.users',
        component: load('Users/Users')
    }
]