import React, {FC} from 'react'
import styles from "./menu.less"

import {Menu} from 'antd';

import {
  // PieChartOutlined,
  // DesktopOutlined,
  MailOutlined
} from '@ant-design/icons';

const {SubMenu} = Menu;

interface MenuComponentProps {
  changeMenuItem: (value: any) => void,
}

const MenuComponent: FC<MenuComponentProps> = (props) => {

  const {
    changeMenuItem
  } = props

  return (
      <div className={styles.menu}>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            onClick={changeMenuItem}
            style={{
              width: '256px',
              height: '100vh',
              position: 'absolute',
              left:0,
              top:0,
              background: '#041527'
            }}
        >
          {/*<Menu.Item key="/page3" icon={<PieChartOutlined/>} >*/}
          {/*  Option 1*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="/page4" icon={<DesktopOutlined/>}>*/}
          {/*  Option 2*/}
          {/*</Menu.Item>*/}
          <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
            <Menu.Item key="/page1">Option 7</Menu.Item>
            <Menu.Item key="/page2">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
  )
}

export default MenuComponent
