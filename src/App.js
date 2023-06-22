import Home from './pages/Home';
import UserAuthentication from './pages/UserAuthentication';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/login"} element={<UserAuthentication />} />
          <Route path={"/register"} element={<UserAuthentication />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
