import React from 'react'
import ClientDashboard from './ClientDashboard'
import TalentDashboard from './TalentDashboard'

function Dashboard() {
  return (
    <div>
      {false ? <ClientDashboard /> : <TalentDashboard />}
    </div>
  )
}

export default Dashboard