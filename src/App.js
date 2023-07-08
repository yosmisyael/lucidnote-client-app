import Home from './pages/Home';
import UserAuthentication from './pages/UserAuthentication';
import Notes from './pages/Notes';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/login"} element={<UserAuthentication />} />
          <Route path={"/register"} element={<UserAuthentication />} />
          <Route path={"/user"} element={<Dashboard />}/>
          <Route path={"/user/notes"} element={<Notes />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
