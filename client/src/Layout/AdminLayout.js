import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  const [logIn, setLogIn] = useState(false);

  return (
    <div className="admin__container container">
      <div className="admin__title">
        Admin Panel
      </div>
      <Outlet context={[logIn, setLogIn]}/>
    </div>
    )
}
