import React from 'react'

import {
  Header as AppHeader,
  Links,
  Title,
} from '../components'

class Header extends React.Component {
  render() {
    return (
      <AppHeader>
        <Title>Calculator app</Title>
        <div className="header-links">
          <Links
            exact
            activeStyle={{ color: 'white', borderBottom: '1px white solid'}}
            to="/home">
            Home
          </Links>
          <Links
            exact
            activeStyle={{ color: 'white', borderBottom: '1px white solid'}}
            to="/csettigns">
            Settigns
          </Links>
        </div>
      </AppHeader>
    )
  }
}

export default Header
