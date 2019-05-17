import React, {Component} from 'react';
import '../css/style.css'

class CreatePost extends Component {
  constructor(){
    super();
    this.state = {
      Name: '',
      Post: '',
      Rating: ''
    }
  }
  updatePost = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render(){
    console.log(this.props);
    return(
      <form onSubmit={this.props.addPost.bind(null, this.state)}>
        <label>
          Name:
            <input type='text' name='name' onChange={this.updatePost}/><br/>
        </label>
        <label>
          Rating
          <input type='Number' name='rating' min='0' max='5' onChange={this.updatePost}/><br/>
        </label>
        <label>
          Post:<br/>
        <input type='text' name='post' class='inputBox' max="250" onChange={this.updatePost}/><br/>
        </label>
        <button type='Submit'>Submit</button><br/>
      </form>
    )
  }
}
//pass yelp id into hidden value
export default CreatePost;
