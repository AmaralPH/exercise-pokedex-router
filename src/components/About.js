import React from 'react';
import '../App.css'

class About extends React.Component {
  render () {
    return (
      <div className="about">
				<h2>Pokedéx</h2>
				<img width="500px" src="https://w7.pngwing.com/pngs/213/386/png-transparent-pokemon-black-2-and-white-2-pokemon-black-white-pokedex-kanto-fies-electronics-gadget-electronic-device.png" />

				<p>
					The Pokédex is a digital encyclopedia created by Professor Oak as an invaluable 
					tool to Trainers in the Pokémon world.
				</p>
				<p>
					It gives information about all 
					Pokémon in the world that are contained in its database, although it 
					differs in how it acquires and presents information over the different media.
				</p>
				<p>
					However, they are also only given to a few Trainers at a time, 
					generally to the ones that are felt to have exceptional potential and skill. 
				</p>
				<p>
					Regional Pokédexes give information about Pokémon native to its particular region, 
					while the National Pokédex records information about all known Pokémon.
				</p>
      </div>
    )
  }
}

export default About;