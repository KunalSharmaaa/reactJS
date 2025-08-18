// import React, { useState, useMemo, useCallback } from 'react'
// import { MemoizedchildFive } from './ChildFive'

// const ParentFour = () => {
//     const [count, setCount] = useState(0)
//     const [name, setname] = useState('Kunal')

//     const person = {
//         fname: 'Bruce',
//         lname: 'Wayne'
//     }



//     const memoizedPerson = useMemo(() => person, [])

//     const handleClick = () => { }

//     const memoizedHandleClick = useCallback(handleClick, [])


//     console.log('ParentFour Render')
//   return (
//       <div>
//           <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
//           <button onClick={() => setname('Sharma')}>Change name</button>
//           <MemoizedchildFive name={name} handleClick={memoizedHandleClick} />
//     </div>
//   )
// }

// export default ParentFour
