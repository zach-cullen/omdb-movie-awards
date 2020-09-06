import styled from 'styled-components'
import SubHeading from './typographic/SubHeading'
import Body from './typographic/Body'
import { StarOutlineMinor } from '@shopify/polaris-icons';

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr min-content;
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

const NominateButton = styled.div`
  width: 36px;
  height: 36px;
  border-left: solid 1px ${props => props.theme.colors.bg.secondary};
  border-bottom: solid 1px ${props => props.theme.colors.bg.secondary};
  border-bottom-left-radius: inherit;
`

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin: 8px auto;
  fill: ${props => props.theme.colors.bg.secondary};
`

const SearchResultCard = ({ movie }) => {
  return(
    <CardGrid>
      <PosterThumb imgUrl={movie.Poster} />
      <MovieInfo>
        <Body>{movie.Title}</Body>
        <SubHeading>{movie.Year}</SubHeading>
      </MovieInfo>
      <NominateButton>
        <IconWrapper>
          <StarOutlineMinor />
        </IconWrapper>
      </NominateButton>
    </CardGrid>
  )
}

export default SearchResultCard