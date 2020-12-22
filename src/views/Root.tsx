import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import routerMap from '../router'
import {router} from '../router/index'
import MenuComponent from "../components/menu/MenuComponent";
import PageHeader from '../components/header/Header'

const ViewsRoot = (props): JSX.Element => (

    // 这里必须使用 Suspense 组件将 Router 组件包裹起来，因为使用了 lazy 方式导入的组件必须这么干
      <Router>
        <header>
          <PageHeader />
        </header>
        <aside>
          <MenuComponent changeMenuItem={(menuItem) => {
            console.log(menuItem)
            router.push(menuItem.key)
          }}/>
        </aside>
        <section style={{
          border: '1px solid green',
          width: 'calc(100% - 256px)',
          height: 'calc(100vh - 84px)',
          position: 'absolute',
          right: 0,
          top: '84px'
        }}>
          <Router>
            {routerMap.map((route) => {
              return (
                  <Route
                      exact
                      key={route.path}
                      path={route.path}
                      component={route.component}
                  />
              )
            })}
          </Router>
        </section>
      </Router>
)

export default ViewsRoot
