// Style your elements here

import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.getDirections});
`
export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
`
export const Para = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
`
export const ColorsContainer = styled.div`
  display: flex;
`
export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`
export const CustomPara = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 100px;
  height: 50px;
  cursor: pointer;
  outlie: none;
  border: none;
  border-radius: 07px;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  height: 40px;
  width: 50%;
  border-width: 0px;
  border-radius: 07px;
  background-color: #0070c1;
  color: #ffffff;
  cursor: pointer;
  outlie: none;
`
