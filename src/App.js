import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Favorites</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} id={props.match.params.id} />} />
        <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;