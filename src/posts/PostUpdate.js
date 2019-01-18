import React, { Component } from 'react'

import { axiosPatchBlogpost } from './blogApi'

export default class PostUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      imgurl: '',
      link: '',
      description: ''
    }
  }

  componentDidMount () {
    const firstBlogpostId = this.props.post[0].id
    this.changeBlogpostData(firstBlogpostId)
  }

  changeBlogpostData = id => {
    const post = this.props.post.find(post => String(post.id) === String(id))
    this.setState({
      id: post.id ,
      title: post.title || '',
      imgurl: post.imgurl || '',
      link: post.link || '',
      description: post.description || ''
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    if (name === 'id') {
      this.changeBlogpostData(value)
    } else {
      this.setState({ [name]: value })
    }
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
    // patchMovie(data, this.props.user)
    //   .then(res => res.ok ? res : new Error())
    //   .then(() => this.props.flash('Fixed the movie, z', 'flash-success'))
    //   .then(this.clearForm)
    //   .catch(() => console.error('oh no got an error'))

    axiosPatchBlogpost(data, this.props.user)
      .then(() => this.props.flash('Successfully updated a BlogPost', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllBlogpost)
      .catch(() => console.error('Oops, something went wrong! Please try again.'))
  }


  render() {
    let SelectOptions
    if (this.props.posts) {
      SelectOptions = this.props.posts.map((post, index) => {
        return<option key={ index } value={ post.id }>{ post.title } (ID: { post.id })</option>
      })
    }

    return (
      <form
        className="post-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Update BlogPost</h3>

        <label htmlFor="id">Id</label>
        <select
          name="id"
          onChange={ this.handleInputChange }>
          { SelectOptions }
        </select>

        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={ this.state.title }
          onChange={ this.handleInputChange } />

        <label htmlFor="imgurl">Insert Image Url</label>
        <input
          name="imgurl"
          value={ this.state.imgurl }
          onChange={ this.handleInputChange } />

        <label htmlFor="link">Link</label>
        <input
          name="link"
          value={ this.state.link }
          onChange={ this.handleInputChange } />

        <label htmlFor="description">Description</label>
        <input
          name="description"
          value={ this.state.description }
          onChange={ this.handleInputChange } />

        <button type="submit">Update Blogpost</button>

      </form>
    )
  }
}
