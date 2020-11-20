import styled from 'styled-components'

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
  
export const EpisodeName = styled.h1`
  grid-row: 3;
  grid-column: 2;
  font-family: 'DM Mono', monospaced;
  font-size: 4.8rem;
  line-height: 5.5rem;
  font-style: italic;
  color: #efefef;
`

export const EpisodeOverviewTitle = styled.h3`
  grid-row: 4;
  grid-column: 1;
  place-self: start end;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
  writing-mode: sideways-lr;
  letter-spacing: 5px;
  margin-top: 0.5rem;
`

export const EpisodeOverview = styled.p`
  grid-row: 4;
  grid-column: 2;
  font-family: 'DM Mono', monospaced;
  font-size: 2rem;
  font-weight: 300;
  color: #efefef;
`

export const SERContainer = styled.div`
  grid-row: 2;
  grid-column: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StatContainer = styled.div`
  display: flex;
  flex-flow: column;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 0.5rem;
`











export const MobileContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  padding: 0 2rem;
`

export const MobileNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  .iconStyle {
    color: #fff;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`

export const MobileLogo = styled.h5`
  font-size: 1.6rem;
  font-family: 'DM Mono', monospaced;
  color: #1b1b1b;
  background-color: #ffd500;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .dot {
    margin-left: -1px;
    align-self: flex-start;
  }
`

export const MobileSERContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 4rem 0;
`

export const MobileStatContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: 'DM Mono', monospaced;
  font-size: 1.4rem;
  color: #ffd500;
`

export const MobileStatNumber = styled.div`
  width: 6rem;
  height: 6rem;
  margin-top: 0.5rem;
  border: 1px solid #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`

export const MobileDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 4rem;
  width: 100vw;
  height: -webkit-fill-available;
  place-items: start;
  padding: 0 1rem;
`

export const MobileEpisodeNameTitle = styled.h3`
  grid-row: 1;
  grid-column: 1;
  place-self: start center;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
  -webkit-tranform: rotate(-90deg);
  -moz-tranform: rotate(-90deg);
  transform: rotate(-90deg);
  letter-spacing: 5px;
  margin-top: 3rem;
  margin-left: -2rem;
  `
  
export const MobileEpisodeName = styled.h1`
  grid-row: 1;
  grid-column: 2;
  font-family: 'DM Mono', monospaced;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 4rem;
  font-style: italic;
  color: #efefef;
  
`

export const MobileEpisodeOverviewTitle = styled.h3`
  grid-row: 2;
  grid-column: 1;
  place-self: start center;
  font-family: 'DM Mono', monospaced;
  font-size: 1.6rem;
  color: #ffd500;
  letter-spacing: 5px;
  -webkit-tranform: rotate(-90deg);
  -moz-tranform: rotate(-90deg);
  transform: rotate(-90deg);
  margin-top: 5rem;
  margin-left: -2rem;
`

export const MobileEpisodeOverview = styled.p`
  grid-row: 2;
  grid-column: 2;
  font-family: 'DM Mono', monospaced;
  font-size: 2rem;
  font-weight: 300;
  color: #efefef;
`