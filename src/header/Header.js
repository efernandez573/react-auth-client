import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
<<<<<<< HEAD
    <Link to="/posts">Show all Blog Posts</Link>
    <Link to="/post-create">Create</Link>
    <Link to="/post-update">Update</Link>
    <Link to="/post-delete">Delete</Link>

=======
>>>>>>> origin/master
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
<<<<<<< HEAD
    <h1>Curated</h1>
=======
    <h1>Uber, But For Taxis</h1>
>>>>>>> origin/master
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
