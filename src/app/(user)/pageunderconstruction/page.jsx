"use client";

import Image from 'next/image'
import icon1 from '../../../../public/asset/iconfacebook.png';
import icon2 from '../../../../public/asset/iconinstagram.png';
import Link from 'next/link'
import { motion } from "framer-motion"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PageUnderConstruction = () => {
    return (
        <>
            <Navbar fontcolor='black' />
            <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                viewport={{ once: true, amount: 0.1 }} className="flex justify-center items-center mt-28">
                <section className="w-[95%] xl:w-[1150px] bg-white rounded-3xl mt-10">
                    <section className="flex justify-start items-start px-20 pt-20 pb-52 lg:ps-52 mt-8 text-3xl font-light w-full bg-white rounded-3xl max-md:px-5 max-md:pb-24 max-md:max-w-2xl">
                        <div className="flex flex-col items-start mb-0 max-w-full w-[755px] max-md:mb-2.5">
                            <h1 className="text-6xl font-semibold leading-[65px] max-md:text-4xl max-md:leading-[53px]">
                                We&apos;re enhancing <br /> this page
                            </h1>
                            <p className="mt-3 sm:mt-6 sm:text-2xl max-w-xs sm:max-w-2xl">
                                to bring you an even better experience. It&apos;ll be ready soon! <br /> In the meantime, stay connected with us on{" "}
                                <span className="font-bold">our social handles</span> <br />for the latest updates
                            </p>
                            <div className="flex flex-wrap gap-9 mt-16">
                                <a
                                    href="https://www.facebook.com/firstlookappofficial?mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-auto gap-3 px-3 py-2.5 rounded-2xl border border-solid border-zinc-500 transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95"
                                >
                                    <Image
                                        loading="lazy"
                                        src={icon1}
                                        alt="Facebook Icon"
                                        className="object-contain shrink-0 my-auto w-9 aspect-square"
                                    />
                                    <div className="flex-auto">/firstlookappofficial</div>
                                </a>

                                <a
                                    href="https://www.instagram.com/firstlook_app?igsh=aXlsbmx3dm96bHo2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-auto gap-3 px-3 py-2.5 rounded-2xl border border-solid border-zinc-500 transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95"
                                >
                                    <Image
                                        loading="lazy"
                                        src={icon2}
                                        alt="Instagram Icon"
                                        className="object-contain shrink-0 my-auto w-9 aspect-square"
                                    />
                                    <div className="flex-auto">/firstlook_app</div>
                                </a>
                            </div>

                        </div>
                    </section>
                </section>
            </motion.div>
            <Footer/>
        </>
    )
}

export default PageUnderConstruction