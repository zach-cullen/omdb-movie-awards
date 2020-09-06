import styled from 'styled-components'
import SearchResultCard from './SearchResultCard'

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.spacing.base};
`

const SearchResults = ({ movies }) => (
  <ResultsGrid>
    { movies.map((movie, i) => {
      return (
        <SearchResultCard key={i} movie={movie}/>
      )
    })}
  </ResultsGrid>
)

export default SearchResults