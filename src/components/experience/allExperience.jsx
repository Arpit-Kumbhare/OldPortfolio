import { Fragment } from 'react'
import SingleExperience from './singleExperience'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'motion/react'
import { fadeIn } from '../variants'

const AllExperience = () => {
  const Experiences = [
    {
      company:"Ignaite LLC Pvt Ltd",
      job:"Front-end Development Intern",
      location:"New Jersey, US - Remote",
      startDate:"1 January 2024",
      endDate:"31 June 2024",
      responsibilities:[
          "Co-Lead - Front-End Web Development Team",
          "Designed the UI for web application for SPI (Start-up)",
          "Developed the front-end of SPI collaborating with front-end team",
      ]
    },
    {
      company:"Earntimes Pvt Ltd",
      job:"Full Stack Developer - Intern",
      location:"Bareilly, India - Remote",
      startDate:"4 April 2025",
      endDate:"current",
      responsibilities:[
          "Full Stack Web Developer Intern",
          "Developed landing pages for many web applications",
          "Managed End-to-End project development from planning to deployment",
      ]
    }
  ]

  return (
    <motion.div 
      variants={fadeIn("right",0)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      className='flex lg:flex-row sm:flex-col items-center justify-center gap-4 mt-12'>
      
      
      {Experiences.map((experience, index) => {
        return (
          <Fragment key={experience.company}>
                <SingleExperience
                  company={experience.company}
                  job={experience.job}
                  location={experience.location}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  responsibilities={experience.responsibilities}
                />
                <div className='sm:hidden lg:block'>
                {index < 1 ? <FaArrowRight className='text-white text-7xl'/> : "" }
                </div>
                <div className='sm:block lg:hidden'>
                {index < 1 ? <FaArrowDown className='text-white text-5xl'/> : "" }
                </div>
          </Fragment>
        )
      })}
    </motion.div>
  )
}

export default AllExperience
