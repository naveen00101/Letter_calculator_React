// Write your code here.
import './index.css'
import {Component} from 'react'

class LetterCalculator extends Component {
  state = {
    count: 0,
  }

  letterCount = event => {
    const text = event.target.value
    console.log(text)
    const len = text.replace(/ /g, '').length
    this.setState({count: len})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="cal-sec">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form>
            <label className="label-text" htmlFor="phrase">
              Enter the phrase
            </label>
            <br />
            <input
              type="input"
              id="phrase"
              name="phrase"
              className="input-box"
              onChange={this.letterCount}
            />
          </form>
          <div className="box">
            <p>No.of letters: {count}</p>
          </div>
        </div>

        <div className="img-sec">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LetterCalculator
