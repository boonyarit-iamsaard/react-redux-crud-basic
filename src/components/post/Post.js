// import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

// class Post extends Component {
//   deletePostHandler = () => {
//     this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id });
//   };
//   editPostHandler = () => {
//     this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id });
//   };
//   render() {
//     return (
//       <div>
//         <h2>{this.props.post.title}</h2>
//         <p>{this.props.post.content}</p>
//         <button onClick={this.editPostHandler}>Edit</button>
//         <button onClick={this.deletePostHandler}>Delete</button>
//       </div>
//     );
//   }
// }

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch({ type: 'DELETE_POST', id: post.id });
  };

  const editPostHandler = () => {
    dispatch({ type: 'EDIT_POST', id: post.id });
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={editPostHandler}>Edit</button>
      <button onClick={deletePostHandler}>Delete</button>
    </div>
  );
};

export default Post;
