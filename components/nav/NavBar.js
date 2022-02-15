import Link from 'next/link'

import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <Link href="/">
    <a className="navbar-brand" >Navbar</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link href="/users">
          <a className="nav-link active" aria-current="page">Show Users</a>
          </Link>
        </li>
        <li className="nav-item">
            <Link href="/users/create">
          <a className="nav-link" >Create User</a>
          </Link>
        </li>
        <li className="nav-item">
            <Link href="/users/remove">
          <a className="nav-link" >Remove User</a>
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
