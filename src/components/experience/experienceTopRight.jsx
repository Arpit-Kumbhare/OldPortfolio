import { motion } from 'motion/react'
import { fadeIn } from '../variants'
import experienceImg from '../../assets/images/experienceImage.png'

const ExperienceTopRight = () => {
  return (
    <motion.div
      variants={fadeIn("left",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
    >
      <img src={experienceImg} alt="experience image" className='sm:max-w-[300px] md:max-w-[400px]'/>
    </motion.div>
  )
}

export default ExperienceTopRight
