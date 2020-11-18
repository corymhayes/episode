import { useContext } from 'react'
import { motion } from 'framer-motion'

import { PositionContext } from './context/PositionProvider'
import Home from './pages/Home'
import Show from './pages/Show'

function App() {
  const position = useContext(PositionContext)

  return (
    <motion.div 
      inital={{ x: 0 }}
      animate={{ x: position }}
      transition={{ duration: 0.5 }}
      style={{ 
        width: '200vw',
        height: '-webkit-fill-available', 
        display: 'flex',
      }}
    >
        <Home />
        <Show />
    </motion.div>
  )
}

export default App