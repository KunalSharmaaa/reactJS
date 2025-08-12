import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentF() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component F - {countContext.countState}
      <button onClick={() => CountContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => CountContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
