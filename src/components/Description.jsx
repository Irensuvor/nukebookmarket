import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
        <h2>О нас</h2>
        <motion.div id='div1'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}
        >
          Мы продаем лучшие книги в пустоши!</motion.div>
          <motion.div id='div3'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
            <motion.img
            src='img/nukecola.png'
            className='ball'
            width={200}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileHover={{
              scale:1.5,
              transition:{
                duration:2
              }
            }}/>

          </motion.div>
    </div>
  )
}

export default Description