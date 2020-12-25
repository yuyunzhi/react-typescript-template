import React from 'react'
import styles from "./index.less"
import {router} from "../../router/index"

function Index() {

  const goTwo = () => {
    router.push('/antv')
  }

  const asyncGetJs = () => {
      import('./asyncJs').then(res=>{
        console.log('res async Js',res)
      })
  }

  return (
      <div className={styles.app}>
        <div onClick={goTwo}>入口</div>

        <div className={styles.popover} onClick={asyncGetJs}>异步加载</div>
      </div>
  )
}

export default Index
