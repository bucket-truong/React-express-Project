import React from 'react';

const Posts = (props) => {
  const postList = props.posts.map((post) => {
    return(
      <li key={post._id}>
        <span>name: {post.Name}</span><br/>
        <span>rating: {post.Rating}</span><br/>
        <span>review: {post.Post}</span><br/>
        <button onClick={props.deletePost.bind(null, post._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, post)}>Edit</button>
      </li>
    )
  })

  return(
    <ul>
    {postList}
    </ul>
  )

}
export default Posts
