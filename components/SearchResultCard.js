import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'

const CardGrid = styled.div`
  position: relative;
  padding-top: 150%;
  width: 100%;
  background-color: ${props => props.theme.colors.bg.secondary};
  border-radius: ${props => props.theme.spacing.extraTight};
  box-sizing: border-box;
  border: solid 1px ${props => props.theme.colors.bg.secondary};
`

const Poster = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${props => props.theme.colors.bg.primary};
  box-sizing: border-box;
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  opacity: 0.7;
`

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-image: linear-gradient(black, transparent);
  box-sizing: border-box;
  border-radius: inherit;
  padding: ${props => props.theme.spacing.tight};
  word-wrap: break-word;
`

const SearchResultCard = ({ movie }) => {
  return(
    <CardGrid>
      <MovieInfo>
        <Heading>
          {movie.Title}
        </Heading>
        <Body>
          {movie.Year}
        </Body>
      </MovieInfo>
      <Poster imgUrl={movie.Poster} />

    </CardGrid>
  )
}

export default SearchResultCard