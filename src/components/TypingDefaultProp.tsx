import React from 'react'

type GreetProps = { age?: number };


const TypingDefaultProp =  ({age = 21} : GreetProps) => {
  return (
    <div>
        {age}
    </div>
  )
}

export default TypingDefaultProp