
import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from '../src/pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard'
import Content from './pages/content'
import Group from './pages/Group'
import Video from './pages/Video'
import ForgotPassword from './pages/ForgotPassword'
import { AuthProvider } from './appcontext/Authcontext'

//axios.defaults.baseURL= 'http://localhost:3000';
//axios.defaults.withCredentials= true;

function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/content' element={<Content />} />
        <Route path='/group' element={<Group />} />
        <Route path='/video' element={<Video />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
