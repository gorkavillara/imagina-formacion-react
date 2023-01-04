import logo from "./logo.svg"
import "./App.css"
import {
  ConditionalClasses,
  ConditionalComponents,
  PropClasses,
  StyleAttribute,
} from "./conditionalStyles"

function App() {
  return (
    <div className="App">
      {/* <ConditionalClasses /> */}
      <ConditionalComponents />
      {/* <PropClasses className="doble" /> */}
      {/* <StyleAttribute /> */}
    </div>
  )
}

export default App
