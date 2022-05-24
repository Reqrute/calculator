import styled from 'styled-components'

export const Display = styled.p`
  color: ${({ theme }) => theme.colors.black};
  border-color: ${({ theme }) => theme.colors.black};
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  padding: 20px;
  padding-right: 55px;
  height: 100px;
  @media (max-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes[6]}px;
  }
`
export const DisplayContainer = styled.div`
  height: 100px;
  border-bottom: 3px grey solid;
  margin-bottom:20px;
  @media (max-width: 1440px) {
    height: 80px;
  }
`
