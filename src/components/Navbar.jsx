"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"
import logo from '../../public/asset/logo_1.png';


const Navbar = ({ fontcolor }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bgColor, setBgColor] = useState('transparent');
    const [fColor, setFColor] = useState(fontcolor);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollPercent = (scrollPosition / windowHeight) * 100;

            if (scrollPercent > 10) {
                setBgColor('white');
                setFColor('black');
            } else {
                setBgColor('transparent');
                setFColor(fontcolor);
            }

            if (scrollPosition > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollTop(scrollPosition <= 0 ? 0 : scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, fontcolor]);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/pageunderconstruction', label: 'How it works' },
        { href: '/membershippolicy', label: 'Policy' },
        { href: '/helpcenter', label: 'Support' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];
    const filteredLinks = links.slice(1);

    return (
        <nav
            className={`fixed top-0 w-full z-10 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} bg-${bgColor}`}
        >
            <div className='md:block hidden m-5'>
                <div className='px-14 flex justify-between'>
                    <Link href='/'>
                        <Image className='h-[40px] w-[28px] cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110' src={logo} alt="logo" />
                    </Link>
                    <div className='flex justify-end'>
                        <div className={`flex justify-center text-xl text-${fColor} items-center w-full gap-10 mx-10`}>
                            {filteredLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className='cursor-pointer font-semibold transform transition-transform duration-100 ease-in-out hover:scale-110'
                                >
                                    <motion.p
                                        initial={{ y: "3vw", opacity: 0 }}
                                        whileInView={{
                                            y: 0,
                                            opacity: 1,
                                            transition: { type: "spring", stiffness: 50, delay: 0.25 + index * 0.1 }
                                        }}
                                        viewport={{ once: true, amount: 0.8 }}
                                    >
                                        {link.label}
                                    </motion.p>
                                </Link>
                            ))}
                        </div>
                        <Link href='/download'>
                            <button className='flex items-center font-semibold bg-[#FE1940] px-8 py-3 text-lg text-white rounded-3xl gap-4 cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-105'>
                                Download
                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="white" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {isOpen ?
                <div className='md:hidden block bg-white'>
                    <div className={`h-screen transition-all duration-500 ease-out ${isOpen ? "right-0" : "-right-[120vw]"}`}>
                        <div className='flex w-screen justify-between items-end p-4'>
                            <div className='flex justify-center '>
                                <Link onClick={() => { setIsOpen(false) }} href='/'>
                                    <div className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110'>
                                        <svg width="174" height="33" viewBox="0 0 174 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.22852 32H0.760742V10.584H13.0361V14.3047H5.22852V19.8271H12.4941V23.5332H5.22852V32ZM17.2256 32V10.584H21.7666V32H17.2256ZM31.6982 20.0908H33.1631C34.5986 20.0908 35.6582 19.8516 36.3418 19.373C37.0254 18.8945 37.3672 18.1426 37.3672 17.1172C37.3672 16.1016 37.0156 15.3789 36.3125 14.9492C35.6191 14.5195 34.54 14.3047 33.0752 14.3047H31.6982V20.0908ZM31.6982 23.7822V32H27.1572V10.584H33.3975C36.3076 10.584 38.4609 11.1162 39.8574 12.1807C41.2539 13.2354 41.9521 14.8418 41.9521 17C41.9521 18.2598 41.6055 19.3828 40.9121 20.3691C40.2188 21.3457 39.2373 22.1123 37.9678 22.6689C41.1904 27.4834 43.29 30.5938 44.2666 32H39.2275L34.1152 23.7822H31.6982ZM59.6035 26.0527C59.6035 27.9863 58.9053 29.5098 57.5088 30.623C56.1221 31.7363 54.1885 32.293 51.708 32.293C49.4229 32.293 47.4014 31.8633 45.6436 31.0039V26.7852C47.0889 27.4297 48.3096 27.8838 49.3057 28.1475C50.3115 28.4111 51.2295 28.543 52.0596 28.543C53.0557 28.543 53.8174 28.3525 54.3447 27.9717C54.8818 27.5908 55.1504 27.0244 55.1504 26.2725C55.1504 25.8525 55.0332 25.4814 54.7988 25.1592C54.5645 24.8271 54.2178 24.5098 53.7588 24.207C53.3096 23.9043 52.3867 23.4209 50.9902 22.7568C49.6816 22.1416 48.7002 21.5508 48.0459 20.9844C47.3916 20.418 46.8691 19.7588 46.4785 19.0068C46.0879 18.2549 45.8926 17.376 45.8926 16.3701C45.8926 14.4756 46.5322 12.9863 47.8115 11.9023C49.1006 10.8184 50.8779 10.2764 53.1436 10.2764C54.2568 10.2764 55.3164 10.4082 56.3223 10.6719C57.3379 10.9355 58.3975 11.3066 59.501 11.7852L58.0361 15.3154C56.8936 14.8467 55.9463 14.5195 55.1943 14.334C54.4521 14.1484 53.7197 14.0557 52.9971 14.0557C52.1377 14.0557 51.4785 14.2559 51.0195 14.6562C50.5605 15.0566 50.3311 15.5791 50.3311 16.2236C50.3311 16.624 50.4238 16.9756 50.6094 17.2783C50.7949 17.5713 51.0879 17.8594 51.4883 18.1426C51.8984 18.416 52.8604 18.9141 54.374 19.6367C56.376 20.5938 57.748 21.5557 58.4902 22.5225C59.2324 23.4795 59.6035 24.6562 59.6035 26.0527ZM71.7471 32H67.2061V14.3633H61.3906V10.584H77.5625V14.3633H71.7471V32Z" fill="#FE1940" />
                                            <path d="M81.1074 32V10.584H83.5977V29.7441H93.0459V32H81.1074ZM115.282 21.2627C115.282 24.6904 114.413 27.3857 112.675 29.3486C110.946 31.3115 108.539 32.293 105.453 32.293C102.299 32.293 99.8623 31.3311 98.1436 29.4072C96.4346 27.4736 95.5801 24.749 95.5801 21.2334C95.5801 17.7471 96.4395 15.0469 98.1582 13.1328C99.877 11.209 102.318 10.2471 105.482 10.2471C108.559 10.2471 110.961 11.2236 112.689 13.1768C114.418 15.1299 115.282 17.8252 115.282 21.2627ZM98.2168 21.2627C98.2168 24.1631 98.832 26.3652 100.062 27.8691C101.303 29.3633 103.1 30.1104 105.453 30.1104C107.826 30.1104 109.618 29.3633 110.829 27.8691C112.04 26.375 112.646 24.1729 112.646 21.2627C112.646 18.3818 112.04 16.1992 110.829 14.7148C109.628 13.2207 107.846 12.4736 105.482 12.4736C103.109 12.4736 101.303 13.2256 100.062 14.7295C98.832 16.2236 98.2168 18.4014 98.2168 21.2627ZM138.661 21.2627C138.661 24.6904 137.792 27.3857 136.054 29.3486C134.325 31.3115 131.918 32.293 128.832 32.293C125.678 32.293 123.241 31.3311 121.522 29.4072C119.813 27.4736 118.959 24.749 118.959 21.2334C118.959 17.7471 119.818 15.0469 121.537 13.1328C123.256 11.209 125.697 10.2471 128.861 10.2471C131.938 10.2471 134.34 11.2236 136.068 13.1768C137.797 15.1299 138.661 17.8252 138.661 21.2627ZM121.596 21.2627C121.596 24.1631 122.211 26.3652 123.441 27.8691C124.682 29.3633 126.479 30.1104 128.832 30.1104C131.205 30.1104 132.997 29.3633 134.208 27.8691C135.419 26.375 136.024 24.1729 136.024 21.2627C136.024 18.3818 135.419 16.1992 134.208 14.7148C133.007 13.2207 131.225 12.4736 128.861 12.4736C126.488 12.4736 124.682 13.2256 123.441 14.7295C122.211 16.2236 121.596 18.4014 121.596 21.2627ZM158.92 32H155.99L148.183 21.6143L145.941 23.6064V32H143.451V10.584H145.941V21.2041L155.653 10.584H158.598L149.984 19.8857L158.92 32Z" fill="black" />
                                            <path d="M162.608 8H161.778V1.59863H159.518V0.861328H164.869V1.59863H162.608V8ZM169.107 8L166.686 1.67188H166.646C166.692 2.17318 166.715 2.76888 166.715 3.45898V8H165.948V0.861328H167.198L169.459 6.75H169.498L171.778 0.861328H173.019V8H172.188V3.40039C172.188 2.87305 172.211 2.30013 172.257 1.68164H172.218L169.776 8H169.107Z" fill="black" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>

                            <div onClick={() => { setIsOpen(false) }} className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110'>
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L14 14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 14L14 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <nav className='flex flex-col justify-center items-center h-screen text-xl font-semibold space-y-5 -mt-10'>
                            {links.map((link, index) => (
                                <Link
                                    key={link.href}
                                    onClick={() => { setIsOpen(false) }}
                                    href={link.href}
                                    className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110'
                                >
                                    <motion.p
                                        initial={{ y: "5vw", opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 + index * 0.1 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                    >
                                        {link.label}
                                    </motion.p>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                :
                <div className='md:hidden block mt-0'>
                    <div className='w-screen p-5 flex'>
                        <Link href={"/"}>
                            <Image className='h-[30px] w-[24px] cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110' width={100} src={logo} alt="logo" />
                        </Link>

                        <div onClick={() => setIsOpen(true)} className='flex justify-end w-screen items-center cursor-pointer'>
                            <svg
                                width="20"
                                height="15"
                                viewBox="0 0 20 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='transform transition-transform duration-100 ease-in-out hover:scale-110'
                            >
                                <path d="M1 1H19" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M1 7.13672H19" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M1 13.2725H19" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar