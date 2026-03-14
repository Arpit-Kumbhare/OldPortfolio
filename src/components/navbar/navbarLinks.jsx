import { Link } from 'react-scroll';
import { NAV_LINKS } from '../constants';

const NavbarLinks = () => {
  return (
    <ul className='flex text-white gap-6 font-body text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-brown/25 backdrop-blur-lg lg:bg-black sm:w-full py-4'>

      {NAV_LINKS.map((link) => {
        return (
            <li key={link.section} className='group'>
                <Link 
                  to={link.section}
                  smooth={true}
                  offset={-100}
                  spy={true}
                  duration={500}
                  href="#" 
                  className='cursor-pointer text-white hover:text-cyan transition-all duration-500'
                  >
                      {link.link}
                </Link>
                <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        );
      })}
    </ul>
  )
}

export default NavbarLinks
