import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananaCount: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoesCount,bananaCount } = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">FruitsCounter</h1>
        <h1 className="heading">
          Bob ate {mangoesCount} Mangoes {bananaCount} Bananas
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
          alt="mango"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
          alt="banana"
        />
        <div>
          <button type="button" className="speed-btn" onClick={this.onEatMango}>
            Eat Mango
          </button>
          <button
            type="button"
            className="brake-btn"
            onClick={this.onEatBanana}
          >
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
