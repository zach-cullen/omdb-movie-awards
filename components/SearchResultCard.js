import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'

const CardGrid = styled.div`
  cursor: pointer;
  display: block;
  border-radius: ${props => props.theme.spacing.extraTight};
  border: solid 1px ${props => props.theme.colors.bg.secondary};
  &:hover {
    div {
      opacity: 1;
    }
  }
`

const CardContent = styled.div`
  position: relative;
  padding-top: 150%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  background-color: ${props => props.theme.colors.bg.secondary};
`

const Poster = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-sizing: border-box;
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  opacity: 0.7;
  transition: opacity 0.2s;
`

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-image: linear-gradient(${props => props.theme.colors.bg.primary}, transparent);
  box-sizing: border-box;
  border-radius: inherit;
  padding: ${props => props.theme.spacing.tight};
  word-wrap: break-word;
`

const NominateButton = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.tight};
  border-radius: 0 0 4px 4px;
  background-color: ${props => props.theme.colors.bg.primary};
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
`

const SearchResultCard = ({ movie }) => {
  return(
    <CardGrid>
      <CardContent>
        <MovieInfo>
          <Heading>
            {movie.Title}
          </Heading>
          <Body>
            {movie.Year}
          </Body>
        </MovieInfo>
        <Poster imgUrl={movie.Poster} />
      </CardContent>
      <NominateButton>
        <Heading>Nominate</Heading>
      </NominateButton>
    </CardGrid>
  )
}

export default SearchResultCard