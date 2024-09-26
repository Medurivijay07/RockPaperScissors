import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
export const ImagesList = styled.div`
  width: 50%;
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  justify-content: center;
`
export const ImageButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 30%;
  margin-right: 30px;
  background-color: transparent;
`
export const ImageStyle = styled.img`
  width: 80%;
  margin: 30px;
`
export const RulesButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 7px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`
export const GameResultContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SelectedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PersonHeading = styled.p`
  color: #ffffff;
`
export const SelectedImage = styled.img`
  width: 50%;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 7px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
`
export const PopUpContainer = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PopUpImage = styled.img`
  width: 70%;
  margin-bottom: 20px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  outline: none;
`
export const ChoiceButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  width: 40%;
  border: none;
`
export const ChoiceImage = styled.img`
  width: 90%;
`
