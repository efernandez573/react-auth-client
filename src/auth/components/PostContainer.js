const apiUrl = 'http://localhost:4741'
import React, { Component } from 'react'
import axios from 'axios'

class PostContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
  }
  componentDidMount() {
    axios.get(apiUrl +'/post.json')
      .then(response => {
        console.log(response)
        this.setState({
          post: response.data
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="post-container">
        {this.state.post.map( post => {
          return (
            <div className="single-post" key={post.id}>
              <h4>{post.title}</h4>,
              <p>{post.imgurl}</p> ,
              <p>{post.link}</p> ,
              <p>{post.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default PostContainer
