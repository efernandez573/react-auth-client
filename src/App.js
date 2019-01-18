import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import PostIndex from './posts/PostIndex'
import PostCreate from './posts/PostCreate'
import PostUpdate from './posts/PostUpdate'
import PostDelete from './posts/PostDelete'

import { axiosGetBlogpostAuthenticated, axiosPostBlogpost, axiosPatchBlogpost, axiosDeleteBlogpost } from './posts/blogApi'

// adapted from class notes/template

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      posts: []
    }
  }

  getAllBlogpost = () => {
    // getBlogpost()
    //   .then(res => res.ok ? res : new Error())
    //   .then(res => res.json())
    //   .then(res => this.setState({ post: res.post }))
    //   .then(() => this.props.flash('Successfully got all Blog Posts', 'flash-success'))
    //   .catch(() => console.error('oh no got an error'))

    // axiosGetBlogpost()
    //   .then(res => this.setState({ post: res.data.post }))
    //   .then(() => this.props.flash('Successfully got all Blog Post', 'flash-success'))
    //   .catch(() => console.error('oh no got an error'))

    // getBlogpostAuthenticated(this.props.user)
    //   .then(res => res.ok ? res : new Error())
    //   .then(res => res.json())
    //   .then(res => this.setState({ post: res.post }))
    //   .then(() => this.props.flash('Successfully got all Blog Post', 'flash-success'))
    //   .catch(() => console.error('oh no got an error'))

    axiosGetBlogpostAuthenticated(this.state.user)
      .then(res => {console.log('in axios getBlogpostAuthenticated and res is ', res); return res})
      .then(res => this.setState({ post: res.data.posts }))
      .then(() => this.flash('Successfully got all Blog Post', 'flash-success'))
      .catch((err) => console.error(err))
  }

  setUser = user => this.setState({ user }, this.getAllBlogpost)
      flashType: null
  )
}
}

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3
          className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up'
            render={() => (
              <SignUp
                flash={this.flash}
                setUser={this.setUser} />
            )} />
          <Route path='/sign-in'
            render={() => (
              <SignIn
                flash={this.flash}
                setUser={this.setUser} />
            )} />
          <AuthenticatedRoute
            user={user} path='/sign-out'
            render={() => (
              <SignOut
                flash={this.flash}
                clearUser={this.clearUser}
                user={user} />
            )} />
          <AuthenticatedRoute
            user={user} path='/change-password'
            render={() => (
              <ChangePassword
                flash={this.flash}
                user={user} />
            )} />
          <AuthenticatedRoute
            user={user} path='/posts'
            render={() => (
              <PostIndex
                getAllBlogpost={this.getAllBlogpost}
                post={this.state.post}
                flash={this.flash}
                user={user} />
            )} />
          <AuthenticatedRoute
            user={user} path='/post-create'
            render={() => (
              <PostCreate
                getAllBlogpost={this.getAllBlogpost}
                flash={this.flash}
                user={user} />
            )} />
          <AuthenticatedRoute
            user={user} path='/post-update'
            render={() => (
              <PostUpdate
                post={this.state.post}
                getAllBlogpost={this.getAllBlogpost}
                flash={this.flash}
                user={user} />
            )} />
          <AuthenticatedRoute
            user={user} path='/post-delete'
            render={() => (
              <PostDelete
                post={this.state.post}
                getAllBlogpost={this.getAllBlogpost}
                flash={this.flash}
                user={user} />
            )} />

        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
