import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

`
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
`

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius:5px;
  width: 250px;
  height: 50px;
  padding: ${({ theme }) => theme.spaces[2]}px;
  margin-top: ${({ theme }) => theme.spaces[4]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  text-align: left;
`

export const ThemeSelector = styled.select`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  width: 250px;
  height: 50px;
  box-sizing: border-box;
  text-align: left;
  border-radius:5px;
  padding: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8Qzii
  YSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQ
  Kk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');

  background-repeat: no-repeat;
  background-position: right;
`
export const SettignsContainer = styled.div`
  margin-left: ${({ theme }) => theme.spaces[5]}px;
  margin-top: ${({ theme }) => theme.spaces[5]}px;
`
export const ThemeSelectorContainer = styled.div`
  width: 250px;
`