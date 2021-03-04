import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
