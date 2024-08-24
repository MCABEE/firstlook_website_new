import Image from 'next/image';
import React from 'react';
import logo from '../../public/asset/logo_3.png'

const Preloader = () => {
  return (
    <div className="w-full h-full overflow-hidden m-0 p-0 flex justify-center absolute z-10 bg-[#161616] items-center">
      <Image src={logo} alt='preloader_image' className='animate-pulse' />
    </div>
  );
};

export default Preloader;