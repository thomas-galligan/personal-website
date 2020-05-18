import React from 'react'
import "./header.css"
import { Tabs, Tab } from '@material-ui/core'

const Header = (props) => {
  return (
    <Tabs
      className="Header"
      value={props.pageSetting.page}
      onChange={(event, newValue) => { props.pageSetting.setPage(newValue) }}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab value="Home" label="Home" />
      <Tab value="Blog" label="Blog" />
      <Tab value="About" label="About" />
    </Tabs>
  )
}

export default Header