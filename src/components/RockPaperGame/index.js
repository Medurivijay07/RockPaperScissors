import Popup from 'reactjs-popup'
import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'

import {
  AppContainer,
  ImagesList,
  RulesButton,
  GameResultContainer,
  SelectedImageContainer,
  PersonHeading,
  SelectedImage,
  PlayAgainButton,
  PopUpContainer,
  PopUpImage,
  CloseButton,
  ChoiceButton,
  ChoiceImage,
} from './styledComponents'

const overlayStyles = {
  width: '80%',
  backgroundColor: '#ffffff',
  textAlign: 'center',
  margin: '50px',
}

class RockPaperGame extends Component {
  state = {
    score: 0,
    playersChoice: null,
    opponentChoice: null,
    isPlaying: true,
    result: '',
  }

  playGame = playerChoice => {
    const {choicesList} = this.props
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentsChoice = choicesList[randomIndex]

    const result = this.getResult(playerChoice.id, opponentsChoice.id)

    this.setState(prevState => ({
      playersChoice: playerChoice,
      opponentChoice: opponentsChoice,
      isPlaying: false,
      score: this.updatedScore(prevState.score, result),
      result,
    }))
  }

  getResult = (playerId, opponentId) => {
    if (playerId === opponentId) {
      return 'IT IS DRAW'
    }
    if (
      (playerId === 'PAPER' && opponentId === 'ROCK') ||
      (playerId === 'SCISSORS' && opponentId === 'PAPER') ||
      (playerId === 'ROCK' && opponentId === 'SCISSORS')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  updatedScore = (currentScore, result) => {
    if (result === 'YOU WON') {
      return currentScore + 1
    }
    if (result === 'YOU LOSE') {
      return currentScore - 1
    }
    return currentScore
  }

  playAgain = () => {
    this.setState({
      playersChoice: null,
      opponentChoice: null,
      isPlaying: true,
      result: '',
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <>
        <ImagesList>
          {choicesList.map(Item => (
            <ChoiceButton
              key={Item.id}
              data-testid={`${Item.id.toLowerCase()}Button`}
              onClick={() => this.playGame(Item)}
            >
              <ChoiceImage src={Item.imageUrl} alt={Item.id} />
            </ChoiceButton>
          ))}
        </ImagesList>

        <Popup
          modal
          trigger={<RulesButton type="button">RULES</RulesButton>}
          overlayStyle={overlayStyles}
        >
          {close => (
            <PopUpContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <PopUpImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopUpContainer>
          )}
        </Popup>
      </>
    )
  }

  renderGameResultView = () => {
    const {playersChoice, opponentChoice, result} = this.state

    return (
      <>
        <GameResultContainer>
          <SelectedImageContainer>
            <PersonHeading>YOU</PersonHeading>
            <SelectedImage src={playersChoice.imageUrl} alt="your choice" />
          </SelectedImageContainer>
          <SelectedImageContainer>
            <PersonHeading>OPPONENT</PersonHeading>
            <SelectedImage
              src={opponentChoice.imageUrl}
              alt="opponent choice"
            />
          </SelectedImageContainer>
        </GameResultContainer>
        <PersonHeading>{result}</PersonHeading>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>

        <Popup
          modal
          trigger={<RulesButton type="button">RULES</RulesButton>}
          overlayStyle={overlayStyles}
        >
          {close => (
            <PopUpContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <PopUpImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopUpContainer>
          )}
        </Popup>
      </>
    )
  }

  render() {
    const {score, isPlaying} = this.state
    return (
      <AppContainer>
        <Header score={score} />
        {isPlaying ? this.renderPlayingView() : this.renderGameResultView()}
      </AppContainer>
    )
  }
}

export default RockPaperGame
