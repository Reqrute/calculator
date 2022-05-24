import React from 'react'

import {
  HistoryList,
  HistoryTitle,
  HistoryContainer,
} from '../components'

function History({ history }) {
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <HistoryList>
        {history.map((expr, index) => (
          <li key={index}>{expr}</li>
        ))}
      </HistoryList>
    </HistoryContainer>
  )
}

export default History
