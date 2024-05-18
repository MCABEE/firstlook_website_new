"use client"
import Image from "next/image";
import img1 from '../../public/asset/img_1.png'
import reel1 from '../../public/asset/reel_1.png'
import feed1 from '../../public/asset/feed_1.png'
import chat1 from '../../public/asset/chat_1.png'
import chat2 from '../../public/asset/chat_2.png'
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className='font-sans'>
      <div className="flex justify-center mt-20 md:mt-24">
        <section className="w-[95%] relative rounded-3xl bg-[url('../../public/asset/hero_bg_new.png')] bg-cover bg-center bg-no-repeat">
          <div className="relative mx-auto max-w-screen-xl px-6 sm:px-20 py-28 lg:py-28 lg:flex lg:items-center lg:px-16">
            <div className="max-w-xl text-left mt-72 sm:mt-36">
              <h1 className="text-3xl text-white font-semibold sm:text-5xl">
                Making Connections
              </h1>
              <h1 className="text-3xl text-white font-semibold sm:text-5xl sm:mt-3">
                Effortless
              </h1>

              <p className="mt-3 max-w-lg text-sm md:text-base lg:text-lg font-light text-white">
                Connecting singles worldwide, effortlessly. <br />
                your reliable platform for matchmaking !
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-center">
                <button className='flex items-center bg-[#FE1940] sm:px-7 py-3 px-5 text-sm sm:text-base text-white rounded-3xl gap-4'>
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center flex-col items-center mt-14 mb-14">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-semibold max-w-lg md:max-w-xl lg:max-w-4xl text-center">
          ‘Firstlook‘: Where connections thrive and loneliness fades.
        </h2>
        <p className="max-w-lg font-light text-sm md:text-base lg:text-lg px-5 sm:px-0 md:max-w-2xl lg:max-w-4xl text-center mt-4 lg:mt-8">
          Offering a seamless journey from search to connection, chat, and beyond. With verified accounts and a trusted platform, finding your perfect match is easier. A new era of matchmaking, where simplicity meets security
          and love, is just a click away.
        </p>
        <p className="max-w-lg font-light text-sm md:text-base lg:text-lg px-5 sm:px-0 md:max-w-3xl lg:max-w-4xl text-center">
          Say goodbye to complexities and hello to simplicity.
        </p>
        <p className="font-semibold text-center text-sm md:text-base lg:text-lg">
          ‘ firstlook_app ‘
        </p>
      </div>
      <div className="flex justify-center items-center">
        <section className="bg-white rounded-3xl w-[95%] xl:w-[1150px]">
          <div className="lg:hidden block">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-36 md:h-64 lg:h-96">
              <Image src={img1} alt="verified-profile" className="object-contain h-36 md:h-56 lg:h-52" />
            </div>
          </div>
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-md xl:max-w-4xl text-left">
              <h1 className="text-2xl font-semibold md:text-5xl lg:text-5xl xl:text-5xl">Verified profiles, genuine connections !
              </h1>
              <p className="mt-6 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-lg font-light">Experience peace of mind with our stringent verification process. Connect confidently with active and authentic profiles, ensuring meaningful connections every time. </p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-start">
                <p>
                  Learn more
                </p>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 lg:h-96">
                <Image src={img1} alt="verified-profile" className="object-contain h-48 lg:h-52" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center">
        <section className="w-[95%] xl:w-[1150px]">
          <div className="lg:hidden block">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-96">
              <Image src={reel1} alt="reel" className="object-contain h-96" />
            </div>
          </div>
          <div className="container flex flex-col justify-center p-5 sm:p-6 mx-auto sm:py-12 lg:py-56 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-md xl:max-w-3xl text-left">
              <div className="sm:hidden block mt-5">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31 20.5V11.5C31 4 28 1 20.5 1H11.5C4 1 1 4 1 11.5V20.5C1 28 4 31 11.5 31H20.5C28 31 31 28 31 20.5Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.77734 8.66602H30.2173" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.7812 1.16602V8.45602" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.2227 1.16602V7.78101" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.625 19.6752V17.8752C12.625 15.5652 14.26 14.6202 16.255 15.7752L17.815 16.6752L19.375 17.5752C21.37 18.7302 21.37 20.6202 19.375 21.7752L17.815 22.6752L16.255 23.5752C14.26 24.7302 12.625 23.7852 12.625 21.4752V19.6752Z" stroke="#444444" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="sm:block hidden">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M62 41V23C62 8 56 2 41 2H23C8 2 2 8 2 23V41C2 56 8 62 23 62H41C56 62 62 56 62 41Z" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.55859 17.3311H60.4385" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.5586 2.33105V16.9111" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42.4414 2.33105V15.5611" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25.25 39.3503V35.7503C25.25 31.1303 28.52 29.2403 32.51 31.5503L35.63 33.3503L38.75 35.1503C42.74 37.4603 42.74 41.2403 38.75 43.5503L35.63 45.3503L32.51 47.1503C28.52 49.4603 25.25 47.5703 25.25 42.9503V39.3503Z" stroke="#444444" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold md:text-5xl lg:text-5xl xl:text-5xl mt-6">Video Reels <br />
                bring your profile to life !
              </h1>
              <p className="mt-5 mb-4 text-sm md:text-base lg:text-lg sm:mb-6 max-w-lg font-light">Showcase your personality like never before. With Video Reels, let your charisma shine through movement, music, and more ! </p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-start">
                <p>
                  Learn more
                </p>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="flex items-center w-[95%] mt-8 lg:mt-0 h-72 lg:h-96 -ml-5">
                <Image src={reel1} alt="" className="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center">
        <section className="bg-white rounded-3xl w-[95%] xl:w-[1150px]">
          <div className="container flex flex-col justify-center p-6 lg:p-8 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
              <Image src={feed1} alt="" className="object-contain h-72 sm:h-80 lg:h-96" />
            </div>
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-3xl xl:max-w-4xl text-right">
              <div className="sm:hidden block mt-10">
                <div className="flex justify-end mb-5">
                  <svg width="70" height="27" viewBox="0 0 70 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="56.5" cy="13.5" r="13" fill="white" stroke="#444444" />
                    <circle cx="13.5" cy="13.5" r="13" fill="white" stroke="#444444" />
                    <path d="M13.8707 18.9971C13.6677 19.0688 13.3335 19.0688 13.1305 18.9971C11.3994 18.4057 7.53125 15.9387 7.53125 11.7572C7.53125 9.91135 9.01762 8.41797 10.8502 8.41797C11.9366 8.41797 12.8977 8.94364 13.5006 9.75604C14.1035 8.94364 15.0705 8.41797 16.151 8.41797C17.9836 8.41797 19.47 9.91135 19.47 11.7572C19.47 15.9387 15.6018 18.4057 13.8707 18.9971Z" fill="white" stroke="#444444" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M57.9261 19.0509C57.2747 19.0509 56.3529 18.593 55.6243 16.4028L55.2269 15.2112L54.0346 14.814C51.8488 14.0858 51.3906 13.1645 51.3906 12.5135C51.3906 11.8681 51.8488 10.9413 54.0346 10.2075L58.7209 8.64629C59.8911 8.2546 60.8681 8.37045 61.4698 8.96626C62.0714 9.56207 62.1873 10.544 61.7954 11.7136L60.2333 16.3973C59.4992 18.593 58.5774 19.0509 57.9261 19.0509ZM54.294 10.9964C52.7595 11.5095 52.2131 12.1163 52.2131 12.5135C52.2131 12.9107 52.7595 13.5176 54.294 14.0251L55.685 14.4885C55.8065 14.5272 55.9058 14.6265 55.9445 14.7478L56.4081 16.138C56.9159 17.6717 57.5286 18.2179 57.9261 18.2179C58.3235 18.2179 58.9307 17.6717 59.444 16.138L61.0061 11.4543C61.2876 10.6047 61.2379 9.90962 60.8791 9.55104C60.5203 9.19245 59.8249 9.14831 58.9803 9.42967L54.294 10.9964Z" fill="#444444" />
                    <path d="M55.6587 15.0615C55.5538 15.0615 55.4489 15.0229 55.3661 14.9402C55.2061 14.7802 55.2061 14.5154 55.3661 14.3554L57.3422 12.3749C57.5023 12.2149 57.7673 12.2149 57.9273 12.3749C58.0874 12.5349 58.0874 12.7997 57.9273 12.9596L55.9513 14.9402C55.874 15.0229 55.7636 15.0615 55.6587 15.0615Z" fill="#444444" />
                    <path d="M24.7786 20.7962C27.6047 23.2398 31.2611 24.5051 34.9931 24.3309C38.725 24.1568 42.2477 22.5565 44.8339 19.8603C45.4324 19.2499 46.285 20.2701 45.6905 20.8766C42.8738 23.748 39.0757 25.4485 35.0578 25.6368C31.0399 25.8252 27.0994 24.4876 24.0264 21.8923C23.3785 21.3443 24.1259 20.2441 24.7786 20.7962Z" fill="#444444" />
                  </svg>
                </div>
              </div>
              <div className="sm:block hidden">
                <div className="flex justify-end mb-10">
                  <svg width="158" height="60" viewBox="0 0 158 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="128" cy="30" r="29" fill="white" stroke="#444444" strokeWidth="2" />
                    <circle cx="30" cy="30" r="29" fill="white" stroke="#444444" strokeWidth="2" />
                    <path d="M31.3091 42.8787C30.8509 43.0404 30.0964 43.0404 29.6383 42.8787C25.7309 41.5438 17 35.9753 17 26.5371C17 22.3708 20.3549 19 24.4914 19C26.9436 19 29.1128 20.1865 30.4737 22.0202C31.8345 20.1865 34.0173 19 36.456 19C40.5924 19 43.9474 22.3708 43.9474 26.5371C43.9474 35.9753 35.2164 41.5438 31.3091 42.8787Z" fill="white" stroke="#444444" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M130.751 43C129.281 43 127.201 41.9665 125.556 37.023L124.659 34.3334L121.968 33.4368C117.034 31.7931 116 29.7136 116 28.2443C116 26.7874 117.034 24.6954 121.968 23.0393L132.545 19.5154C135.187 18.6313 137.392 18.8928 138.75 20.2376C140.108 21.5824 140.37 23.7989 139.485 26.4387L135.959 37.0106C134.302 41.9665 132.222 43 130.751 43ZM122.553 24.8199C119.09 25.978 117.856 27.3477 117.856 28.2443C117.856 29.1408 119.09 30.5106 122.553 31.6562L125.693 32.7021C125.967 32.7893 126.191 33.0134 126.279 33.2874L127.325 36.4253C128.471 39.887 129.854 41.1197 130.751 41.1197C131.648 41.1197 133.019 39.887 134.178 36.4253L137.703 25.8535C138.339 23.9358 138.227 22.3669 137.417 21.5575C136.607 20.7481 135.037 20.6485 133.131 21.2835L122.553 24.8199Z" fill="#444444" />
                    <path d="M125.633 33.9951C125.396 33.9951 125.159 33.908 124.972 33.7212C124.611 33.3601 124.611 32.7624 124.972 32.4013L129.432 27.931C129.794 27.5699 130.392 27.5699 130.753 27.931C131.114 28.2921 131.114 28.8898 130.753 29.2509L126.293 33.7212C126.118 33.908 125.869 33.9951 125.633 33.9951Z" fill="#444444" />
                    <path d="M55.9302 46.9395C62.309 52.455 70.562 55.311 78.9856 54.9179C87.4092 54.5248 95.3603 50.9126 101.198 44.827C102.549 43.4492 104.473 45.7521 103.131 47.1209C96.7736 53.6022 88.2007 57.4403 79.1317 57.8655C70.0628 58.2907 61.1684 55.2716 54.2322 49.4136C52.7697 48.1766 54.4569 45.6933 55.9302 46.9395Z" fill="#444444" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold md:text-5xl lg:text-5xl xl:text-5xl">Elevate your connections with favorites and proposals!</h1>
              <p className="mt-6 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-md flex ml-auto font-light">Forge meaningful connections effortlessly. Save your favorites, unlock mutual interest, and take the next step with direct proposals.</p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 12C18 12.1989 17.921 12.3896 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H8.5605L11.781 15.969C11.8507 16.0387 11.906 16.1215 11.9438 16.2126C11.9815 16.3037 12.0009 16.4014 12.0009 16.5C12.0009 16.5986 11.9815 16.6962 11.9438 16.7873C11.906 16.8785 11.8507 16.9612 11.781 17.031C11.7113 17.1007 11.6285 17.156 11.5374 17.1938C11.4463 17.2315 11.3486 17.2509 11.25 17.2509C11.1514 17.2509 11.0537 17.2315 10.9626 17.1938C10.8715 17.156 10.7887 17.1007 10.719 17.031L6.219 12.531C6.14915 12.4613 6.09374 12.3785 6.05593 12.2874C6.01812 12.1963 5.99866 12.0986 5.99866 12C5.99866 11.9013 6.01812 11.8036 6.05593 11.7125C6.09374 11.6214 6.14915 11.5386 6.219 11.469L10.719 6.96897C10.7887 6.89924 10.8715 6.84392 10.9626 6.80619C11.0537 6.76845 11.1514 6.74902 11.25 6.74902C11.3486 6.74902 11.4463 6.76845 11.5374 6.80619C11.6285 6.84392 11.7113 6.89924 11.781 6.96897C11.8507 7.0387 11.906 7.12149 11.9438 7.2126C11.9815 7.3037 12.0009 7.40136 12.0009 7.49997C12.0009 7.59859 11.9815 7.69624 11.9438 7.78735C11.906 7.87846 11.8507 7.96124 11.781 8.03097L8.5605 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4696C17.921 11.6103 18 11.8011 18 12Z" fill="black" />
                </svg>
                <p>
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-4 sm:mt-10 px-10 md:px-44 xl:px-72">
        <Image src={chat2} className="h-14 w-24" alt="chat" />
      </div>
      <div className="flex justify-center items-center">
        <section className="bg-[#403D4D] text-white rounded-3xl w-[95%] xl:w-[1150px]">
          <div className="container flex flex-col justify-center p-6 lg:p-8 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
              <Image src={chat1} alt="" className="object-contain h-80 sm:h-96 lg:h-auto" />
            </div>
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-3xl xl:max-w-4xl text-right">
              <div className="sm:hidden block mt-10">
                <div className="flex justify-end mb-5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13H16H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 18.3867H13H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 31C24.2842 31 31 24.2842 31 16C31 7.71572 24.2842 1 16 1C7.71572 1 1 7.71572 1 16C1 18.7321 1.73046 21.2936 3.00673 23.5L1.75 30.25L8.5 28.9933C10.7063 30.2695 13.2679 31 16 31Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="sm:block hidden sm:mt-10 lg:mt-0">
                <div className="flex justify-end mb-10">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.002 25.999H32.002H44.002" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.0039 36.7734H26.0039H32.0039" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 62C48.5684 62 62 48.5684 62 32C62 15.4314 48.5684 2 32 2C15.4314 2 2 15.4314 2 32C2 37.4642 3.46091 42.5873 6.01346 47L3.5 60.5L17 57.9866C21.4126 60.539 26.5358 62 32 62Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-semibold md:text-5xl lg:text-5xl xl:text-5xl">Chat beyond words !
              </h1>
              <p className="mt-6 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-md flex ml-auto font-light">Experience seamless communication. From text to images to voice,
                our chat feature brings conversations to life like never before.</p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 12C18 12.1989 17.921 12.3896 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H8.5605L11.781 15.969C11.8507 16.0387 11.906 16.1215 11.9438 16.2126C11.9815 16.3037 12.0009 16.4014 12.0009 16.5C12.0009 16.5986 11.9815 16.6962 11.9438 16.7873C11.906 16.8785 11.8507 16.9612 11.781 17.031C11.7113 17.1007 11.6285 17.156 11.5374 17.1938C11.4463 17.2315 11.3486 17.2509 11.25 17.2509C11.1514 17.2509 11.0537 17.2315 10.9626 17.1938C10.8715 17.156 10.7887 17.1007 10.719 17.031L6.219 12.531C6.14915 12.4613 6.09374 12.3785 6.05593 12.2874C6.01812 12.1963 5.99866 12.0986 5.99866 12C5.99866 11.9013 6.01812 11.8036 6.05593 11.7125C6.09374 11.6214 6.14915 11.5386 6.219 11.469L10.719 6.96897C10.7887 6.89924 10.8715 6.84392 10.9626 6.80619C11.0537 6.76845 11.1514 6.74902 11.25 6.74902C11.3486 6.74902 11.4463 6.76845 11.5374 6.80619C11.6285 6.84392 11.7113 6.89924 11.781 6.96897C11.8507 7.0387 11.906 7.12149 11.9438 7.2126C11.9815 7.3037 12.0009 7.40136 12.0009 7.49997C12.0009 7.59859 11.9815 7.69624 11.9438 7.78735C11.906 7.87846 11.8507 7.96124 11.781 8.03097L8.5605 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4696C17.921 11.6103 18 11.8011 18 12Z" fill="white" />
                </svg>
                <p>
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-16">
        <p className="mx-auto text-center w-72 sm:w-[500px]  md:w-[600px] lg:w-[1050px] text-[18px] sm:text-2xl md:text-3xl lg:text-4xl">
          Ready to rewrite your love story?
        </p>
        <div className="sm:block hidden">
          <p className="mx-auto text-center sm:w-[500px] md:w-[600px]  lg:w-[700px] text-[18px] sm:text-2xl md:text-3xl lg:text-4xl mt-2">
            Download now and start building your path
          </p>
          <p className="mx-auto text-center sm:w-[500px] md:w-[600px]  lg:w-[700px] text-[18px] sm:text-2xl md:text-3xl lg:text-4xl mt-2">
            to happily ever after!
          </p>
        </div>
        <div className="block sm:hidden">
          <p className="mx-auto text-center w-64 sm:w-[450px] text-[18px] sm:text-2xl">
            Download now and start building your path to happily ever after!
          </p>
        </div>
        <div className='flex justify-center mt-10 mb-10'>
          <button className='flex items-center bg-[#FE1940] px-5 py-3 text-white rounded-3xl gap-4'>
            Download
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
