import styled from 'styled-components'
import Display from './typographic/Display'
import SubHeading from './typographic/SubHeading'

const CardGrid = styled.div`
  wdith: 100%;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: ${props => props.theme.spacing.base};
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.baseTight};
  background-color: ${props => props.theme.colors.bg.secondary};
  border-radius: ${props => props.theme.spacing.tight};
  margin-bottom: ${props => props.theme.spacing.base};
`

const Poster = styled.div`
  height: 90px;
  width: 60px;
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
        <Display size='small'>
          {movie.Title}
        </Display>
        <SubHeading>
          Year: {movie.Year}
        </SubHeading>
      </MovieInfo>
    </CardGrid>
  )
}

export default SearchResultCard