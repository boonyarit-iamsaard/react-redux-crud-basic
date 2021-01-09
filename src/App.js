import PostCreateForm from './components/post/PostCreateForm';
import Posts from './components/post/Posts';

const App = () => {
  return (
    <div className="App">
      <PostCreateForm />
      <hr />
      <Posts />
    </div>
  );
};

export default App;
