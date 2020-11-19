import React, { useContext, useState } from 'react'
import { PositionDispatchContext } from '../context/PositionProvider'
import { DataDispatchContext, DataContext } from '../context/DataProvider'
import { LoadingContext, LoadingDispatchContext } from '../context/LoadingProvider'
import { BiArrowBack, BiRefresh } from 'react-icons/bi'
import { BrowserView, MobileView } from 'react-device-detect'

import Loading from './Loading'

import { 
  Container, 
  DetailsContainer, 
  Nav,
  Logo,
  EpisodeNameTitle,
  EpisodeName, 
  EpisodeOverviewTitle,
  EpisodeOverview,
  HoverContainer,
  IconContainer,
  SERContainer,
  StatContainer,
  StatNumber,
  MobileContainer,
  MobileDetailsContainer,
  MobileIconContainer,
  MobileNav,
  MobileEpisodeName,
  MobileEpisodeNameTitle,
  MobileEpisodeOverview,
  MobileEpisodeOverviewTitle,
  MobileLogo,
  MobileSERContainer
} from '../styles/Show'


function Show() {
  const setPosition = useContext(PositionDispatchContext)
  const setData = useContext(DataDispatchContext)
  const setLoading = useContext(LoadingDispatchContext)

  const data = useContext(DataContext)
  const loading = useContext(LoadingContext)

  let [backArrow, triggerBackArrow] = useState(false)
  let [refresh, triggerRefresh] = useState(false)

  const reloadData = async () => {
    setLoading(true)
    triggerRefresh(false)
    const showRes = await fetch(`../../.netlify/functions/showFetch?show=${data.show_name}`)
    const showJSON = await showRes.json()
    setData(showJSON)
    setLoading(false)
  }

  return (
    loading ? 
      <Loading />
      :
      <>
      <BrowserView>
        <Container>
          <DetailsContainer>
            <Nav>
              <HoverContainer>
                { backArrow && <h5>search again</h5>}
                { refresh && <h5>new episode</h5>}
              </HoverContainer>
              
              <IconContainer>
                <BiArrowBack className="iconStyle" onMouseEnter={() => triggerBackArrow(true)} onMouseLeave={() => triggerBackArrow(false)} onClick={() => setPosition(0)} />
                <BiRefresh className="iconStyle" onMouseEnter={() => triggerRefresh(true)} onMouseLeave={() => triggerRefresh(false)} onClick={() => reloadData()} />
              </IconContainer>
            </Nav>
            
            <Logo>episode.</Logo>
            <SERContainer>
              <StatContainer>
                S <StatNumber>{data.season_number}</StatNumber>
              </StatContainer>
              
              <StatContainer>
                E <StatNumber>{data.episode_number}</StatNumber>
              </StatContainer>
              
              <StatContainer>
                R <StatNumber>{data.vote_average && data.vote_average.toFixed(1)}</StatNumber>
              </StatContainer>
            </SERContainer>
            <EpisodeNameTitle>title</EpisodeNameTitle>
            <EpisodeName>{data.name}</EpisodeName>
            
            <EpisodeOverviewTitle>overview</EpisodeOverviewTitle>
            <EpisodeOverview>
              {data.overview}
            </EpisodeOverview>

   
          </DetailsContainer>
        </Container>
      </BrowserView>


      <MobileView>
        <MobileContainer>
          <MobileDetailsContainer>            
            <MobileNav>
              <MobileIconContainer>
                <BiArrowBack className="iconStyle" onMouseEnter={() => triggerBackArrow(true)} onMouseLeave={() => triggerBackArrow(false)} onClick={() => setPosition(0)} />
                <BiRefresh className="iconStyle" onMouseEnter={() => triggerRefresh(true)} onMouseLeave={() => triggerRefresh(false)} onClick={() => reloadData()} />
              </MobileIconContainer>

              <MobileLogo>episode.</MobileLogo>
            </MobileNav>

            <MobileEpisodeNameTitle>title</MobileEpisodeNameTitle>
            <MobileEpisodeName>{data.name}</MobileEpisodeName>

            <MobileEpisodeOverviewTitle>overview</MobileEpisodeOverviewTitle>
            <MobileEpisodeOverview>
              {data.overview}              
            </MobileEpisodeOverview>

            <MobileSERContainer>
              <StatContainer>
                S <StatNumber>{data.season_number}</StatNumber>
              </StatContainer>
              
              <StatContainer>
                E <StatNumber>{data.episode_number}</StatNumber>
              </StatContainer>
              
              <StatContainer>
                R <StatNumber>{data.vote_average && data.vote_average.toFixed(1)}</StatNumber>
              </StatContainer>
            </MobileSERContainer>
          </MobileDetailsContainer>
        </MobileContainer>
      </MobileView>
     </>
  )
}

export default Show