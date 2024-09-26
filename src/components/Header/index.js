import {
  HeaderContainer,
  NamesContainer,
  HeaderTitles,
  ScoreContainer,
  ScoreValue,
  ScoreContent,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <NamesContainer>
        <HeaderTitles>ROCK PAPER SCISSORS</HeaderTitles>
      </NamesContainer>
      <ScoreContainer>
        <p>Score</p>
        <ScoreValue>
          <ScoreContent>{score}</ScoreContent>
        </ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
