import HeroPic from './heroPic'
import HeroText from './heroText'

const HeroMain = () => {
  return (
    <>
        <div className='pt-40 pb-16 sm:px-4 md:px-10 flex md:flex-row lg:flex-row justify-between items-center sm:flex-col'>
        <HeroText />
        <HeroPic />
        </div>
    </>
  )
}

export default HeroMain
