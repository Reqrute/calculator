import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

