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

            <MobileEpisodeNameTitle>title</MobileEpisodeNameTitle>
            <MobileEpisodeName>
              <div className="skeleton" style={{ width: '28rem' }} />
              <div className="skeleton" style={{ width: '25rem' }} />
            </MobileEpisodeName>
            
            <MobileEpisodeOverviewTitle>overview</MobileEpisodeOverviewTitle>
            <MobileEpisodeOverview>
              <div className="skeleton" style={{ width: '28rem' }} />
              <div className="skeleton" style={{ width: '23rem' }} />
              <div className="skeleton" style={{ width: '25rem' }} />
              <div className="skeleton" style={{ width: '20rem' }} />
            </MobileEpisodeOverview>
          </MobileDetailsContainer>
        </MobileContainer>
      </MobileView>
    </>
  )
}

export default Loading