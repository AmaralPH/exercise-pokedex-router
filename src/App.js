import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link>Favorites</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/pokemons/:id" render={(props) => <PokemonDetails {...props} id={props.match.params.id} />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route path="/" component={NotFound} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;