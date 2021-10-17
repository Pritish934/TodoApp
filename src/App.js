import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import Todolist from './components/Todolist';






function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Todolist/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
