import React from 'react'

import {
  Display as DisplayExpression,
  DisplayContainer,
} from '../components'

function Display({ expr }) {
  return (
    <DisplayContainer>
      <DisplayExpression>{expr}</DisplayExpression>
    </DisplayContainer>
  )
}

export default Display
