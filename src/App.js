import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from  './components/Navbar';
import Home from  './pages/Home';
import ItemDetails from  './pages/ItemDetails';
import './App.css';
import TVShows from './pages/TVShows';
import NewAndPopular from './pages/NewAndPopular';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Switch>
        <Route exact path="/netflix-movies" component={Home} />
        <Route exact path="/tv-shows" component={TVShows} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/new-and-popular" component={NewAndPopular} />
        <Route exact path="/details/:id" component={ItemDetails} />
      </Switch>
    
    </div>
  </Router>
  );
}

export default App;
