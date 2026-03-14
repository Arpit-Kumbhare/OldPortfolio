import { motion } from 'motion/react'
import { fadeIn } from '../variants'
import heroImage from '../../assets/images/HeroImage.png'

const HeroPic = () => {
  return (
    <div className='md:mr-[5rem]'>
      <motion.img
        variants={fadeIn("left",0)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0}}
        src={heroImage} alt="Arpit Kumbhare" className='max-w-[450px] h-auto'/>
    </div>
  )
}

export default HeroPic
