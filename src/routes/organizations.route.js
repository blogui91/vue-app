function load(component) {
    return () => System.import(`views/${component}.vue`)
}

export let organization_routes = [
    {
        path: '/organizations',
        name: 'app.organizations',
        component: load('Organizations/Organizations')
    }
]