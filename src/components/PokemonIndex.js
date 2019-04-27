import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchResults: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res=>res.json())
    .then(pokemons=>{
      this.setState({
        pokemons: pokemons
      })
    })
  }

  addPokemon = (pokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: pokemon.name,
        stats: [{name: "hp", value: pokemon.hp}],
        sprites: {front: pokemon.frontUrl, back: pokemon.backUrl}
      })
    })
    .then(res=>res.json())
    .then(pokemons=>{
      this.componentDidMount()
    })
  }

  handleSearchChange = (e, {value}) => {
    this.setState({
      searchResults: this.state.pokemons.filter(pokemon => pokemon.name.includes(value))
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.searchResults.length ? this.state.searchResults : this.state.pokemons} />
      </div>
    )
  }
}

export default PokemonPage
