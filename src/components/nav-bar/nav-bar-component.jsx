import { Link, Outlet } from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'
import { Container, Icon, Image, Menu, Sidebar } from 'semantic-ui-react'

import './nav-bar-styles.scss'
import navLogo from '../../assets/tsunami.svg'

function NavBar() {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Menu.Item>
          <Image size='mini' src={navLogo} />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as='a' content='Login' key='login' />
        </Menu.Menu>
      </Menu>
      <Outlet />
    </div>
  )
}

export default NavBar
