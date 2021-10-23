import { BrowserRouter as Router, Route } from 'react-router-dom'

import Analytics from './pages/Analytics';

import './App.css'; // TODO: get rid of this

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Analytics />
        </Route>
    </Router>
  );
}

export default App;
