import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'
import { StarOutlineMinor } from '@shopify/polaris-icons';

const CardGrid = styled.div`
  width: 100%;
  height: 72px;
  border: 1px solid ${props => props.theme.colors.bg.secondary};
  border-radius: ${props => props.theme.spacing.tight};

  &:hover {
    div {
      opacity: 1;
    }
  }
`

const PosterThumb = styled.div`
  width: 54px;
  height: 72px;
  border-radius: inherit;
  background-color: ${props => props.theme.colors.bg.secondary};
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  opacity: 0.75;
  transition: opacity 0.2s;
`

const IconWrapper = styled.div`
  display: block;
  float: left;
  width: 20px;
  fill: ${props => props.theme.colors.text.secondary};
`

const SearchResultCard = ({ movie }) => {
  return(
    <CardGrid>
      <PosterThumb imgUrl={movie.Poster} />
    </CardGrid>
  )
}

export default SearchResultCard