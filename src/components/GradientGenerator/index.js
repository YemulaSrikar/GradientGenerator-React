import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  CustomContainer,
  Heading,
  Para,
  FormContainer,
  UnorderedList,
  ColorsContainer,
  LabelsContainer,
  CustomPara,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    directionsValue: gradientDirectionsList[0].value,
    getDirections: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fromColorInput, toColorInput, directionsValue} = this.state
    this.setState({
      getDirections: `to ${directionsValue}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onClickDirection = value => {
    this.setState({directionsValue: value})
  }

  onChangeFirstColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      getDirections,
      directionsValue,
    } = this.state
    return (
      <CustomContainer
        getDirections={getDirections}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <FormContainer onSubmit={this.onSubmitForm}>
          <UnorderedList>
            {gradientDirectionsList.map(directions => (
              <GradientDirectionItem
                directions={directions}
                key={directions.value}
                onClickDirection={this.onClickDirection}
                isActive={directions.value === directionsValue}
              />
            ))}
          </UnorderedList>
          <Para>Pick the Colors</Para>
          <ColorsContainer>
            <LabelsContainer>
              <CustomPara>{fromColorInput}</CustomPara>
              <Input
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFirstColor}
              />
            </LabelsContainer>

            <LabelsContainer>
              <CustomPara htmlFor="color1">{toColorInput}</CustomPara>
              <Input
                type="color"
                id="color1"
                value={toColorInput}
                onChange={this.onChangeSecondColor}
              />
            </LabelsContainer>
          </ColorsContainer>

          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
      </CustomContainer>
    )
  }
}
export default GradientGenerator
