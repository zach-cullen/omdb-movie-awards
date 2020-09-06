import styled from 'styled-components'
import SubHeading from './typographic/SubHeading'
import Body from './typographic/Body'
import { StarOutlineMinor } from '@shopify/polaris-icons';

const CardGrid = styled.div`
  width: 100%;
  /* height: 72px; */
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: ${props => props.theme.spacing.baseTight};
  border: 1px solid ${props => props.theme.colors.bg.secondary};
  border-radius: ${props => props.theme.spacing.tight};

  &:hover {
    div {
      opacity: 1;
    }
  }
`

const PosterThumb = styled.div`
  width: 48px;
  height: 100%;
  min-height: 72px;
  border-radius: inherit;
  background-color: ${props => props.theme.colors.bg.secondary};
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  transition: opacity 0.2s;
`

const MovieInfo = styled.div`
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.tight};
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
      <MovieInfo>
        <Body>{movie.Title}</Body>
        <SubHeading>{movie.Year}</SubHeading>
      </MovieInfo>
    </CardGrid>
  )
}

export default SearchResultCard