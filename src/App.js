import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import './styles/App.css';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/Createpost';
import Home from './pages/Home';

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [teacher, setTeacher] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false);</Routes>
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
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
       <Routes>
        <Route path='/login' element={
          <Login
          setTeacher={setTeacher}
          toggleAuthenticated={toggleAuthenticated} 
          /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path="/" element={ <Home />} />
        <Route path="/postspage/:id" element={ <PostDetails /> } /> 
        <Route path="/createpost" element={ <CreatePost /> } /> 
      </Routes> 
      </main>
    </div>
  );
}

export default App;
