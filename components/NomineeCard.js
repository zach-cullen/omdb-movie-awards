import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Heading from './typographic/Heading'
import Body from './typographic/Body'
import { StarOutlineMinor } from '@shopify/polaris-icons';

const CardGrid = styled.div`
  cursor: default;
  display: block;
  box-sizing: border-box;
  border-radius: ${props => props.theme.spacing.extraTight};
  border: solid 1px ${props => props.theme.colors.bg.secondary};
  width: ${props => props.loadFirst ? '100%' : '20%'};
  height: ${props => props.loadFirst ? '100%' : '20%'};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;

  .card-text {
    opacity: ${props => props.loadSecond ? 1 : 0};
    transition: opacity 0.5s;
  }
`

const CardContent = styled.div`
  position: relative;
  padding-top: 150%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
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
  z-index: 100;
  background-image: linear-gradient(${props => props.theme.colors.bg.primary}, transparent);
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.tight};
  word-wrap: break-word;
`

const RemoveButton = styled.div`
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.baseTight};
  background-color: ${props => props.theme.colors.bg.primary};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.bg.secondary};
  }
`

const NomineeCard = ({ movie, removeNomineeById }) => {
  const [loadFirst, setLoadFirst] = useState(false);
  const [loadSecond, setLoadSecond] = useState(false);

  useEffect(() => {
    setLoadFirst(true);
  }, [loadFirst])

  useEffect(() => {
    setTimeout(() => {
      setLoadSecond(true)
    }, 250)
  }, [loadSecond])

  const handleRemoveButtonClick = () => {
    removeNomineeById(movie.imdbID)
  }

  return(
    <CardGrid 
      loadFirst={loadFirst}
      loadSecond={loadSecond}
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
      <RemoveButton
        onClick={handleRemoveButtonClick}
      >
        <Body className='card-text'>
          Remove
        </Body>
      </RemoveButton>
    </CardGrid>
  )
}

export default NomineeCard