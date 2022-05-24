import React from 'react'

import {
    Header as AppHeader,
    Links,
    Title,
} from '@/components/Header/components'

function Header() {
  return (
    <AppHeader>
      <Title> Calculator App</Title>
      <div className="header-links">
        <Links
          exact
          activeStyle={{ color: 'white', borderBottom: '1px white solid'}}
          to="/">
          Home
        </Links>
        <Links
          exact
          activeStyle={{ color: 'white', borderBottom: '1px white solid'}}
          to="/settigns">
          Settigns
        </Links>
      </div>
    </AppHeader>
  )
}

export default Header