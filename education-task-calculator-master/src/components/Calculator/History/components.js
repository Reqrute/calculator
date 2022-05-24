import styled from 'styled-components'

export const HistoryList = styled.ul`
position: static; 
height: 100%;
list-style-type: none;
overflow-y: scroll;
color: ${({ theme }) => theme.colors.black};
li{
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    color: ${({ theme }) => theme.colors.black};
    padding:10px;
}

::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 10px;
  }
`
export const HistoryTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`
export const HistoryContainer = styled.div`
  width: 20%;
  margin-top: 10px;
  height:90%;
`
