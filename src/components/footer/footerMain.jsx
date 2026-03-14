import { Link } from 'react-scroll';
import { NAV_LINKS } from '../constants';

const FooterMain = () => {

  return (
    <div className='mt-8 mb-4'>

        <div className='h-[2px] w-auto mx-16 bg-lightGrey' />

        <div className='flex sm:flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto mt-6 sm:px-20'>
            <p className='text-white sm:text-2xl md:text-4xl font-bold font-body'>Arpit Kumbhare</p>
            <ul className=' flex-row gap-4 sm:hidden md:flex'>
                    {NAV_LINKS.map((link) => {
                        return (
                          <li 
                            key={link.section}
                            className='text-lightGrey font-body '>
                                <Link 
                                    href="#"
                                    to={link.section}
                                    smooth={true}
                                    offset={-130}
                                    spy={true}
                                    duration={500}
                                    
                                >
                                        {link.link}
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>

        <p className='text-lg text-lightOrange mx-auto text-center'>Thank you for visiting!</p>
    </div>
   
  )
}

export default FooterMain
