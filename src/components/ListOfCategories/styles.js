import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  //OCULTAR SCROLL Y MANTENER EL SCROL FUNCIONADO
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 25px;
`

export const Item = styled.li`
  padding: 0 8px;
`