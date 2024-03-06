import React from 'react'
import SidebarClient from './SidebarClient'
import SidebarTalent from './SidebarTalent'

function Sidebar() {
  return (
    <div>
      { true ?  <SidebarClient /> : <SidebarTalent />}
    </div>
  )
}

export default Sidebar