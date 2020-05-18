import React from 'react'
import "./header.css"
import { Tabs, Tab } from '@material-ui/core'

const Header = (props) => {
  console.log(props)
  return (
    <Tabs
      value={props.page}
      onChange={(event, newValue) => { props.setPage(newValue) }}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab value="Home" label="Item One" />
      <Tab value="Blog" label="Item Two" />
    </Tabs>
  )
}

export default Header