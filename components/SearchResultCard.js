import styled from 'styled-components'

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
`

const MovieInfo = styled.div`

`

const SearchResultCard = ({ movie }) => {
  return(
    <CardGrid>
      <Poster />
      <MovieInfo>
        {movie.Title + ' (' + movie.Year + ')'}
      </MovieInfo>
    </CardGrid>
  )
}

export default SearchResultCard