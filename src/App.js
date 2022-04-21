import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import './styles/App.css';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/Createpost';
import Question from './pages/Question';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import { CheckSession  } from './services/Auth'
import CommentsForm from './components/CommentsForm';
import Sidebar from './components/Sidebar';
import IPP from './pages/IPP'
import Planner from './components/Planner';


const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [teacher, setTeacher] = useState('')

  const checkToken = async () => {
    const user = await CheckSession()
    setTeacher(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setTeacher(null)
    toggleAuthenticated(false);
    localStorage.clear();
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Header 
        authenticated={authenticated}
        teacher={ teacher }
        handleLogOut={handleLogOut}
      />
      <Sidebar 
      authenticated={authenticated}
      teacher={ teacher }
      />
      <main>
       <Routes>
        <Route path='/login' element={
          <Login
          setTeacher={setTeacher}
          toggleAuthenticated={toggleAuthenticated} 
          /> }/>
        <Route path='/profile' element={ 
          <Profile 
          teacher={ teacher }
          /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/questions' element={ <Question />} />
        <Route path="/" element={ <Home />} />
        <Route path="/posts/postdetail/:id" element={ <PostDetails /> } /> 
        <Route path="/IPP" element={ <IPP /> } />
        <Route path="/createpost" element={ 
        <CreatePost 
        teacher={ teacher }
        /> } /> 
        <Route path="/posts/postdetail/:id/commentsform" element={ <CommentsForm /> } />
        <Route path="/prof" element={ 
          <MyProfile
          teacher={ teacher } 
          /> }/>
          <Route path="/planner" element={ <Planner /> } />
      </Routes> 
      </main>
    </div>
  );
}

export default App;
