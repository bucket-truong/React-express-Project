import React from 'react';

const EditPost = (props) => {
  return(
    <div>
      <h3>Edit Post</h3>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Name:
            <input type='text' name='name' onChange={props.handleFormChange} value={props.postToEdit}/><br/>
        </label>
        <label>
          Edit Rating
          <input type='Number' name='rating' min='0' max='5' onChange={props.handleFormChange} value={props.postToEdit}/><br/>
        </label>
        <label>
           Edit Post:<br/>
          <input type='text' name='post' class='inputBox' onChange={props.handleFormChange} value={props.postToEdit}/><br/>
        </label>
        <button type='sumbit'>Submit</button><br/>
      </form>
    </div>
  )
}
export default EditPost;
