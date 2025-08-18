import React from 'react'

const ChildFour = () => {
    const date = new Date()
    console.log('ChildFour Render')
  return (
    <div>
          Hello {'name'}. it is currently {date.getHours()}: {date.getMinutes()}:{' '} {date.getSeconds()}
    </div>
  )
}

export default ChildFour

export const MemoizedchildFour = React.memo(ChildFour)
