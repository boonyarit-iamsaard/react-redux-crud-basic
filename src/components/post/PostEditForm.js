import { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostEditForm = ({ post }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(post);

  const onInputChangeHandler = e => {
    const { target } = e;
    const { name, value } = target;

    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    dispatch({
      type: 'UPDATE_POST',
      id: input.id,
      data: input
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter post title"
          name="title"
          defaultValue={input.title}
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
          defaultValue={input.content}
          onChange={onInputChangeHandler}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default PostEditForm;
