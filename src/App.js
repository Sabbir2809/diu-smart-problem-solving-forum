import './App.css';
import Header from './components/Header/Header';
import DiuSmartForum from './components/DiuSmartForum/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question from './components/AddQuestion/Question';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={DiuSmartForum} />
          <Route exact path='/add-question' component={Question} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
