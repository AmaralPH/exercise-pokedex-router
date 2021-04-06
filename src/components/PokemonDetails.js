import React from 'react';
import pokemons from '../data';
import '../pokemon.css';

class PokemonDetails extends React.Component {
  render () {
		console.log(this.props.id)
		const id = this.props.id
		const pokemon = pokemons.find((object) => object.id === Number(id));
		console.log(pokemon)
		const {name, type, averageWeight, image, summary, foundAt} = pokemon;
  	return (
			<div className="pokemon-details">
				<div className="pokemon">
					<div>
						<p>{name}</p>
						<p>{type}</p>
						<p>
							Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
						</p>
					</div>
					<img src={image} alt={`${name} sprite`} />
				</div>
				<h2>Sumary</h2>
					<p>{summary}</p>
					<h2>Found at location</h2>
					<div className="map-details">
						{foundAt.map((mapInfo) => <div className="map"><p>{mapInfo.location}</p><img src={mapInfo.map} /></div>)}
					</div>
			</div>

    )
  }
}

export default PokemonDetails;