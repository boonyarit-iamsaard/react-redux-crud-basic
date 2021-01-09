import { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostCreateForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: Date.now(),
    title: '',
    content: '',
    editing: false
  });

  const onInputChangeHandler = e => {
    const { target } = e;
    const { name, value } = target;

    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    dispatch({
      type: 'ADD_POST',
      data: input
    });

    setInput({ ...input, title: '', content: '' });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter post title"
          name="title"
          value={input.title}
          onChange={onInputChangeHandler}
          required
        />
        <br />
        <br />
        <textarea
          cols="30"
          rows="5"
          placeholder="Enter post content"
          name="content"
          value={input.content}
          onChange={onInputChangeHandler}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostCreateForm;
