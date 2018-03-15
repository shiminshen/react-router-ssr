import Html from './components/Html'
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

export default [
  {
    component: Html,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/page1',
        component: Page1
      },
      {
        path: '/page2',
        component: Page2
      }
    ]
  }
]
