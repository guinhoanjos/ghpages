import './App.css';
import './stack.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>{Home}</Route>
      </Switch>
    </Router>
  );
}

export default App;