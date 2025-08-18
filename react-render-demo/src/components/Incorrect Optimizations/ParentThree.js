import React, { useState } from 'react'
import { MemoizedchildThree } from './ChildThree'

const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setname] = useState('Kunal')


    console.log('ParentThree Render')
  return (
      <div>
          <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
          <button onClick={() => setname('Sharma')}>Change name</button>
      <MemoizedchildThree name = {name}><strong>Hello</strong></MemoizedchildThree>
    </div>
  )
}

export default ParentThree
