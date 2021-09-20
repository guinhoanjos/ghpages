import './App.css';
import './stack.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path='/ghpages' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
