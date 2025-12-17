import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/" end style={({ isActive }) => ({ marginRight: 12, fontWeight: isActive ? '700' : '400' })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? '700' : '400' })}>
          About
        </NavLink>
      </nav>

      <Outlet />

      <footer style={{ marginTop: 24 }}>
        Any inquiries, contact me at nathan07green@gmail.com or on Discord
      </footer>
    </div>
  )
}
