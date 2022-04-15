import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/register' element={ <Register /> }/>
      </Routes>
    </div>
  );
}

export default App;
