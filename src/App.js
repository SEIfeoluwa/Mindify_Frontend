import { Routes, Route } from 'react-router-dom'
import './App.css';
import PostDetails from './pages/PostDetails';
import CreatePost from '.pages/Createpost';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/postspage/:id" element={ <PostDetails /> } /> 
        <Route path="/createpost" element={ <CreatePost /> } />
      </Routes>
    </div>
  );
}

export default App;
