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
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '45rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '40rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
          </EpisodeName>
          
          <EpisodeOverviewTitle>overview</EpisodeOverviewTitle>
          <EpisodeOverview>
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '45rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '43rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '38rem', opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="skeleton" 
              style={{ width: '10rem' }} 
            />
            <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: '40rem', opacity: 0 }}
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