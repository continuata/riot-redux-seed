import route from 'riot-route'
import Router, { Route, DefaultRoute, NotFoundRoute } from 'riot-router'

export default {
  init: () => {
    const router = Router.create({ route })
    router.routes([
      new DefaultRoute({tag: 'list'}),
      new Route({tag: 'settings'}),
      new Route({tag: 'login'}).routes([
        new DefaultRoute({tag: 'login-view'}),
        new Route({path: 'register', tag: 'register-view'}),
        new Route({path: 'reset', tag: 'reset-password-view'})
      ]),
      new NotFoundRoute({tag: 'not-found'})
    ])

    // const securityFilter = (request, response, next) => {
    //   try {
    //     return next()
    //   } finally {
    //     if (!window.loggedUser &&
    //       request.uri !== '/login' &&
    //       request.uri !== '/login/register' &&
    //       request.uri !== '/login/reset') {
    //       response.redirectTo = '/login'
    //     }
    //   }
    // }
    // router.use(securityFilter)
    riot.mount('*')
    router.start(true)
  }
}
