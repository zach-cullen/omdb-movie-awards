import styled from 'styled-components'
import SearchResultCard from './SearchResultCard'

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.spacing.baseTight};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const SearchResults = ({ addNominee, nomineeIds, movies }) => {
  const isNominated = movie => {
    return nomineeIds.includes(movie.imdbID)
  }

  return(
    <ResultsGrid>
      { movies.map((movie, i) => {
        return (
          <SearchResultCard 
            key={i} 
            movie={movie}
            addNominee={addNominee}
            isNominated={isNominated(movie)}
          />
        )
      })}
    </ResultsGrid>
  )
}

export default SearchResults