import React from 'react'
import PropTypeTs from './PropTypeTs'
import InterfaceExample from './InterfaceExample'
import HooksExample from './HooksExample'

const Home = () => {
  return (
    <div>
        <PropTypeTs message='This is the demo message'/>
        <InterfaceExample name="Interface Example"/>
        <HooksExample/>
    </div>
  )
}

export default Home