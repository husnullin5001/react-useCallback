import React, { useState } from 'react';
import List from './List'

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = () => {
    return [number, number + 1, number + 2]
  }

  const theme = {
    background: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}
