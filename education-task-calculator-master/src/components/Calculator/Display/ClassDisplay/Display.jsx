import React from 'react'

import {
  Display as DisplayExpression,
  DisplayContainer,
} from '../components'

class Display extends React.Component {
  render() {
    return (
      <DisplayContainer>
        <DisplayExpression>
          {this.props.expr}
        </DisplayExpression>
      </DisplayContainer>
    )
  }
}

export default Display
