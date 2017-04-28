function load(component) {
    return () => System.import(`views/${component}.vue`)
}

export let routes = [{
        path: '/',
        name: 'app.dashboard',
        component: load('Dashboard/Dashboard'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/login',
        name: 'app.login',
        component: load('Login/Login'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/users',
        name: 'app.users',
        component: load('Users/Users')
    }, {
        path: '/organizations',
        name: 'app.organizations',
        component: load('Organizations/Organizations')
    }, {
        path: '*',
        component: load('Errors/Error404'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/logout',
        name: 'app.logout',
        component: load('Logout/Logout')
    }]