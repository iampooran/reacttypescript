import React from 'react'
import PropTypeTs from './PropTypeTs'
import InterfaceExample from './InterfaceExample'
import HooksExample from './HooksExample'
import TypingDefaultProp from './TypingDefaultProp'

const Home = () => {
  return (
    <div>
        <PropTypeTs message='This is the demo message'/>
        <InterfaceExample name="Interface Example"/>
        <HooksExample/>
        <TypingDefaultProp/>
    </div>
  )
}

export default Home