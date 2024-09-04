"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function bottom() {
    return (
        <div className="mt-24">
            <motion.p initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.3 }} className="mx-auto text-center w-72 sm:w-[500px]  md:w-[600px] lg:w-[700px] text-[18px] sm:text-2xl md:text-3xl lg:text-4xl">
                Ready to rewrite your love story?
            </motion.p>
            <div className="sm:block hidden">
                <motion.p initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.3 }} className="mx-auto text-center sm:w-[500px] md:w-[600px]  lg:w-[700px] text-[18px] sm:text-2xl md:text-3xl lg:text-4xl mt-2">
                    Download now and start building your path
                </motion.p>
                <motion.p initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.3 }} className="mx-auto text-center sm:w-[500px] md:w-[600px]  lg:w-[700px] text-[18px] sm:text-2xl md:text-3xl lg:text-4xl mt-2">
                    to happily ever after!
                </motion.p>
            </div>
            <div className="block sm:hidden">
                <motion.p initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.3 }} className="mx-auto text-center w-64 sm:w-[450px] text-[18px] sm:text-2xl">
                    Download now and start building your path to happily ever after!
                </motion.p>
            </div>
            <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.3 }} className='flex justify-center my-20'>
                <Link href='/download'>
                    <button className={`flex items-center font-regular text-white text-xl md:px-8 md:py-3 px-6 py-2 bg-[#FE1940] rounded-3xl gap-4 cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-105`}>
                        Download
                        <div className="sm:hidden block">
                            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.777778 12.4444H10.1111C10.5407 12.4444 10.8889 12.7927 10.8889 13.2222C10.8889 13.616 10.5963 13.9414 10.2167 13.9929L10.1111 14H0.777778C0.348223 14 0 13.6518 0 13.2222C0 12.8285 0.292604 12.503 0.672238 12.4515L0.777778 12.4444ZM5.33891 0.00710025L5.44445 0C5.8382 0 6.16362 0.292604 6.21512 0.672238L6.22222 0.777778V8.75052L8.56095 6.41318C8.83708 6.13705 9.26918 6.11195 9.57366 6.33787L9.6609 6.41318C9.93703 6.68931 9.96213 7.1214 9.7362 7.42589L9.6609 7.51312L5.99442 11.1796C5.71829 11.4557 5.28619 11.4808 4.98171 11.2549L4.89447 11.1796L1.22799 7.51312C0.924252 7.20938 0.924252 6.71692 1.22799 6.41318C1.50412 6.13705 1.93622 6.11195 2.2407 6.33787L2.32794 6.41318L4.66667 8.75259V0.777778C4.66667 0.384019 4.95927 0.058602 5.33891 0.00710025Z" fill="white" />
                            </svg>
                        </div>
                        <div className="sm:block hidden">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="white" />
                            </svg>
                        </div>
                    </button>
                </Link>
            </motion.div>
        </div>
    )
}
