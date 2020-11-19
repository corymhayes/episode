import { BiArrowBack, BiRefresh } from 'react-icons/bi'
import { BrowserView, MobileView } from 'react-device-detect'
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
  MobileNav,
  MobileIconContainer,
  MobileLogo,
  MobileEpisodeNameTitle,
  MobileEpisodeName,
  MobileEpisodeOverviewTitle,
  MobileEpisodeOverview,
  MobileSERContainer
} from '../styles/Loading'


function Loading() {
  return (
    <>
      <BrowserView>
        <Container>
          <DetailsContainer>
            <Nav>
              <HoverContainer />
              
              <IconContainer>
                <BiArrowBack className="iconStyle" />
                <BiRefresh className="iconStyle" />
              </IconContainer>
            </Nav>
            
            <Logo>episode.</Logo>

            <EpisodeNameTitle>title</EpisodeNameTitle>
            <EpisodeName>
              <div className="skeleton" />
              <div className="skeleton" />
            </EpisodeName>
            
            <EpisodeOverviewTitle>overview</EpisodeOverviewTitle>
            <EpisodeOverview>
              <div className="skeleton" />
              <div className="skeleton" />
              <div className="skeleton" />
              <div className="skeleton" />
              <div className="skeleton" />
            </EpisodeOverview>
            
            <SERContainer>
              <StatContainer>
                S <StatNumber>0</StatNumber>
              </StatContainer>
              
              <StatContainer>
                E <StatNumber>0</StatNumber>
              </StatContainer>
              
              <StatContainer>
                R <StatNumber>0</StatNumber>
              </StatContainer>
            </SERContainer>
          </DetailsContainer>
        </Container>
      </BrowserView>

      <MobileView>
        <MobileContainer>
          <MobileDetailsContainer>
            <MobileNav>
              <MobileIconContainer>
                <BiArrowBack className="iconStyle" />
                <BiRefresh className="iconStyle" />
              </MobileIconContainer>
              <MobileLogo>episode.</MobileLogo>
            </MobileNav>

            <MobileEpisodeNameTitle>title</MobileEpisodeNameTitle>
            <MobileEpisodeName>
              <div className="skeleton" />
              <div className="skeleton" />
            </MobileEpisodeName>
            
            <MobileEpisodeOverviewTitle>overview</MobileEpisodeOverviewTitle>
            <MobileEpisodeOverview>
              <div className="skeleton" />
              <div className="skeleton" />
              <div className="skeleton" />
              <div className="skeleton" />
            </MobileEpisodeOverview>
            
            <MobileSERContainer>
              <StatContainer>
                S <StatNumber>0</StatNumber>
              </StatContainer>
              
              <StatContainer>
                E <StatNumber>0</StatNumber>
              </StatContainer>
              
              <StatContainer>
                R <StatNumber>0</StatNumber>
              </StatContainer>
            </MobileSERContainer>
          </MobileDetailsContainer>
        </MobileContainer>
      </MobileView>
    </>
  )
}

export default Loading




/*

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


*/