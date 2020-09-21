import styled from 'styled-components'
import NomineeCard from './NomineeCard'
import Display from './typographic/Display'
import SubHeading from './typographic/SubHeading'

const NomineesContainer = styled.div`
  text-align: center;
  display: ${props => props.nomineeCount === 0 ? 'none' : 'block'};

  h2 {
    color: ${props => props.nomineeCount === 5 ? props.theme.colors.brand.primary : 'white'};
    transition: color 0.2s;
  }
`

const NomineesGrid = styled.div`
  min-height: 150px;
  width: 100%;
  margin-top: ${props => props.theme.spacing.extraLoose};
  margin-bottom: ${props => props.theme.spacing.extraLoose};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${props => props.theme.spacing.baseTight};

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Nominees = ({ nomineeCount, nominees, removeNomineeById }) => {
  return(
    <NomineesContainer nomineeCount={nomineeCount}>
      <Display 
        size='large' 
        nomineeCount={nomineeCount}
      >
        {nomineeCount === 5 ? 'Selection Complete' : 'My Nominees'}
      </Display>
      <NomineesGrid>
        {nominees.map(movie => {
          return(
            <NomineeCard 
              key={movie.imdbID}
              movie={movie}
              removeNomineeById={removeNomineeById}
            />
          )
        })}
      </NomineesGrid>
    </NomineesContainer>
  )
}

export default Nominees