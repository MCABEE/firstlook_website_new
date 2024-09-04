"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"
import logoWhite from '../../public/asset/FIRSTLOOKnewlogo.png';
import logoBlack from '../../public/asset/FIRSTLOOKnewlogoblack.png';

const Navbar = ({ fontcolor, percent }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bgColor, setBgColor] = useState('transparent');
    const [fColor, setFColor] = useState(fontcolor);
    const logo = fColor === 'black' ? logoBlack : logoWhite;
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollPercent = (scrollPosition / windowHeight) * 100;

            if (scrollPercent > (percent >= 90 ? 90 : 10)) {
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

    return (
        <nav
            className={`fixed top-0 w-full z-10 transform transition-transform duration-500 ease-in-out ${scrollDirection === 'down' && !isOpen ? '-translate-y-full bg-transparent' : `translate-y-0 bg-${bgColor}`}`}
            style={{
                transition: 'background-color 0.5s ease-in-out'
            }}
        >
            <div className='xl:block hidden m-8 mx-20'>
                <div className='relative px-14 flex justify-between items-center'>
                    {/* Side links container */}
                    <div className={`flex text-xl text-${fColor} items-center gap-10 mx-10`}>
                        <Link href='/pageunderconstruction' className='cursor-pointer font-regular'>
                            <p className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                                How it works
                            </p>
                        </Link>
                        <Link href='/membershippolicy' className='cursor-pointer font-regular'>
                            <p className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                                Policy
                            </p>
                        </Link>
                        <Link href='/helpcenter' className='cursor-pointer font-regular'>
                            <p className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                                Support
                            </p>
                        </Link>
                    </div>

                    {/* Centered logo */}
                    <Link href='/' className='absolute left-1/2 transform -translate-x-1/2'>
                        <Image className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110' src={logo} alt="logo" />
                    </Link>

                    {/* Right links container */}
                    <div className={`flex text-xl text-${fColor} items-center gap-10 mx-10`}>
                        <Link href='/about' className='cursor-pointer font-regular'>
                            <p className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                                About
                            </p>
                        </Link>
                        <Link href='/contact' className='cursor-pointer font-regular'>
                            <p className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                                Contact
                            </p>
                        </Link>
                    </div>
                </div>

            </div>


            {isOpen ?
                <div className='xl:hidden block bg-white'>
                    <div className={`h-screen transition-all duration-500 ease-out ${isOpen ? "right-0" : "-right-[120vw]"}`}>
                        <div className='flex w-screen justify-between items-end p-4'>
                            <div className='flex justify-center '>
                                <Link onClick={() => { setIsOpen(false) }} href='/'>
                                    <Image className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110' src={logoBlack} alt="logo" />
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
                                    className='cursor-pointer font-regular'
                                >
                                    <motion.p
                                        initial={{ y: "5vw", opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 + index * 0.1 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        {link.label}
                                    </motion.p>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                :
                <div className='xl:hidden block mt-0'>
                    <div className='w-screen p-5 flex'>
                        <Link href={"/"}>
                            <Image className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110' src={logo} alt="logo" />
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