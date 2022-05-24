import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 70px;
  background: 0% 0% no-repeat padding-box padding-box #434343;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 1.5rem;
`

export const Links = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: normal;
  margin: 10px;
  color: #b5a8a8;
  text-decoration: none;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: normal;
  color: #ffffff;
`