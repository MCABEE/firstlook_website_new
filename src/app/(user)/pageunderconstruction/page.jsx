import Image from 'next/image'
import coding from '../../../../public/asset/page_under_construction.png'
import sign from '../../../../public/asset/Group.png'
import Footer from '@/components/Footer'
import Link from 'next/link'

const PageUnderConstruction = () => {
    return (
        <>
            <div className="flex justify-center items-center font-sans mt-20 md:mt-36">
                <section className="rounded-3xl w-[95%] xl:w-[1120px]">
                    <div className="lg:hidden block">
                        <div className="flex items-center justify-center p-6 sm:p-0 mt-8 lg:mt-0 h-36 md:h-64 lg:h-96">
                            <Image src={coding} className='w-[500px] sm:h-[300px] mb-6' alt="" />
                        </div>
                    </div>
                    <div className="container flex flex-col justify-center p-6 sm:p-0 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center rounded-sm lg:max-w-md xl:max-w-4xl text-left">
                            <Image src={sign} className='h-[52.2px] w-[60px] mb-4' alt="" />
                            <h1 className="text-2xl font-semibold md:text-5xl lg:text-5xl xl:text-5xl">Sorry !
                            </h1>
                            <p className="mt-3 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-lg font-light">This page is currently under maintenance</p>
                            <div className="flex items-center font-light flex-row space-y-1 space-x-2 justify-start sm:mb-0 mb-8">
                                <Link href='/'>
                                    <button className='bg-[#FE1940] py-2 px-6 text-white rounded-3xl'>
                                        Return
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:block hidden">
                            <div className="flex items-center justify-end p-6 sm:p-0 mt-8 lg:mt-0 h-72 lg:h-96">
                                <Image src={coding} className='w-[500px] sm:h-[300px]' alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default PageUnderConstruction