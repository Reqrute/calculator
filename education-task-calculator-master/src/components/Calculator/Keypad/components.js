import styled from 'styled-components'

export const Button = styled.button`
  width: 85px;
  height: 85px;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
    no-repeat padding-box;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 25px;
  opacity: 1;
  outline: none;
  margin-right: 1.5rem;
`
export const KeypadContainer = styled.div`
  height:100%;
  width:100%;
  padding-left: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 4% ;
  grid-row-gap: 5%;
`