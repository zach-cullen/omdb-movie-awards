import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'

const CardGrid = styled.div`
  background-color: ${props => props.theme.colors.bg.secondary};
  border-radius: ${props => props.theme.spacing.tight};
`

const Poster = styled.div`
  padding-top: 150%;
  width: 100%;
  border-radius: inherit;
  background-color: ${props => props.theme.colors.bg.primary};
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
`

const MovieInfo = styled.div`

`

const SearchResultCard = ({ movie }) => {
  return(
    <CardGrid>
      <Poster imgUrl={movie.Poster} />
      <MovieInfo>
        <Heading>
          {movie.Title}
        </Heading>
        <Body>
          Year: {movie.Year}
        </Body>
      </MovieInfo>
    </CardGrid>
  )
}

export default SearchResultCard