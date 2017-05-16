export const includeRoutes = [
  {
    name: 'Info',
    path: 'info',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Info').default)
      })
    }
  }, 
  {
    name: 'Dev',
    path: 'dev',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/Dev').default)
      })
    }
  },
    // getChildRoutes(partialNextState, cb) {     require.ensure([], (require) => {
    //        cb(null, {             name: 'Dynamic Dev',             path:
    // ':devId',             getComponent(nextState, cb) {
    // require.ensure([], (require) => {                     cb(null,
    // require('./containers/Dev/DevContent').default )                 })
    //   }         })     }) }
]

export const excludeRoutes = [
  {
    name: 'Login',
    path: 'login',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/Login').default)
      })
    }
  },
  {
    name: 'notfound',
    path: '*',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/404').default )
        })
    }
  }
]