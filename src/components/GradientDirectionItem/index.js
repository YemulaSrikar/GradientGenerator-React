// Write your code here
import {ListContainer, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directions, onClickDirection, isActive} = props
  const {value, displayText} = directions

  const onClickDirectionButton = () => {
    onClickDirection(value)
  }

  return (
    <ListContainer>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickDirectionButton}
      >
        {displayText}
      </DirectionButton>
    </ListContainer>
  )
}
export default GradientDirectionItem
