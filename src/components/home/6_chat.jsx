
"use client"

import { motion } from "framer-motion";
import Image from "next/image";

import chat2 from '../../../public/asset/chat_2.png';
import chat1 from '../../../public/asset/chatsc_1.png';


export default function chat() {
  return (
    <>
      <div className="relative mt-12 sm:mt-24 px-10 md:px-44 xl:px-72">
        <Image src={chat2} className="relative left-[16%] h-24 w-34" alt="chat" />
      </div>
      <div className="flex justify-center items-center">
        <section className="bg-[#403D4D] text-white rounded-3xl md:w-[85%]">
          <div className="container flex flex-col justify-center m-4 p-10 mx-auto sm:py-12 lg:flex-row lg:justify-center gap-36">
            <motion.div initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }} className="flex items-center py-12">
              <Image src={chat1} alt="" className="" />
            </motion.div>
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-3xl xl:max-w-4xl text-right">
              <div className="sm:hidden block mt-10">
                <div className="flex justify-end mb-5">
                  <motion.svg initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.3 }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/motion.">
                    <path d="M10 13H16H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 18.3867H13H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 31C24.2842 31 31 24.2842 31 16C31 7.71572 24.2842 1 16 1C7.71572 1 1 7.71572 1 16C1 18.7321 1.73046 21.2936 3.00673 23.5L1.75 30.25L8.5 28.9933C10.7063 30.2695 13.2679 31 16 31Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </div>
              <div className="sm:block hidden sm:mt-10 lg:mt-0">
                <div className="flex justify-end mb-10">
                  <motion.svg initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.3 }} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.002 25.999H32.002H44.002" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.0039 36.7734H26.0039H32.0039" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 62C48.5684 62 62 48.5684 62 32C62 15.4314 48.5684 2 32 2C15.4314 2 2 15.4314 2 32C2 37.4642 3.46091 42.5873 6.01346 47L3.5 60.5L17 57.9866C21.4126 60.539 26.5358 62 32 62Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </div>
              <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.3 }} className="text-2xl md:leading-snug md:text-6xl">Chat beyond<br /> words !
              </motion.h1>
              <motion.p initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.3 }} className="mt-12 mb-6 md:max-w-2xl md:leading-snug font-light text-sm md:text-3xl">Experience seamless communication.<br /> From text to images to voice,
                our chat <br />feature brings conversations to life like<br /> never before.</motion.p>
              <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.3 }} className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end sm:mb-0 mb-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 12C18 12.1989 17.921 12.3896 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H8.5605L11.781 15.969C11.8507 16.0387 11.906 16.1215 11.9438 16.2126C11.9815 16.3037 12.0009 16.4014 12.0009 16.5C12.0009 16.5986 11.9815 16.6962 11.9438 16.7873C11.906 16.8785 11.8507 16.9612 11.781 17.031C11.7113 17.1007 11.6285 17.156 11.5374 17.1938C11.4463 17.2315 11.3486 17.2509 11.25 17.2509C11.1514 17.2509 11.0537 17.2315 10.9626 17.1938C10.8715 17.156 10.7887 17.1007 10.719 17.031L6.219 12.531C6.14915 12.4613 6.09374 12.3785 6.05593 12.2874C6.01812 12.1963 5.99866 12.0986 5.99866 12C5.99866 11.9013 6.01812 11.8036 6.05593 11.7125C6.09374 11.6214 6.14915 11.5386 6.219 11.469L10.719 6.96897C10.7887 6.89924 10.8715 6.84392 10.9626 6.80619C11.0537 6.76845 11.1514 6.74902 11.25 6.74902C11.3486 6.74902 11.4463 6.76845 11.5374 6.80619C11.6285 6.84392 11.7113 6.89924 11.781 6.96897C11.8507 7.0387 11.906 7.12149 11.9438 7.2126C11.9815 7.3037 12.0009 7.40136 12.0009 7.49997C12.0009 7.59859 11.9815 7.69624 11.9438 7.78735C11.906 7.87846 11.8507 7.96124 11.781 8.03097L8.5605 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4696C17.921 11.6103 18 11.8011 18 12Z" fill="white" />
                </svg>
                {/* <p>
                  Learn more
                </p> */}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
