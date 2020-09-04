import styled from 'styled-components'

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
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