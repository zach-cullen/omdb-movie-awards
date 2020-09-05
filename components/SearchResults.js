import styled from 'styled-components'
import SearchResultCard from './SearchResultCard'

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${props => props.theme.spacing.loose};
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