import styled from 'styled-components'

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.tight};
  width: 100%;
  margin: ${props => props.theme.spacing.baseTight} 0;
  border-radius: ${props => props.theme.spacing.extraTight};
  background-color: ${props => props.theme.colors.bg.secondary};
`

const SearchForm = ({ handleSearchChange, searchTerms }) => {
  return(
    <StyledInput
      placeholder='Enter a movie title' 
      onChange={handleSearchChange} 
      value={searchTerms} 
    />
  )
}

export default SearchForm