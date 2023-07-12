import Home from './pages/Home'
import UserAuthentication from './pages/UserAuthentication'
import Notes from './pages/Notes'
import Dashboard from './pages/Dashboard'
import CreateNotes from './features/note/index'
import TagsFeature from './features/tags'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import GuestRoute from './routes/GuestRoute'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route element={<GuestRoute />}>
            <Route path={'/authentication'} element={<UserAuthentication />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path={'/user'} element={<Dashboard />} />
            <Route path={'/user/notes'} element={<Notes />} />
            <Route path={'/user/notes/add'} element={<CreateNotes />} />
            <Route path={'/user/tags'} element={<TagsFeature />} />
          </Route> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
