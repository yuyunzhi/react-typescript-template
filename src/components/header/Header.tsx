import React, {FC} from 'react'
import styles from "./header.less"
import { Breadcrumb } from 'antd';

interface HeaderProps {

}

const Header: FC<HeaderProps> = (props) => {
  return (
      <div className={styles['header']}>
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>,
      </div>
  )
}

export default Header
