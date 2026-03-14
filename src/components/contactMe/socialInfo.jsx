const SocialInfo = ({handle, Ico, url}) => {
  return (
    <div className='group relative rounded-full h-[5rem] w-[5rem] flex justify-center items-center border-[1px] border-lightGrey hover:scale-105 transition-all duration-500'>
      <a href={url} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
        <Ico className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-4xl absolute"/>
        <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-[10px] text-center'>{handle}</p>
      </a>
    </div>
  ) 
}

export default SocialInfo
