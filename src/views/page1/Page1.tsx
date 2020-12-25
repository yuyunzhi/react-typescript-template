import React , {useState}from 'react'
import styles from './Page1.less'
import Image2 from 'src/assets/img/2.jpeg'
import _ from 'lodash'
function Page1() {

  const [pic1] = useState('2.jpeg')
  const [pic2] = useState('1.png')
  console.log(_.each);
  return (
      <div className={styles.title}>
        1`23123123
        <img src={require(`src/assets/img/${pic1}`)} alt=""/>
        <img src={require(`src/assets/img/${pic2}`)} alt=""/>
        <img src={Image2} alt=""/>
      </div>
  )
}

export default Page1
