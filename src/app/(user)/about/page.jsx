"use client";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { useState } from 'react';
import Link from "next/link";
import down from "../../../../public/asset/downarrow.png";
import up from "../../../../public/asset/uparrow.png";
import gov from "../../../../public/asset/gov.png";
import linkedin from "../../../../public/asset/linkedin.png";
import startup from "../../../../public/asset/startup.png";
import team from "../../../../public/asset/team.png";
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar";


const TimelineEvent = ({ date, description }) => (
    <motion.div initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
        viewport={{ once: true, amount: 0.2 }} className="flex flex-col items-center">
        <div className="mt-28 font-semibold text-[24px] sm:text-4xl max-md:mt-10">{date}</div>
        <div className="self-stretch mt-7 font-light text-[14px] sm:text-2xl text-center max-md:max-w-full">
            {description}
        </div>
        <div className="flex shrink-0 mt-12 w-4 h-4 bg-rose-600 rounded-full max-md:mt-10" />
    </motion.div>
);

const TeamMember = ({ name, role, description, imageClass }) => (
    <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <div className={`flex shrink-0 mx-auto ${imageClass} rounded-3xl h-[300px] w-[225px] max-md:mt-10`} />
        </div>
        <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col ms:items-start mt-7 text-2xl max-md:mt-10 max-md:max-w-full">
                <h3 className="text-3xl md:text-left font-semibold">{name}</h3>
                <div className="md:text-left font-semibold text-xl mt-4">{role}</div>
                <p className="self-stretch md:text-left mt-5 font-light text-[14px] sm:text-[21px] max-md:max-w-full">
                    {description}
                </p>
                <div className="flex flex-col lg:flex-row items-center md:items-start mt-5">
                    <a href="https://www.linkedin.com/in/shibinsebastian1986/" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedin} className="self-center lg:self-start" alt="Linkedin" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const About = () => {
    const [showAll, setShowAll] = useState(false);

    const events = [
        { date: "2021 May", description: "The idea to create a unique matchmaking platform is sparked, setting the foundation for our vision" },
        { date: "2021 Dec", description: "We develop our first prototype and begin rigorous testing to refine our concept." },
        { date: "2022", description: "Extensive research is conducted, and we bootstrap the necessary funds to bring our vision to life." },
        { date: "2023 May", description: "Development of the enhanced commercial version begins, incorporating insights and feedback from our initial prototype." },
        { date: "2023 Nov", description: "The commercial version of our platform is officially launched, marking a significant milestone in our journey." },
        { date: "2024 Mar", description: "We achieve a major success with 25,000 registered users, a testament to the platform's growing impact." }
    ];

    const displayedEvents = showAll ? events : events.slice(0, 3);

    return (
        <>
            <Navbar fontcolor='black' />
            <div className='mb-10 flex flex-col items-center'>
                <div className="w-[95%] xl:w-[1150px] justify-center mt-20">
                    <div className="text-center">
                        <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
                            viewport={{ once: true, amount: 0.8 }} className="mt-24 font-semibold text-[28px] sm:text-6xl  max-md:mt-10 max-md:max-w-full">
                            Revolutionizing How Singles Find <br /> Meaningful Connections
                        </motion.h1>
                        <motion.p initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }} className="mt-16 font-light text-[14px] sm:text-3xl  max-md:mt-10 max-md:max-w-full">
                            We recognize that no existing platform fully grasps the unique needs and emotions<br /> of individuals searching for a meaningful connection.
                            <br />
                            Our vision is to create the most interactive platform for singles, dedicated to connecting<br /> hearts and fostering relationships that matter.
                        </motion.p>
                    </div>
                    <motion.div initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
                        viewport={{ once: true, amount: 0.1 }} className="flex flex-col items-center self-stretch px-20 pt-16 pb-16 my-20 text-3xl font-semibold leading-snug bg-white rounded-[50px]  max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col items-center mb-0 mt-10 max-w-full w-[708px] max-md:mb-2.5">
                            <h2 className="font-semibold text-[28px] sm:text-6xl max-md:max-w-full">
                                Tracing our Evolution
                            </h2>
                            {displayedEvents.map((event, index) => (
                                <TimelineEvent key={index} {...event} />
                            ))}
                        </div>
                        {!showAll && (
                            <Image
                                src={down}
                                className="mt-10 w-10 mx-auto cursor-pointer"
                                alt="Show more"
                                onClick={() => setShowAll(true)}
                            />
                        )}
                        {showAll && (
                            <Image
                                src={up}
                                className="mt-10 w-10 mx-auto cursor-pointer"
                                alt="Show Less"
                                onClick={() => setShowAll(false)}
                            />
                        )}
                    </motion.div>
                    <motion.div initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                        viewport={{ once: true, amount: 0.1 }} className="text-center">
                        <Image src={team} className="mt-14 mx-auto" alt="Team" />
                        <motion.h2 initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.2 }} className="font-semibold mt-14 text-[28px] sm:text-6xl  max-md:mt-10 max-md:max-w-full">
                            The Core Team Driving <br /> Our Vision Forward
                        </motion.h2>
                        <motion.p initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.2 }} className="mt-11 font-light text-[14px] sm:text-3xl  max-md:mt-10 max-md:max-w-full">
                            A dedicated team of tech professionals, passionately crafting an exceptional product<br /> and building a brand that stands out
                        </motion.p>
                        <motion.div initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.2 }} className="px-20 py-16 mt-20 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <TeamMember
                                name="Shibin Sebastian"
                                role="Founder"
                                description={
                                    <>
                                        UI/UX designer with 12+ years of experience, including launching a<br />
                                        startup early in his career, gaining entrepreneurial insights that drive his<br />
                                        innovative concepts.
                                    </>
                                }
                                imageClass="bg-emerald-300"
                            />
                        </motion.div>
                        {/* <motion.div initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.1 }} className="flex lg:justify-center overflow-x-auto gap-4 mt-20 w-full max-md:mt-10 snap-x snap-mandatory pb-4">
                            {['sky-100', 'blue-300', 'blue-300', 'rose-200', 'blue-100'].map((color, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 snap-center rounded-3xl h-[523px] w-[210px] ${color === 'sky-100' ? 'bg-sky-100' :
                                        color === 'blue-300' ? 'bg-blue-300' :
                                            color === 'rose-200' ? 'bg-rose-200' :
                                                color === 'blue-100' ? 'bg-blue-100' : ''
                                        }`}
                                />
                            ))}
                        </motion.div> */}
                        <motion.div
                            initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="px-20 py-16 mt-20 w-full bg-[url('../../public/asset/teampic.png')] h-[620px] bg-cover bg-center bg-no-repeat rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
                        >

                        </motion.div>

                        <motion.p initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.2 }} className="my-9 font-light text-[14px] sm:text-2xl text-center max-md:max-w-full">
                            A powerhouse of innovation and expertise. Our dedicated team crafts every aspect of our product from<br /> scratch, turning vision into reality.
                        </motion.p>
                        <motion.p initial={{ y: "10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.2 }} className="mt-16 text-[28px] sm:text-5xl text-center  max-md:mt-10 max-md:max-w-full">
                            Love working with us? Join our team!
                        </motion.p>
                        <a href="https://mcabee.in/" target="_blank" rel="noopener noreferrer" className="flex-auto" >
                            <motion.div
                                initial={{ y: "10vw", opacity: 0 }}
                                whileInView={{
                                    y: 1,
                                    opacity: 1,
                                    transition: { type: "spring", stiffness: 50, delay: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <button className="px-16 py-4 mt-11 max-w-full font-regular text-white text-xl text-center whitespace-nowrap bg-[#FE1940] rounded-[40px] w-[200px] max-md:px-5 max-md:mt-10 transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95">
                                    Explore
                                </button>
                            </motion.div>
                        </a>

                    </motion.div>
                    <motion.div initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                        viewport={{ once: true, amount: 0.2 }} className="flex flex-col items-center px-16 py-20 my-24 mt-22 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col items-center max-w-full w-full">
                            <div className="flex flex-col md:flex-row gap-5 items-center max-md:flex-col">
                                <div className="flex flex-col items-center w-full max-md:w-full">
                                    <Image loading="lazy"
                                        src={gov}
                                        alt="Government Of India"
                                        className="object-contain w-[159px] max-w-full aspect-[1.64] max-md:mt-6" />
                                </div>
                                <div className="flex flex-col items-center w-full max-md:mt-6">
                                    <div className="text-lg font-light  text-center max-md:text-center">
                                        <div className="mb-3">A proud member of</div>
                                        <Image
                                            loading="lazy"
                                            src={startup}
                                            alt="Membership logo"
                                            className="object-contain aspect-[3.79] w-[277px] max-w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default About;
