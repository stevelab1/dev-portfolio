// for routing 
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// animated transitions 
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// styles
import "./App.css";

// components 
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

    <Router>
      <Header />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
    </div>
  );
}

export default App;
