'use client'
import { faq } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const HelpCenter = () => {
    const [search, setSearch] = useState("")
    const [openFAQ, setOpenFAQ] = useState(null)

    const handleSearch = (e) => {
        e.preventDefault()

        if (search.trim() === '') {
            toast.error("Please enter a search query")
        } else {
            toast.success("Search results updated")
        }
    }

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    // Filter the FAQ list based on the search query
    const filteredFAQs = faq.filter((data) =>
        data.qns.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <Navbar fontcolor='black' />
            <div className='mt-20 md:mt-24 mb-10'>
                <Toaster />
                <div className="flex justify-center items-center">
                    <motion.div initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                        viewport={{ once: true, amount: 0.1 }} className="bg-white px-7 py-12 sm:px-16 sm:py-16 md:px-20 md:py-16 xl:px-28 xl:py-16 h-fit rounded-3xl w-[95%] xl:w-[1150px]">
                        <p className='font-semibold text-[24px] sm:text-[54px] mb-2 sm:mb-5'>
                            Support Center
                        </p>
                        <p className='font-light sm:w-3/4 text-[12px] sm:text-[21px] text-justify'>
                            Welcome to the Firstlook Support Page. Here, you will find answers to frequently asked questions. If your query isn’t addressed here, please feel free to contact us directly for further assistance.
                        </p>
                        <Link href='/feedback'>
                            <p className='w-3/4 text-[#FC3657] text-[12px] sm:text-[21px] font-bold transform transition-transform duration-100 ease-in-out hover:text-[#d66477] active:scale-95'>
                                Write to us
                            </p>
                        </Link>

                        <p className='font-semibold text-[24px] sm:text-[54px] mt-6 sm:mt-14 mb-2 sm:mb-5'>
                            Frequently asked questions
                        </p>
                        <form onSubmit={handleSearch}>
                            <div className="flex mt-7">
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search query"
                                    type="text"
                                    className="w-[30rem] px-2 sm:px-8 rounded-xl border border-[#DDDCDC] placeholder:text-[12px] sm:placeholder:text-[21px]" />
                                <button type='submit'
                                    className="ml-1 cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95"
                                >
                                    <svg className="sm:block hidden" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 15C0 6.71573 6.71573 0 15 0H30C38.2843 0 45 6.71573 45 15V30C45 38.2843 38.2843 45 30 45H15C6.71573 45 0 38.2843 0 30V15Z" fill="#FE1940" />
                                        <path d="M21.6004 34.2031L32.4004 23.4032L21.6004 12.6031" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.6004 23.4023L32.4004 23.4023" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg className="sm:hidden block" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="10" fill="#FE1940" />
                                        <path d="M19.2008 30.4014L28.8008 20.8014L19.2008 11.2014" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.2008 20.8008L28.8008 20.8008" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div className="rounded-xl bg-white mt-10">
                            {filteredFAQs.length > 0 ? (
                                filteredFAQs.map((data) => (
                                    <div key={data?.id} className="mb-4">
                                        <div
                                            className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95"
                                            onClick={() => toggleFAQ(data?.id)}
                                        >
                                            <h2 className="text-[12px] sm:text-[24px] mt-2 font-sans">{data?.qns}</h2>

                                            <span className="sm:block hidden mt-2">
                                                {openFAQ === data?.id ? (
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="20" height="20" fill="#444444" />
                                                        <path d="M6 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                ) : (
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="20" height="20" fill="#444444" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10.1894 5 10.3711 5.07525 10.5051 5.20921C10.639 5.34316 10.7143 5.52485 10.7143 5.71429V9.28571H14.2857C14.4752 9.28571 14.6568 9.36097 14.7908 9.49492C14.9247 9.62888 15 9.81056 15 10C15 10.1894 14.9247 10.3711 14.7908 10.5051C14.6568 10.639 14.4752 10.7143 14.2857 10.7143H10.7143V14.2857C10.7143 14.4752 10.639 14.6568 10.5051 14.7908C10.3711 14.9247 10.1894 15 10 15C9.81056 15 9.62888 14.9247 9.49492 14.7908C9.36097 14.6568 9.28571 14.4752 9.28571 14.2857V10.7143H5.71429C5.52485 10.7143 5.34316 10.639 5.20921 10.5051C5.07525 10.3711 5 10.1894 5 10C5 9.81056 5.07525 9.62888 5.20921 9.49492C5.34316 9.36097 5.52485 9.28571 5.71429 9.28571H9.28571V5.71429C9.28571 5.52485 9.36097 5.34316 9.49492 5.20921C9.62888 5.07525 9.81056 5 10 5Z" fill="white" />
                                                    </svg>
                                                )}
                                            </span>
                                        </div>
                                        {openFAQ === data?.id && (
                                            <motion.p
                                                initial={{ y: "10vw", opacity: 0 }}
                                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="text-[12px] sm:text-[21px] text-justify text-gray-700"
                                            >
                                                {data?.ans}
                                            </motion.p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 text-[12px] sm:text-[21px] mt-5">No results found for &quot;{search}&quot;</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HelpCenter
