import React from 'react'
import styles from './Page1.less'
import Image1 from 'src/assets/img/1.png'
import Image2 from 'src/assets/img/2.jpeg'
import _ from 'lodash'
function Page1() {

  console.log(_.each);
  return (
      <div className={styles.title}>
        1`23123123
        <img src={Image1} alt=""/>
        <img src={Image2} alt=""/>
      </div>
  )
}

export default Page1
