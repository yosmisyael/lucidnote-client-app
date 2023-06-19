import Home from './pages/Home';
import UserAuthentication from './pages/UserAuthentication';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={["/login", '/register']}>
            <UserAuthentication />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
