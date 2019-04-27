import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imgFront: true
  }

  handleToggleImg = () => {
    this.setState(prevState => ({
      imgFront: !prevState.imgFront
    }))
  }

  render(){

    const { name, id, stats, sprites } = this.props.pokemon
    const hpObject = stats.find( stat => stat.name === "hp")
    const img = this.state.imgFront ? sprites.front : sprites.back

    return (
      <Card>
        <div>
          <div className="image">
            <img id={id} src={img} alt="oh no!" onClick={this.handleToggleImg}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObject.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
