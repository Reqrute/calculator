import React from 'react'

import { Button, KeypadContainer } from '../components'
import { keypad } from '@/constants/keypad'

class KeyPad extends React.Component {
  render() {
    return (
      <KeypadContainer>
        {keypad.map((key, index) => (
          <Button
            key={index}
            onClick={() => this.props.handleClick(key)}>
            {key}
          </Button>
        ))}
      </KeypadContainer>
    )
  }
}

export default KeyPad
