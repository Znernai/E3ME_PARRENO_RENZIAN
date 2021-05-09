import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import World from './components/World';
import Technology from './components/Technology';
import Culture from './components/Culture';
import Health from './components/Health';
import Archives from './components/Archives';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




function App() {
  
  return (
    <Router>
    <div className="container">
      <Nav user = {''}/>
      <Switch>
        <Route path = '/'exact component={Home}/>
        <Route path = '/about'exact component={About}/>
        <Route path = '/world'exact component={World}/>
        <Route path = '/technology'exact component={Technology}/>
        <Route path = '/culture'exact component={Culture}/>
        <Route path = '/health'exact component={Health}/>
        <Route path = '/archives'exact component={Archives}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
