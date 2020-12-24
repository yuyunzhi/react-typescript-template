import React from 'react'
import "./index.less"
import {router} from "../../router/index"
// import Api from '../../api/index'

function Index() {



  const goTwo = () => {
    router.push('/antv')
  }

  return (
      <div className="App">
        <div onClick={goTwo}>入口</div>
      </div>
  )
}

export default Index
