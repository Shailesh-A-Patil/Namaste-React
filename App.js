import React from "react"
import ReactDOM from "react-dom/client"

// React element
const title = <h1>Title from JSX</h1>

// calling react element in component
const FirstComponent = () => <div id="first">{title}</div>

// component composition
// JSX can not have two parent tag so we use empty tag
const SecondComponent = () => (
  <>
    <FirstComponent />
    <p>Second component</p>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// calling component in render
root.render(<SecondComponent />)
