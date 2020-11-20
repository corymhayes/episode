import { motion } from 'framer-motion'


function Loading() {
  return (
    <div style={{ width: '100vw', height: '-webkit-fill-available', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ height: '6rem', width: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{
            fontFamily: 'DM Mono, monospaced',
            fontSize: '4rem',
            color: '#ffd500',
            letterSpacing: '-0.75rem'
          }}
          >
        e
        </h1>
        <motion.div
          animate={{
            // y: [-3, -25, -3, -15, -3, -10, -3, -5, -3]
            y: [ -25, 2, -20, 2, -15, 2, -10, 2, -5, 2, -25 ]
          }}
          transition={{ duration: 1.25, repeat: Infinity }}
          style={{
            fontFamily: 'DM Mono, monospaced',
            fontSize: '4rem',
            color: '#ffd500',
          }}
        >
          .
        </motion.div>
      </div>
    </div>
  )
}

export default Loading