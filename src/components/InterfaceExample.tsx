import React from 'react'

interface GetProp  {
    name: String
}

const InterfaceExample = ({name}: GetProp)  => {
  return (
    <div>
        {name}
    </div>
  )
}

export default InterfaceExample