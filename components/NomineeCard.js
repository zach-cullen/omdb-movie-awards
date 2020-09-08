import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'
import { CancelSmallMinor, HorizontalDotsMinor } from '@shopify/polaris-icons';

const CardGrid = styled.div`
  cursor: default;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
  border-radius: ${props => props.theme.spacing.extraTight};
  border: solid 1px ${props => props.theme.colors.bg.secondary};
  width: ${props => props.loadFirst ? '100%' : '0%'};
  height: ${props => props.loadFirst ? '100%' : '0%'};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;

  .card-text {
    opacity: ${props => props.loadSecond ? 1 : 0};
    transition: ${props => props.unMount ? '' : 'opacity 0.5s'};
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
  box-sizing: border-box;
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  transition: opacity 0.2s;
`

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(${props => props.theme.colors.bg.primary}, transparent);
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.tight};
  text-align: left;
  word-wrap: break-word;
`

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ImdbLink = styled.div`
  div {
    float: left;
  }
`

const RemoveButton = styled.div`
  div {
    float: right;
  }
`

const IconWrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: ${props => props.theme.spacing.tight};
  background-color: ${props => props.theme.colors.bg.primary};
  fill: ${props => props.theme.colors.text.secondary};
  transition: background-color 0.2s, fill 0.2s; 

  &:hover {
    fill: ${props => props.theme.colors.text.primary};
  }
`

const NomineeCard = ({ movie, removeNomineeById }) => {
  const [loadFirst, setLoadFirst] = useState(false);
  const [loadSecond, setLoadSecond] = useState(false);
  const [unMount, setUnmount] = useState(false);

  useEffect(() => {
    setLoadFirst(true);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoadSecond(true)
    }, 250)
  }, [])

  const handleRemoveButtonClick = () => {
    // initiate css transitions
    setUnmount(true)
    setLoadFirst(false)
    setLoadSecond(false)
    // delete component after animations have time to execute
    setTimeout(() => {
      removeNomineeById(movie.imdbID)
    }, 300)
  }

  return(
    <CardGrid 
      loadFirst={loadFirst}
      loadSecond={loadSecond}
      unMount={unMount}
    >
      <CardContent>
        <MovieInfo>
          <Heading className='card-text'>
            {movie.Title}
          </Heading>
          <Body className='card-text'>
            {movie.Year}
          </Body>
        </MovieInfo>
        <Poster imgUrl={movie.Poster} />
      </CardContent>
      <ButtonsContainer>
        <ImdbLink>
          <IconWrapper>
            <HorizontalDotsMinor />
          </IconWrapper>
        </ImdbLink>
        <RemoveButton
          onClick={handleRemoveButtonClick}
        >
          <IconWrapper>
            <CancelSmallMinor />
          </IconWrapper>
        </RemoveButton>
      </ButtonsContainer>
    </CardGrid>
  )
}

export default NomineeCard