import React, { useState } from 'react'
import {MemoizedchildTwo} from './ChildTwo'

const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setname] = useState(Kunal)


    console.log('ParentTwo Render')
  return (
      <div>
          <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
          <button onClick={() => setname('Sharma')}>Change name</button>
      <MemoizedchildTwo name = {name}/>
    </div>
  )
}

export default ParentTwo
