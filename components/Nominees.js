import styled from 'styled-components'
import NomineeCard from './NomineeCard'
import Display from './typographic/Display'

const NomineesGrid = styled.div`
  min-height: 100px;
  width: 100%;
  margin-top: ${props => props.theme.spacing.loose};
  margin-bottom: ${props => props.theme.spacing.extraLoose};
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
      <Display size='medium'>
        My Nominees:
      </Display>
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