import { motion } from 'framer-motion'
import { BiArrowBack, BiRefresh } from 'react-icons/bi'
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
} from '../styles/Loading'


function Loading() {
  return (
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
            <div style={{ position: 'absolute', width: '45rem', height: '4rem', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '35rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <div style={{ position: 'absolute', width: '35rem', height: '4rem', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '25rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
          </EpisodeName>
          
          <EpisodeOverviewTitle>overview</EpisodeOverviewTitle>
          <EpisodeOverview>
            <div style={{ position: 'absolute', width: '45rem', height: '2rem', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '35rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <div style={{ position: 'absolute', width: '38rem', height: '2rem', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '28rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <div style={{ position: 'absolute', width: '42rem', height: '2rem', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '32rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <div style={{ position: 'absolute', width: '40rem', height: '2rem', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '30rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
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
  )
}

export default Loading