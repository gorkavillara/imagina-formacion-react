import React, { Component } from "react"

export default class Form extends Component {
  inputRef = React.createRef()
  
  focusInput = () => this.inputRef.current.focus()

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focusInput}>Activa el input</button>
      </div>
    )
  }
}
