import styled from 'styled-components'
import NomineeCard from './NomineeCard'

const NomineesGrid = styled.div`
  min-height: 100px;
  width: 100%;
  margin: ${props => props.theme.spacing.baseTight} 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${props => props.theme.spacing.tight};

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Nominees = ({ nominees }) => {

  return(
    <>
      My Nominees:
      <NomineesGrid>
        {nominees.map(movie => {
          return(
            <NomineeCard key={movie.imdbID} movie={movie} />
          )
        })}
      </NomineesGrid>
    </>
  )
}

export default Nominees