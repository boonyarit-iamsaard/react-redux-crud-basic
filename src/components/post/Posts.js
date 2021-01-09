import { useSelector } from 'react-redux';
import PostEditForm from './PostEditForm';
import Post from './Post';

const Posts = () => {
  const posts = useSelector(state => state);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          {post.editing ? (
            <PostEditForm key={post} post={post} />
          ) : (
            <Post key={post} post={post} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
