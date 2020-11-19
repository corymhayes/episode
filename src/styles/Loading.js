import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1b1b1b;
  `
  
export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 10% 40% 40% 10%;
  grid-gap: 4rem;
  width: 60rem;
  margin-bottom: 6rem;
  margin-left: -15rem;
`

export const Nav = styled.div`
  grid-row: 1;
  grid-column: 1;
  place-self: start end;

  display: grid;
  grid-template-rows: 1fr 1fr;

  .iconStyle {
    color: #fff;
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`

export const IconContainer = styled.div`
  place-self: center end;
`

export const HoverContainer = styled.div`
  place-self: start end;

  h5 {
    font-family: 'DM Mono', monospaced;
    font-size: 1.4rem;
    color: #ffd500;
  }
`

export const Logo = styled.h3`
  grid-row: 1;
  grid-column: 2;
  align-self: end;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
`

export const EpisodeNameTitle = styled.h3`
  grid-row: 2;
  grid-column: 1;
  place-self: start end;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
  writing-mode: sideways-lr;
  letter-spacing: 5px;
  margin-top: 0.5rem;
  `
  
export const EpisodeName = styled(motion.div)`
  grid-row: 2;
  grid-column: 2;

  .skeleton {
    height: 4rem;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.1));
    margin-bottom: 1rem;
  }
`

export const EpisodeOverviewTitle = styled.h3`
  grid-row: 3;
  grid-column: 1;
  place-self: start end;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
  writing-mode: sideways-lr;
  letter-spacing: 5px;
  margin-top: 0.5rem;
`

export const EpisodeOverview = styled.div`
  grid-row: 3;
  grid-column: 2;

  .skeleton {
    height: 2rem;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.25));
    margin-bottom: 1rem;
  }
`

export const SERContainer = styled.div`
  grid-row: 4;
  grid-column: 2;
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
`

export const StatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
`

export const StatNumber = styled.div`
  width: 5rem;
  height: 3.5rem;
  border: 1px solid #efefef;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`