// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandom = () => {
    const randomNumberGenerator = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNumberGenerator})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateRandom}
          >
            Generate
          </button>
          <p className="count">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
