import React from 'react'

const ChildTwo = () => {
    console.log('Child Render')
  return (
    <div>
      ChildTwo component
    </div>
  )
}

export const MemoizedchildTwo = React.memo(ChildTwo)

export default ChildTwo
