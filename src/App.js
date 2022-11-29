import './App.css';
import Header from './components/Header/Header';
import DiuSmartForum from './components/DiuSmartForum/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={DiuSmartForum} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
