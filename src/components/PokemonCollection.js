import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
        {props.pokemons.map((pokemon, indx) => < PokemonCard key={indx} pokemon={pokemon} /> )}
        </Card.Group>
      </div>
      )
}

export default PokemonCollection
