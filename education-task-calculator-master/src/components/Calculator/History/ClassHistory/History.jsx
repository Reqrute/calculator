import React from 'react'

import {
  HistoryList,
  HistoryTitle,
  HistoryContainer,
} from '../components'

class History extends React.Component {
  render() {
    return (
      <HistoryContainer>
        <HistoryTitle>History</HistoryTitle>
        <HistoryList>
          {this.props.history.map((expr, index) => (
            <li key={index}>{expr}</li>
          ))}
        </HistoryList>
      </HistoryContainer>
    )
  }
}

export default History
