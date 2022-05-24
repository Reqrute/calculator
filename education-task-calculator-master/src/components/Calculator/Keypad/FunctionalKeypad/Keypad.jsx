import React from 'react'

import { Button, KeypadContainer } from '../components'
import { keypad } from '@/constants/keypad'

function Keypad({ handleClick }) {
  return (
    <KeypadContainer>
      {keypad.map((key, index) => (
        <Button
          key={index}
          onClick={() => handleClick(key)}>
          {key}
        </Button>
      ))}
    </KeypadContainer>
  )
}
export default Keypad