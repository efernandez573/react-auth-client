import React, { Component } from 'react'

import { postBlogpost, axiosPostBlogpost } from './PostApi'

export default class PostCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      link: '',
      imgurl: '',
      description: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  clearForm = () => {
    this.setState(prevState => {
      const nextState = {}
      for(const key in prevState) {
        nextState[key] = ''
      }
      return nextState
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const data = { ...this.state }
    //   postBlogpost(data, this.props.user)
    //     .then(res => res.ok ? res : new Error())
    //     .then(() => this.props.flash('Successfully created a Blog Post', 'flash-success'))
    //     .then(this.clearForm)
    //     .catch(() => console.error('oh no got an error'))

    axiosPostBlogpost(data, this.props.user)
      .then(() => this.props.flash('Successfully created a Blog Post', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllBlogPost)
      .catch(() => console.error('oh no got an error'))
  }


  render() {
    return (
      <form
        className="blogpost-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Create Blogpost</h3>

        <label htmlFor="title">Title</label>
        <input
          name="link"
          value={ this.state.link }
          onChange={ this.handleInputChange } />

        <label htmlFor="imgurl">Add your image URL</label>
        <input
          name="imgurl"
          value={ this.state.imgurl }
          onChange={ this.handleInputChange } />

        <label htmlFor="description">Description</label>
        <input
          name="description"
          value={ this.state.description }
          onChange={ this.handleInputChange } />

        <button type="submit">Create BlogPost</button>

      </form>
    )
  }
}
