import React, { Component } from 'react'
import axios from 'axios'
import { axiosDeleteBlogpost } from './blogApi'
import apiUrl from '../apiConfig.js'


class PostDelete extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: ''
    }
  }
  deleteBlog = () => {
    // get request to get a single movie using axios
    axios.delete(apiUrl + `/posts/${this.state.id}`)
      .then(() => this.setState({ [name]: value })
        .catch(console.error)
      )
  }

  render() {
    return (
      <form
        className="blogpost-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Create Blogpost</h3>

        <label htmlFor="id">ID</label>
        <input
          name="id"
          value={ this.state.id }
          onChange={ this.deleteBlog } />
        <button type="submit">Delete BlogPost</button>

      </form>
    )
  }
}
export default PostDelete
