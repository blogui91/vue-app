import { RouteServiceProvider } from 'app/providers/RouteServiceProvider'
import { user_routes } from 'routes/users.route'
import { organization_routes } from 'routes/organizations.route'
import { default_routes } from 'routes/default.route'
// import { module_route } from 'routes/module.route'

const RouteProvider = new RouteServiceProvider();

RouteProvider
    .register(default_routes)
    .register(user_routes)
    .register(organization_routes)
    .register([])//Register a new bounch of routes .

export const routes = RouteProvider.routes
