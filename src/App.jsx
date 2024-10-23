import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './app/Navbar.jsx';
import PostsList  from './features/posts/PostsList.jsx';
import AddPostForm from './features/posts/AddPostForm.jsx';
import SinglePostPage from './features/posts/SinglePosePage.jsx';
import EditPostForm from './features/posts/EditPostForm.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          } />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

