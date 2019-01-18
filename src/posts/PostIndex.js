import React from 'react'

const PostIndex = props => {
  console.log(props)

  const Post = props.post.map((post, index) => {

    return <div key={ index }>
      <h3>{ post.title } (ID: { post.id })</h3>
      <ul>
        <li>{post.imgurl}</li>
        <li>{post.link}</li>
        <li>{post.description}</li>
      </ul>
    </div>
  })
  return (
    <div>
      { Post }
    </div>
  )

}

export default PostIndex
