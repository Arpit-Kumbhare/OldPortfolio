import { motion } from 'motion/react'
import { fadeIn } from '../variants'
import aboutMeImg from '../../assets/images/aboutMeImage.png'

const AboutMeImage = () => {
  return (
    <motion.div 
      variants={fadeIn("right",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='md:pr-4 md:pt-5 md:pl-14'>
      <img src={aboutMeImg} alt="development technologies" className='md:h-[470px] sm:h-[350px] w-auto'/>
    </motion.div>
  )
}

export default AboutMeImage
