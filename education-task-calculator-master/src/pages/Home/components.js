import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h3``

export const CalculatorContainer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`

export const ControlPanelConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  margin-right: 20px;
`
export const Line = styled.div`
  height: ${props => (props.vertical ? '100%' : '0px')};
  width: ${props => (props.horizontal ? '100%' : '0px')};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 12px;
  opacity: 1;
  margin-bottom: 1rem;
  margin-left: 1rem;
`