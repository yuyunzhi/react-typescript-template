import Index from '../views/index'
import Page1 from '../views/page1/Page1'
import Page2 from '../views/page2/Page2'
import Page3 from '../views/page3/Page3'
import Page4 from '../views/page4/Page4'
// 在写 router 的时候，注意一点，就是该 router 的顺序要跟页面中使用 Link 组件的顺序相同
// 不然可能碰到点击页面路由，发现路由没有变化的 bug

const routerMap = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page3',
    component: Page3
  },
  {
    path: '/page4',
    component: Page4
  }
]

export default routerMap

function getUrl(path:any) {
  const href = window.location.href
  const i = href.indexOf('#')
  const base = i >= 0 ? href.slice(0, i) : href
  return `${base}#${path}`
}

export const router = {
  push(url: string) {
    window.location.hash = url
  },
  replace(url: string) {
    window.location.replace(getUrl(url))
  },
  go(n: number) {
    window.history.go(n)
  }
}
