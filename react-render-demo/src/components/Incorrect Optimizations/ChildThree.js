import React from 'react'

const ChildThree = ({ children, name }) => {
    console.log('Child Render')
  return (
    <div>
      {children} {name}
    </div>
  )
}

export const MemoizedchildThree = React.memo(ChildThree)

export default ChildThree
