import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const navigate = useNavigate()
  const authenticated = localStorage.getItem('authenticated')

  useEffect(() => {
    // No need for redirection logic, just let the user proceed
  }, []) // Empty dependency array to ensure the effect runs only once

  return <>{<Outlet />}</>
}

export default PrivateRoutes
