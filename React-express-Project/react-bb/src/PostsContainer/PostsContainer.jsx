import React, {Component} from 'react';
import CreatePost from '../CreatePost/CreatePost';
import EditPost from '../EditPost/EditPost';
import PostList from '../PostList/PostList';

class PostsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      postToEdit: {
        _id: null,
        name: '',
        post: '',
        Rating: ''
      },
    }
  }
  componentDidMount(){
    this.getPosts()
  }
  getPosts = async () => {
    try {
      const res = await fetch('http://localhost:9000/posts', {
        credentials:'include'
      });
      if(res.status != 200){
        throw Error(res.statusText);
      }
      const postsParsed = await res.json();
      this.setState({
        posts: postsParsed.data
      })
    } catch(err) {
      console.log(err);
    }
  }
  addPost = async (post, e) => {
    e.preventDefault();
    console.log(post);
    try {
      const createdPost = await fetch('http://localhost:9000/posts', {
        method:'POST',
        credentials:'include',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedRes = await createdPost.json();
      console.log(parsedRes);
      this.setState({
        posts: [...this.state.posts, parsedRes.data]
      })
    } catch(err) {
      console.log(err);
    }
  }
  closeAndEdit = async (e) => {
    e.preventDefault();
  }
  editPost = async (e) => {
  const editRes = await fetch('http://localhost:9000/posts' + this.state._id, {
    method:'POST',
    credentials:'include',
    body: JSON.stringify(this.state.postToEdit),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const parsedRes = await editRes.json();
  const editedPostArray = this.state.posts.map((post) => {
    if(post._id === this.state.postToEdit._id){
      post = parsedRes.data;
    }
    return post
  });
  this.setState({
    posts: editedPostArray,
  })
}
  handleFormChange = (e) => {
    this.setState({
      postToEdit: {
        ...this.state.postToEdit,
        [e.target.name]: e.target.value
      }
    })
  }
  showModal = (post) => {
    this.setState({
      modalShowing:true,
      postToEdit: post
    });
  }
  deletePost = async (id, e) => {
    e.preventDefault();
    try {
      const deletePost = await fetch(`http://localhost:9000/posts/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const deletePostJson = await deletePost.json();
      this.setState({
        posts: this.state.posts.filter((post, i) => post._id !== id)})
    } catch(err){
      console.log(err);
    }
  }
  render(){
    console.log(this.state, 'state obj');
    return (
      <div>
        <CreatePost addPost={this.addPost}/>
        <PostList posts={this.state.posts} showModal={this.showModal} deletePost={this.deletePost}/>
        {this.state.modalShowing ? <EditPost postToEdit={this.state.postToEdit} closeAndEdit={this.closeAndEdit} handleFormChange={this.handleChange}/> : null }
      </div>
    )
  }
}
export default PostsContainer
