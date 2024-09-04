"use client"

import { motion } from "framer-motion";
import Image from "next/image";

import img1 from '../../../public/asset/verifiedImg.png';
import verified1 from '../../../public/asset/verifiedbadge.png';

export default function verified() {
  return (
    <div className="flex justify-center items-center">
      <section id="firstlook-section" className="bg-white rounded-3xl md:w-[90%] ">
        <div className="lg:hidden block">
          <motion.div initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
            viewport={{ once: true, amount: 0.3 }} className="flex items-center justify-center mt-16 h-36 md:h-64 lg:h-96">
            <Image src={img1} alt="verified-profile" className="object-contain h-36 md:h-56 lg:h-52" />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center p-10 sm:py-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center px-12 md:py-12 rounded-sm md:max-w-6xl text-left">
            <motion.div initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }} >
              <Image src={verified1} alt="verified-profile" className="my-10" />
            </motion.div>
            <motion.h1 initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
              viewport={{ once: true, amount: 0.3 }} className="text-2xl md:leading-snug md:text-6xl">Verified profiles, genuine <br />connections !
            </motion.h1>
            <motion.p initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
              viewport={{ once: true, amount: 0.3 }} className="mt-12 mb-6 md:max-w-4xl md:leading-snug font-light text-sm md:text-3xl">Experience peace of mind with our stringent verification process. We require a valid government issued ID for every account, ensuring only genuine, active and verified profiles can connect. </motion.p>
            <motion.div initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
              viewport={{ once: true, amount: 0.3 }} className="flex mt-10 items-center font-light flex-row space-y-1 space-x-2 justify-start sm:mb-0 mb-1.5">
              {/* <p>
                  Learn more
                </p> */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
              </svg>
            </motion.div>
          </div>
          <div className="lg:flex hidden -mb-12 items-end">
            <motion.div initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }}>
              <Image src={img1} alt="verified-profile" className="w-[650px] pr-12" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
