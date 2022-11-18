// Style your elements here
import styled from 'styled-components'

export const ListContainer = styled.li`
  list-style-type: none;
  margin-right: 30px;
`
export const DirectionButton = styled.button`
  height: 40px;
  width: 130%;
  border-width: 0px;
  border-radius: 07px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: ${props => (props.isActive ? '#ffffff' : '#ffffff79')};
  color: #000000;
  cursor: pointer;
  outlie: none;
  margin-right: 15px;
  font-weight: 400;
  font-size: 13px;
`
