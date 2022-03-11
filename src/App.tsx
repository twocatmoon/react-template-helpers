import { useState } from 'react'
import './App.css'
import { If, For } from './lib'

function App() {
  const arr = [ 'foo', 'bar', 'baz ']
  const obj = { foo: 1, bar: 2, baz: 3 }

  const [ visible, setVisible ] = useState(true)


  return (
      <div className="App">
          <header className="App-header">
                <p>React Template Helpers</p>
                {
                    For(arr, (item, index, { isEven }) => (
                        <span key={index}>{isEven ? 'even:' : 'odd:'} {item}</span>
                    ))
                }
                {
                    For(obj, (item, key) => (
                        <span key={key}>{item}</span>
                    ))
                }
                {
                    If(visible, () => 'visible')
                    .Else(() => 'not visible')
                    .EndIf()
                }
                <button onClick={() => setVisible(!visible)}>Toggle</button>
          </header>
      </div>
    )
}

export default App
