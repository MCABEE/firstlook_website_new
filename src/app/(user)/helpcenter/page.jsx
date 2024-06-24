'use client'
import { faq } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const HelpCenter = () => {
    const [search, setSearch] = useState("")
    const [openFAQ, setOpenFAQ] = useState(null)

    const handleSearch = (e) => {
        e.preventDefault()

        if (search === '' || search === ' ') {
            toast.error("Please enter a search query")
        }
        else {
            toast.error("We're working on it! \nSearch will be Available Soon")
        }
    }

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    return (
        <>
            <div className='font-sans mt-20 md:mt-24 mb-10'>
                <Toaster />
                <div className="flex justify-center items-center">
                    <section className="bg-white px-7 py-12 sm:px-16 sm:py-16 md:px-20 md:py-16 xl:px-28 xl:py-16 h-fit rounded-3xl w-[95%] xl:w-[1150px]">
                        <p className='font-semibold text-[24px] sm:text-[54px] mb-2 sm:mb-5'>
                            Support Center
                        </p>
                        <p className='font-light sm:w-3/4 text-[12px] sm:text-[21px] text-justify'>
                            Welcome to the Firstlook Support Page. Here, you will find answers to frequently asked questions. If your query isn’t addressed here, please feel free to contact us directly for further assistance.
                        </p>
                        <Link href='/feedback'>
                            <p className='w-3/4 text-[#FC3657] text-[12px] sm:text-[21px] font-medium'>
                                write to us
                            </p>
                        </Link>
                        <p className='font-semibold text-[16px] sm:text-[36px] mt-6 sm:mt-14 mb-2 sm:mb-5'>
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
                                    className="ml-1 cursor-pointer transition-none"
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
                            {faq.map((data) => (
                                <div key={data?.id} className="mb-4">
                                    <div
                                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                                        onClick={() => toggleFAQ(data?.id)}
                                    >
                                        <h2 className="text-[12px] sm:text-[24px] mt-2 font-sans">{data?.qns}</h2>

                                        <span className="sm:block hidden">
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
                                        <span className="sm:hidden block">
                                            {openFAQ === data?.id ? (
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="12" height="12" fill="#444444" />
                                                    <path d="M4 6H8" stroke="white" stroke-linecap="round" />
                                                </svg>
                                            ) : (
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="12" height="12" fill="#444444" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C6.11366 3 6.22267 3.04515 6.30305 3.12553C6.38342 3.2059 6.42857 3.31491 6.42857 3.42857V5.57143H8.57143C8.68509 5.57143 8.7941 5.61658 8.87447 5.69695C8.95485 5.77733 9 5.88634 9 6C9 6.11366 8.95485 6.22267 8.87447 6.30305C8.7941 6.38342 8.68509 6.42857 8.57143 6.42857H6.42857V8.57143C6.42857 8.68509 6.38342 8.7941 6.30305 8.87447C6.22267 8.95485 6.11366 9 6 9C5.88634 9 5.77733 8.95485 5.69695 8.87447C5.61658 8.7941 5.57143 8.68509 5.57143 8.57143V6.42857H3.42857C3.31491 6.42857 3.2059 6.38342 3.12553 6.30305C3.04515 6.22267 3 6.11366 3 6C3 5.88634 3.04515 5.77733 3.12553 5.69695C3.2059 5.61658 3.31491 5.57143 3.42857 5.57143H5.57143V3.42857C5.57143 3.31491 5.61658 3.2059 5.69695 3.12553C5.77733 3.04515 5.88634 3 6 3Z" fill="white" />
                                                </svg>
                                            )}
                                        </span>
                                    </div>

                                    {openFAQ === data?.id && (
                                        <p className="text-[12px] sm:text-[24px] mt-4 leading-relaxed text-gray-700">
                                            {data?.ans}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HelpCenter