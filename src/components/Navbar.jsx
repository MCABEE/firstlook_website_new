import Image from 'next/image'
import logo from '../../public/asset/fs_logo.png'

const Navbar = () => {
    return (
        <>
            <div className='md:block hidden'>
                <div className='px-14 flex'>
                    <Image className='h-[40px] w-[28px]' width={100} src={logo} alt="logo" />
                    <div className='flex justify-center items-center w-full gap-20'>
                        <p>
                            How it works
                        </p>
                        <p>
                            Stories
                        </p>
                        <p>
                            Purchase
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <button className='flex items-center bg-[#FE1940] px-5 py-3 text-white rounded-3xl gap-4'>
                            Download
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='md:hidden block sticky'>
                <div className='w-screen px-5 flex'>
                    <Image className='h-[30px] w-[18px]' width={100} src={logo} alt="logo" />
                    
                    <div className='flex justify-end w-screen items-center'>
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H19" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M1 7.13672H19" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M1 13.2725H19" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar