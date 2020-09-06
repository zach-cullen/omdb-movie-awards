import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'
import { StarOutlineMinor } from '@shopify/polaris-icons';

const CardGrid = styled.div`
  cursor: default;
  display: block;
  border-radius: ${props => props.theme.spacing.extraTight};
  border: solid 1px ${props => props.theme.colors.bg.secondary};
  &:hover {
    div {
      opacity: 1;
    }
  }
`

const CardContent = styled.div`
  position: relative;
  padding-top: 150%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  background-color: ${props => props.theme.colors.bg.secondary};
`

const Poster = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-sizing: border-box;
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  opacity: 0.7;
  transition: opacity 0.2s;
`

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-image: linear-gradient(${props => props.theme.colors.bg.primary}, transparent);
  box-sizing: border-box;
  border-radius: inherit;
  padding: ${props => props.theme.spacing.tight};
  word-wrap: break-word;
`

const NominateButton = styled.div`
  cursor: pointer;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.baseTight};
  border-radius: 0 0 4px 4px;
  background-color: ${props => props.theme.colors.bg.primary};
  color: ${props => props.theme.colors.text.secondary};
  text-align: left;
  transition: background-color 0.3s, color 0.2s, fill 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.bg.secondary};
    /* color: ${props => props.theme.colors.text.primary};

    div {
      fill: ${props => props.theme.colors.text.primary};
    } */
  }
`

const InnerButton = styled.div`
  height: 20px;
  width: 100px;
  margin: 0 auto;
  opacity: 0.75;
  transition: opacity 0.2s;

  .button-text {
    display: block;
    float: left;
    padding-left: 8px;
    line-height: 20px;
  }
`

const IconWrapper = styled.div`
  display: block;
  float: left;
  width: 20px;
  fill: ${props => props.theme.colors.text.secondary};
`

const NomineeCard = ({ movie }) => {
  return(
    <CardGrid>
      <CardContent>
        <MovieInfo>
          <Heading>
            {movie.Title}
          </Heading>
          <Body>
            {movie.Year}
          </Body>
        </MovieInfo>
        <Poster imgUrl={movie.Poster} />
      </CardContent>
      <NominateButton>
        <InnerButton>
          <IconWrapper>
            <StarOutlineMinor />
          </IconWrapper>
          <Heading className='button-text'>Nominate</Heading>
        </InnerButton>
      </NominateButton>
    </CardGrid>
  )
}

export default NomineeCard