import { useRef } from 'react'
import styled from 'styled-components'
import { SearchMinor, ResetMinor } from '@shopify/polaris-icons'

const SearchBar = styled.div`
  height: 36px;
  /* max-width: 480px; */
  display: grid;
  overflow: hidden;
  grid-template-columns: 36px 1fr 36px;
  border-radius: ${props => props.theme.spacing.tight};
  background-color: ${props => props.theme.colors.bg.secondary};
  margin: ${props => props.theme.spacing.base} 0;
`

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 8px;
  fill: ${props => props.theme.colors.text.primary};

  .button-icon {
    cursor: pointer;
    fill: ${props => props.theme.colors.text.secondary};
    transition: fill 0.2s;

    &:hover {
      fill: ${props => props.theme.colors.text.primary};
    }
  }
`

const StyledInput = styled.input`
  display: block;
  height: 36px;
  width: 100%;
  margin-left: ${props => props.theme.spacing.tight};
  font-size: 16px;
  background-color: inherit;
`

const SearchForm = ({ handleSearchChange, resetSearchTerms, searchTerms }) => {
  const searchFieldRef = useRef(null)

  const handleResetClick = () => {
    resetSearchTerms()
  }

  return(
    <SearchBar>
      <IconWrapper>
        <SearchMinor />
      </IconWrapper>
      <StyledInput
        placeholder='Enter a movie title' 
        onChange={handleSearchChange} 
        value={searchTerms} 
      />
      <IconWrapper>
        <ResetMinor 
          className='button-icon'
          onClick={handleResetClick}
        />
      </IconWrapper>
    </SearchBar>
  )
}

export default SearchForm