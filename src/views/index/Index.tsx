import React, {useState} from 'react'
import styles from "./index.less"
import {router} from "../../router/index"

function Index() {

  const [list,setList] = useState<Array<number>>([])
  const goTwo = () => {
    router.push('/antv')
  }

  const asyncGetJs = () => {
    // 异步加载
      import('./asyncJs').then(res=>{
        console.log('res async Js',res)
      })

    const copyList = [...list]
    copyList.push(1)
    setList(copyList)
    console.log(copyList);
  }

  return (
      <div className={styles.app}>
        <div onClick={goTwo}>入口跳转</div>
        <div className={styles.popover} onClick={asyncGetJs}>异步加载</div>

        <div>{list.length}</div>
        {list.length > 0 && list.map((item,index)=>{
          return <div key={index} className={styles.index}>{index}</div>
        })}
      </div>
  )
}

export default Index
