// Write your code here

import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {lightMode: false}

  changeMode = () => {
    this.setState(pre => ({lightMode: !pre.lightMode}))
  }

  changeBackground = () => {
    const {lightMode} = this.state
    return lightMode ? 'background1' : 'background'
  }

  changeColor = () => {
    const {lightMode} = this.state
    return lightMode ? 'heading' : 'heading1'
  }

  changeButton = () => {
    const {lightMode} = this.state
    return lightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const background = this.changeBackground()
    const headingClass = this.changeColor()
    const buttonText = this.changeButton()
    // console.log(background, headingClass, buttonText)
    return (
      <div className={`${background} main`}>
        <h1 className={headingClass}>Click To Change Mode</h1>
        <button onClick={this.changeMode}>{buttonText}</button>
      </div>
    )
  }
}

export default LightDarkMode
