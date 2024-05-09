import Navbar from "@/components/Navbar";
import Image from "next/image";
import img1 from '../../public/asset/img_1.png'
import reel1 from '../../public/asset/reel_1.png'
import feed1 from '../../public/asset/feed_1.png'
import chat1 from '../../public/asset/chat_1.png'
import chat2 from '../../public/asset/chat_2.png'
import logo2 from '../../public/asset/logo_2.png'

export default function Home() {
  return (
    <div className='font-sans'>
      <div className="mt-5 mb-5">
        <Navbar />
      </div>
      <div className="flex justify-center">
        <section className="w-[95%] relative rounded-3xl bg-[url('../../public/asset/hero_bg_new.png')] bg-cover bg-center bg-no-repeat">
          <div className="relative mx-auto max-w-screen-xl px-4 sm:px-20 py-20 lg:py-28 lg:flex lg:items-center lg:px-16">
            <div className="max-w-xl text-left mt-56 sm:mt-36">
              <h1 className="text-xl text-white font-semibold sm:text-5xl">
                Making Connections <br />
                Effortless
              </h1>

              <p className="mt-4 max-w-lg text-xs sm:text-lg font-light text-white">
                Connecting singles worldwide, effortlessly. <br />
                your reliable platform for matchmaking !
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
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
        <p className="text-2xl md:text-3xl lg:text-6xl font-semibold max-w-lg md:max-w-xl lg:max-w-4xl text-center">
          ‘Firstlook‘: Where connections thrive and loneliness fades.
        </p>
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
        <section className="bg-white rounded-3xl w-[95%]">
          <div className="lg:hidden block">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-36 md:h-64 lg:h-96">
              <Image src={img1} alt="" className="object-contain h-36 md:h-56 lg:h-52" />
            </div>
          </div>
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-md xl:max-w-4xl text-left">
              <h1 className="text-2xl font-semibold md:text-5xl lg:text-4xl xl:text-6xl">Verified profiles, genuine connections !
              </h1>
              <p className="mt-6 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-lg font-light">Experience peace of mind with our stringent verification process. Connect confidently with active and authentic profiles, ensuring meaningful connections every time. </p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-start">
                <p>
                  Learn more
                </p>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 lg:h-96">
                <Image src={img1} alt="" className="object-contain h-48 lg:h-52" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center">
        <section className="w-[95%]">
          <div className="lg:hidden block">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-96">
              <Image src={reel1} alt="" className="object-contain h-96" />
            </div>
          </div>
          <div className="container flex flex-col justify-center p-5 sm:p-6 mx-auto sm:py-12 lg:py-56 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-md xl:max-w-3xl text-left">
              <div className="sm:hidden block mt-5">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31 20.5V11.5C31 4 28 1 20.5 1H11.5C4 1 1 4 1 11.5V20.5C1 28 4 31 11.5 31H20.5C28 31 31 28 31 20.5Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.77734 8.66602H30.2173" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.7812 1.16602V8.45602" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.2227 1.16602V7.78101" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.625 19.6752V17.8752C12.625 15.5652 14.26 14.6202 16.255 15.7752L17.815 16.6752L19.375 17.5752C21.37 18.7302 21.37 20.6202 19.375 21.7752L17.815 22.6752L16.255 23.5752C14.26 24.7302 12.625 23.7852 12.625 21.4752V19.6752Z" stroke="#444444" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="sm:block hidden">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M62 41V23C62 8 56 2 41 2H23C8 2 2 8 2 23V41C2 56 8 62 23 62H41C56 62 62 56 62 41Z" stroke="#444444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.55859 17.3311H60.4385" stroke="#444444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.5586 2.33105V16.9111" stroke="#444444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M42.4414 2.33105V15.5611" stroke="#444444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M25.25 39.3503V35.7503C25.25 31.1303 28.52 29.2403 32.51 31.5503L35.63 33.3503L38.75 35.1503C42.74 37.4603 42.74 41.2403 38.75 43.5503L35.63 45.3503L32.51 47.1503C28.52 49.4603 25.25 47.5703 25.25 42.9503V39.3503Z" stroke="#444444" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold md:text-5xl lg:text-3xl xl:text-6xl mt-6">Video Reels <br />
                bring your profile to life !
              </h1>
              <p className="mt-5 mb-4 text-sm md:text-base lg:text-lg sm:mb-6 max-w-lg font-light">Showcase your personality like never before. With Video Reels, let your charisma shine through movement, music, and more ! </p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-start">
                <p>
                  Learn more
                </p>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="flex items-center w-[95%] mt-8 lg:mt-0 h-72 lg:h-96 -ml-20">
                <Image src={reel1} alt="" className="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center">
        <section className="bg-white rounded-3xl w-[95%]">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
              <Image src={feed1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 lg:ml-56" />
            </div>
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-md xl:max-w-4xl text-right">
              <div className="sm:hidden block mt-10">
                <div className="flex justify-end mb-5">
                  <svg width="70" height="27" viewBox="0 0 70 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="56.5" cy="13.5" r="13" fill="white" stroke="#444444" />
                    <circle cx="13.5" cy="13.5" r="13" fill="white" stroke="#444444" />
                    <path d="M13.8707 18.9971C13.6677 19.0688 13.3335 19.0688 13.1305 18.9971C11.3994 18.4057 7.53125 15.9387 7.53125 11.7572C7.53125 9.91135 9.01762 8.41797 10.8502 8.41797C11.9366 8.41797 12.8977 8.94364 13.5006 9.75604C14.1035 8.94364 15.0705 8.41797 16.151 8.41797C17.9836 8.41797 19.47 9.91135 19.47 11.7572C19.47 15.9387 15.6018 18.4057 13.8707 18.9971Z" fill="white" stroke="#444444" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M57.9261 19.0509C57.2747 19.0509 56.3529 18.593 55.6243 16.4028L55.2269 15.2112L54.0346 14.814C51.8488 14.0858 51.3906 13.1645 51.3906 12.5135C51.3906 11.8681 51.8488 10.9413 54.0346 10.2075L58.7209 8.64629C59.8911 8.2546 60.8681 8.37045 61.4698 8.96626C62.0714 9.56207 62.1873 10.544 61.7954 11.7136L60.2333 16.3973C59.4992 18.593 58.5774 19.0509 57.9261 19.0509ZM54.294 10.9964C52.7595 11.5095 52.2131 12.1163 52.2131 12.5135C52.2131 12.9107 52.7595 13.5176 54.294 14.0251L55.685 14.4885C55.8065 14.5272 55.9058 14.6265 55.9445 14.7478L56.4081 16.138C56.9159 17.6717 57.5286 18.2179 57.9261 18.2179C58.3235 18.2179 58.9307 17.6717 59.444 16.138L61.0061 11.4543C61.2876 10.6047 61.2379 9.90962 60.8791 9.55104C60.5203 9.19245 59.8249 9.14831 58.9803 9.42967L54.294 10.9964Z" fill="#444444" />
                    <path d="M55.6587 15.0615C55.5538 15.0615 55.4489 15.0229 55.3661 14.9402C55.2061 14.7802 55.2061 14.5154 55.3661 14.3554L57.3422 12.3749C57.5023 12.2149 57.7673 12.2149 57.9273 12.3749C58.0874 12.5349 58.0874 12.7997 57.9273 12.9596L55.9513 14.9402C55.874 15.0229 55.7636 15.0615 55.6587 15.0615Z" fill="#444444" />
                    <path d="M24.7786 20.7962C27.6047 23.2398 31.2611 24.5051 34.9931 24.3309C38.725 24.1568 42.2477 22.5565 44.8339 19.8603C45.4324 19.2499 46.285 20.2701 45.6905 20.8766C42.8738 23.748 39.0757 25.4485 35.0578 25.6368C31.0399 25.8252 27.0994 24.4876 24.0264 21.8923C23.3785 21.3443 24.1259 20.2441 24.7786 20.7962Z" fill="#444444" />
                  </svg>
                </div>
              </div>
              <div className="sm:block hidden">
                <div className="flex justify-end mb-10">
                  <svg width="158" height="60" viewBox="0 0 158 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="128" cy="30" r="29" fill="white" stroke="#444444" stroke-width="2" />
                    <circle cx="30" cy="30" r="29" fill="white" stroke="#444444" stroke-width="2" />
                    <path d="M31.3091 42.8787C30.8509 43.0404 30.0964 43.0404 29.6383 42.8787C25.7309 41.5438 17 35.9753 17 26.5371C17 22.3708 20.3549 19 24.4914 19C26.9436 19 29.1128 20.1865 30.4737 22.0202C31.8345 20.1865 34.0173 19 36.456 19C40.5924 19 43.9474 22.3708 43.9474 26.5371C43.9474 35.9753 35.2164 41.5438 31.3091 42.8787Z" fill="white" stroke="#444444" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M130.751 43C129.281 43 127.201 41.9665 125.556 37.023L124.659 34.3334L121.968 33.4368C117.034 31.7931 116 29.7136 116 28.2443C116 26.7874 117.034 24.6954 121.968 23.0393L132.545 19.5154C135.187 18.6313 137.392 18.8928 138.75 20.2376C140.108 21.5824 140.37 23.7989 139.485 26.4387L135.959 37.0106C134.302 41.9665 132.222 43 130.751 43ZM122.553 24.8199C119.09 25.978 117.856 27.3477 117.856 28.2443C117.856 29.1408 119.09 30.5106 122.553 31.6562L125.693 32.7021C125.967 32.7893 126.191 33.0134 126.279 33.2874L127.325 36.4253C128.471 39.887 129.854 41.1197 130.751 41.1197C131.648 41.1197 133.019 39.887 134.178 36.4253L137.703 25.8535C138.339 23.9358 138.227 22.3669 137.417 21.5575C136.607 20.7481 135.037 20.6485 133.131 21.2835L122.553 24.8199Z" fill="#444444" />
                    <path d="M125.633 33.9951C125.396 33.9951 125.159 33.908 124.972 33.7212C124.611 33.3601 124.611 32.7624 124.972 32.4013L129.432 27.931C129.794 27.5699 130.392 27.5699 130.753 27.931C131.114 28.2921 131.114 28.8898 130.753 29.2509L126.293 33.7212C126.118 33.908 125.869 33.9951 125.633 33.9951Z" fill="#444444" />
                    <path d="M55.9302 46.9395C62.309 52.455 70.562 55.311 78.9856 54.9179C87.4092 54.5248 95.3603 50.9126 101.198 44.827C102.549 43.4492 104.473 45.7521 103.131 47.1209C96.7736 53.6022 88.2007 57.4403 79.1317 57.8655C70.0628 58.2907 61.1684 55.2716 54.2322 49.4136C52.7697 48.1766 54.4569 45.6933 55.9302 46.9395Z" fill="#444444" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold md:text-5xl lg:text-4xl xl:text-5xl ">Elevate your connections with favorites and proposals!</h1>
              <p className="mt-6 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-md flex ml-auto font-light">Forge meaningful connections effortlessly. Save your favorites, unlock mutual interest, and take the next step with direct proposals.</p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 12.1989 17.921 12.3896 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H8.5605L11.781 15.969C11.8507 16.0387 11.906 16.1215 11.9438 16.2126C11.9815 16.3037 12.0009 16.4014 12.0009 16.5C12.0009 16.5986 11.9815 16.6962 11.9438 16.7873C11.906 16.8785 11.8507 16.9612 11.781 17.031C11.7113 17.1007 11.6285 17.156 11.5374 17.1938C11.4463 17.2315 11.3486 17.2509 11.25 17.2509C11.1514 17.2509 11.0537 17.2315 10.9626 17.1938C10.8715 17.156 10.7887 17.1007 10.719 17.031L6.219 12.531C6.14915 12.4613 6.09374 12.3785 6.05593 12.2874C6.01812 12.1963 5.99866 12.0986 5.99866 12C5.99866 11.9013 6.01812 11.8036 6.05593 11.7125C6.09374 11.6214 6.14915 11.5386 6.219 11.469L10.719 6.96897C10.7887 6.89924 10.8715 6.84392 10.9626 6.80619C11.0537 6.76845 11.1514 6.74902 11.25 6.74902C11.3486 6.74902 11.4463 6.76845 11.5374 6.80619C11.6285 6.84392 11.7113 6.89924 11.781 6.96897C11.8507 7.0387 11.906 7.12149 11.9438 7.2126C11.9815 7.3037 12.0009 7.40136 12.0009 7.49997C12.0009 7.59859 11.9815 7.69624 11.9438 7.78735C11.906 7.87846 11.8507 7.96124 11.781 8.03097L8.5605 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4696C17.921 11.6103 18 11.8011 18 12Z" fill="black" />
                </svg>
                <p>
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-4 sm:mt-10 px-10 md:px-44">
        <Image src={chat2} className="h-14 w-24" alt="chat" />
      </div>
      <div className="flex justify-center items-center">
        <section className="bg-[#403D4D] text-white rounded-3xl w-[95%]">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
              <Image src={chat1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 lg:ml-40" />
            </div>
            <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-md xl:max-w-4xl text-right">
              <div className="sm:hidden block mt-10">
                <div className="flex justify-end mb-5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13H16H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 18.3867H13H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 31C24.2842 31 31 24.2842 31 16C31 7.71572 24.2842 1 16 1C7.71572 1 1 7.71572 1 16C1 18.7321 1.73046 21.2936 3.00673 23.5L1.75 30.25L8.5 28.9933C10.7063 30.2695 13.2679 31 16 31Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="sm:block hidden">
                <div className="flex justify-end mb-10">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.002 25.999H32.002H44.002" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.0039 36.7734H26.0039H32.0039" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 62C48.5684 62 62 48.5684 62 32C62 15.4314 48.5684 2 32 2C15.4314 2 2 15.4314 2 32C2 37.4642 3.46091 42.5873 6.01346 47L3.5 60.5L17 57.9866C21.4126 60.539 26.5358 62 32 62Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-semibold md:text-5xl lg:text-4xl xl:text-5xl">Chat beyond words !
              </h1>
              <p className="mt-6 mb-6 text-sm md:text-base lg:text-lg sm:mb-6 max-w-md flex ml-auto font-light">Experience seamless communication. From text to images to voice,
                our chat feature brings conversations to life like never before.</p>
              <div className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 12.1989 17.921 12.3896 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H8.5605L11.781 15.969C11.8507 16.0387 11.906 16.1215 11.9438 16.2126C11.9815 16.3037 12.0009 16.4014 12.0009 16.5C12.0009 16.5986 11.9815 16.6962 11.9438 16.7873C11.906 16.8785 11.8507 16.9612 11.781 17.031C11.7113 17.1007 11.6285 17.156 11.5374 17.1938C11.4463 17.2315 11.3486 17.2509 11.25 17.2509C11.1514 17.2509 11.0537 17.2315 10.9626 17.1938C10.8715 17.156 10.7887 17.1007 10.719 17.031L6.219 12.531C6.14915 12.4613 6.09374 12.3785 6.05593 12.2874C6.01812 12.1963 5.99866 12.0986 5.99866 12C5.99866 11.9013 6.01812 11.8036 6.05593 11.7125C6.09374 11.6214 6.14915 11.5386 6.219 11.469L10.719 6.96897C10.7887 6.89924 10.8715 6.84392 10.9626 6.80619C11.0537 6.76845 11.1514 6.74902 11.25 6.74902C11.3486 6.74902 11.4463 6.76845 11.5374 6.80619C11.6285 6.84392 11.7113 6.89924 11.781 6.96897C11.8507 7.0387 11.906 7.12149 11.9438 7.2126C11.9815 7.3037 12.0009 7.40136 12.0009 7.49997C12.0009 7.59859 11.9815 7.69624 11.9438 7.78735C11.906 7.87846 11.8507 7.96124 11.781 8.03097L8.5605 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4696C17.921 11.6103 18 11.8011 18 12Z" fill="white" />
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
        <p className="mx-auto text-center w-72 sm:w-[450px] text-lg sm:text-2xl">
          Ready to rewrite your love story?
        </p>
        <p className="mx-auto text-center w-64 sm:w-[450px] text-lg sm:text-2xl mt-1">
          Download now and start building your path to happily ever after!
        </p>
        <div className='flex justify-center mt-10 mb-10'>
          <button className='flex items-center bg-[#FE1940] px-5 py-3 text-white rounded-3xl gap-4'>
            Download
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="w-full mt-20 flex items-center justify-center">
          <div className="md:w-[95%] w-full px-4 text-white flex flex-col">
            <div className="flex flex-col">
              <div className="flex mb-8 flex-row">
                <div className="">
                  <svg width="174" height="33" viewBox="0 0 174 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.22852 32H0.760742V10.584H13.0361V14.3047H5.22852V19.8271H12.4941V23.5332H5.22852V32ZM17.2256 32V10.584H21.7666V32H17.2256ZM31.6982 20.0908H33.1631C34.5986 20.0908 35.6582 19.8516 36.3418 19.373C37.0254 18.8945 37.3672 18.1426 37.3672 17.1172C37.3672 16.1016 37.0156 15.3789 36.3125 14.9492C35.6191 14.5195 34.54 14.3047 33.0752 14.3047H31.6982V20.0908ZM31.6982 23.7822V32H27.1572V10.584H33.3975C36.3076 10.584 38.4609 11.1162 39.8574 12.1807C41.2539 13.2354 41.9521 14.8418 41.9521 17C41.9521 18.2598 41.6055 19.3828 40.9121 20.3691C40.2188 21.3457 39.2373 22.1123 37.9678 22.6689C41.1904 27.4834 43.29 30.5938 44.2666 32H39.2275L34.1152 23.7822H31.6982ZM59.6035 26.0527C59.6035 27.9863 58.9053 29.5098 57.5088 30.623C56.1221 31.7363 54.1885 32.293 51.708 32.293C49.4229 32.293 47.4014 31.8633 45.6436 31.0039V26.7852C47.0889 27.4297 48.3096 27.8838 49.3057 28.1475C50.3115 28.4111 51.2295 28.543 52.0596 28.543C53.0557 28.543 53.8174 28.3525 54.3447 27.9717C54.8818 27.5908 55.1504 27.0244 55.1504 26.2725C55.1504 25.8525 55.0332 25.4814 54.7988 25.1592C54.5645 24.8271 54.2178 24.5098 53.7588 24.207C53.3096 23.9043 52.3867 23.4209 50.9902 22.7568C49.6816 22.1416 48.7002 21.5508 48.0459 20.9844C47.3916 20.418 46.8691 19.7588 46.4785 19.0068C46.0879 18.2549 45.8926 17.376 45.8926 16.3701C45.8926 14.4756 46.5322 12.9863 47.8115 11.9023C49.1006 10.8184 50.8779 10.2764 53.1436 10.2764C54.2568 10.2764 55.3164 10.4082 56.3223 10.6719C57.3379 10.9355 58.3975 11.3066 59.501 11.7852L58.0361 15.3154C56.8936 14.8467 55.9463 14.5195 55.1943 14.334C54.4521 14.1484 53.7197 14.0557 52.9971 14.0557C52.1377 14.0557 51.4785 14.2559 51.0195 14.6562C50.5605 15.0566 50.3311 15.5791 50.3311 16.2236C50.3311 16.624 50.4238 16.9756 50.6094 17.2783C50.7949 17.5713 51.0879 17.8594 51.4883 18.1426C51.8984 18.416 52.8604 18.9141 54.374 19.6367C56.376 20.5938 57.748 21.5557 58.4902 22.5225C59.2324 23.4795 59.6035 24.6562 59.6035 26.0527ZM71.7471 32H67.2061V14.3633H61.3906V10.584H77.5625V14.3633H71.7471V32Z" fill="#FE1940" />
                    <path d="M81.1074 32V10.584H83.5977V29.7441H93.0459V32H81.1074ZM115.282 21.2627C115.282 24.6904 114.413 27.3857 112.675 29.3486C110.946 31.3115 108.539 32.293 105.453 32.293C102.299 32.293 99.8623 31.3311 98.1436 29.4072C96.4346 27.4736 95.5801 24.749 95.5801 21.2334C95.5801 17.7471 96.4395 15.0469 98.1582 13.1328C99.877 11.209 102.318 10.2471 105.482 10.2471C108.559 10.2471 110.961 11.2236 112.689 13.1768C114.418 15.1299 115.282 17.8252 115.282 21.2627ZM98.2168 21.2627C98.2168 24.1631 98.832 26.3652 100.062 27.8691C101.303 29.3633 103.1 30.1104 105.453 30.1104C107.826 30.1104 109.618 29.3633 110.829 27.8691C112.04 26.375 112.646 24.1729 112.646 21.2627C112.646 18.3818 112.04 16.1992 110.829 14.7148C109.628 13.2207 107.846 12.4736 105.482 12.4736C103.109 12.4736 101.303 13.2256 100.062 14.7295C98.832 16.2236 98.2168 18.4014 98.2168 21.2627ZM138.661 21.2627C138.661 24.6904 137.792 27.3857 136.054 29.3486C134.325 31.3115 131.918 32.293 128.832 32.293C125.678 32.293 123.241 31.3311 121.522 29.4072C119.813 27.4736 118.959 24.749 118.959 21.2334C118.959 17.7471 119.818 15.0469 121.537 13.1328C123.256 11.209 125.697 10.2471 128.861 10.2471C131.938 10.2471 134.34 11.2236 136.068 13.1768C137.797 15.1299 138.661 17.8252 138.661 21.2627ZM121.596 21.2627C121.596 24.1631 122.211 26.3652 123.441 27.8691C124.682 29.3633 126.479 30.1104 128.832 30.1104C131.205 30.1104 132.997 29.3633 134.208 27.8691C135.419 26.375 136.024 24.1729 136.024 21.2627C136.024 18.3818 135.419 16.1992 134.208 14.7148C133.007 13.2207 131.225 12.4736 128.861 12.4736C126.488 12.4736 124.682 13.2256 123.441 14.7295C122.211 16.2236 121.596 18.4014 121.596 21.2627ZM158.92 32H155.99L148.183 21.6143L145.941 23.6064V32H143.451V10.584H145.941V21.2041L155.653 10.584H158.598L149.984 19.8857L158.92 32Z" fill="black" />
                    <path d="M162.608 8H161.778V1.59863H159.518V0.861328H164.869V1.59863H162.608V8ZM169.107 8L166.686 1.67188H166.646C166.692 2.17318 166.715 2.76888 166.715 3.45898V8H165.948V0.861328H167.198L169.459 6.75H169.498L171.778 0.861328H173.019V8H172.188V3.40039C172.188 2.87305 172.211 2.30013 172.257 1.68164H172.218L169.776 8H169.107Z" fill="black" />
                  </svg>
                </div>
                <div className="flex justify-center w-full space-x-12">
                  <a className="hidden md:block cursor-pointer text-gray-600">T&C, Policy</a>
                  <a className="hidden md:block cursor-pointer text-gray-600"> Help Center</a>
                  <a className="hidden md:block cursor-pointer text-gray-600">Press</a>
                  <a className="hidden md:block cursor-pointer text-gray-600">Company</a>
                  <a className="hidden md:block cursor-pointer text-gray-600">Contact</a>
                </div>
                <div className="flex flex-row space-x-8 items-center justify-end">
                  <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 17.028C24 21.396 21.396 24 17.028 24H15.6C14.94 24 14.4 23.46 14.4 22.8V15.876C14.4 15.552 14.664 15.276 14.988 15.276L17.1 15.24C17.268 15.228 17.412 15.108 17.448 14.94L17.868 12.648C17.904 12.432 17.736 12.228 17.508 12.228L14.952 12.264C14.616 12.264 14.352 12 14.34 11.676L14.292 8.736C14.292 8.544 14.448 8.37601 14.652 8.37601L17.532 8.328C17.736 8.328 17.892 8.17201 17.892 7.96801L17.844 5.08799C17.844 4.88399 17.688 4.728 17.484 4.728L14.244 4.77601C12.252 4.81201 10.668 6.444 10.704 8.436L10.764 11.736C10.776 12.072 10.512 12.336 10.176 12.348L8.736 12.372C8.532 12.372 8.37601 12.528 8.37601 12.732L8.41201 15.012C8.41201 15.216 8.568 15.372 8.772 15.372L10.212 15.348C10.548 15.348 10.812 15.612 10.824 15.936L10.932 22.776C10.944 23.448 10.404 24 9.732 24H6.972C2.604 24 0 21.396 0 17.016V6.972C0 2.604 2.604 0 6.972 0H17.028C21.396 0 24 2.604 24 6.972V17.028Z" fill="#FE1940" />
                    </svg>
                  </a>
                  <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.028 0H6.972C2.604 0 0 2.604 0 6.972V17.016C0 21.396 2.604 24 6.972 24H17.016C21.384 24 23.988 21.396 23.988 17.028V6.972C24 2.604 21.396 0 17.028 0ZM12 16.656C9.432 16.656 7.344 14.568 7.344 12C7.344 9.432 9.432 7.344 12 7.344C14.568 7.344 16.656 9.432 16.656 12C16.656 14.568 14.568 16.656 12 16.656ZM19.104 5.856C19.044 6 18.96 6.132 18.852 6.252C18.732 6.36 18.6 6.444 18.456 6.504C18.312 6.564 18.156 6.6 18 6.6C17.676 6.6 17.376 6.48 17.148 6.252C17.04 6.132 16.956 6 16.896 5.856C16.836 5.712 16.8 5.556 16.8 5.4C16.8 5.244 16.836 5.088 16.896 4.944C16.956 4.788 17.04 4.668 17.148 4.548C17.424 4.272 17.844 4.14 18.228 4.224C18.312 4.236 18.384 4.26 18.456 4.296C18.528 4.32 18.6 4.356 18.672 4.404C18.732 4.44 18.792 4.5 18.852 4.548C18.96 4.668 19.044 4.788 19.104 4.944C19.164 5.088 19.2 5.244 19.2 5.4C19.2 5.556 19.164 5.712 19.104 5.856Z" fill="#FE1940" />
                    </svg>
                  </a>
                  <a>
                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.4428 6.05211C26.4428 6.30637 26.4428 6.57558 26.4428 6.82984C26.4567 9.08853 26.0221 11.3275 25.1642 13.4169C24.3061 15.5063 23.042 17.4045 21.4448 19.0017C19.8476 20.5989 17.9494 21.863 15.86 22.7211C13.7706 23.579 11.5316 24.0136 9.27292 23.9997C5.98573 24.0093 2.76574 23.0692 0 21.2926C0.493559 21.2926 0.957204 21.2926 1.49563 21.2926C4.2079 21.2926 6.84153 20.3814 8.97379 18.7051C7.70989 18.6938 6.48204 18.2825 5.46639 17.5302C4.45073 16.7779 3.69945 15.7231 3.3203 14.5174C3.70117 14.5781 4.08628 14.6082 4.47194 14.6071C5.0061 14.6032 5.53806 14.538 6.05731 14.4127C4.70602 14.1369 3.49154 13.4027 2.61939 12.3342C1.74724 11.2659 1.27102 9.92892 1.27129 8.54981C2.10748 9.01107 3.03923 9.27219 3.99334 9.31257C3.15148 8.7557 2.46172 7.99775 1.98644 7.10726C1.51117 6.21678 1.26538 5.22185 1.27129 4.21248C1.27316 3.16177 1.55172 2.13008 2.07893 1.22122C3.5921 3.08724 5.48035 4.61463 7.62138 5.70446C9.76241 6.7943 12.1085 7.42229 14.5076 7.54774C14.4127 7.0951 14.3626 6.63422 14.3581 6.17176C14.319 4.94067 14.6611 3.72755 15.3373 2.69808C16.0136 1.66859 16.991 0.872929 18.1363 0.419707C19.2816 -0.0334992 20.5389 -0.12216 21.7365 0.165839C22.934 0.453838 24.0134 1.10447 24.8275 2.02886C26.1811 1.75697 27.4769 1.25083 28.6563 0.533226C28.2058 1.92889 27.2585 3.11048 25.9941 3.85353C27.1961 3.72363 28.3713 3.41093 29.4789 2.92624C28.6587 4.12418 27.6484 5.18005 26.4877 6.05211H26.4428Z" fill="#FE1940" />
                    </svg>
                  </a>
                  <a>
                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 0H7.5C3 0 0 3 0 7.5V16.5C0 21 3 24 7.5 24H22.5C27 24 30 21 30 16.5V7.5C30 3 27 0 22.5 0ZM17.835 13.545L14.13 15.765C12.63 16.665 11.4 15.975 11.4 14.22V9.765C11.4 8.01002 12.63 7.32001 14.13 8.22001L17.835 10.44C19.26 11.31 19.26 12.69 17.835 13.545Z" fill="#FE1940" />
                    </svg>
                  </a>
                </div>
              </div>
              <hr className="border-gray-600" />
              <div className="flex mb-4 flex-row mt-8">
                <div className="flex space-x-1 items-center text-xl text-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 19C5.032 19 1 14.968 1 10C1 5.032 5.032 1 10 1C14.968 1 19 5.032 19 10C19 14.968 14.968 19 10 19Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5912 12.7004C11.9522 13.2584 11.1242 13.6004 10.2152 13.6004C8.22624 13.6004 6.61523 11.9894 6.61523 10.0004C6.61523 8.01139 8.22624 6.40039 10.2152 6.40039C11.1242 6.40039 11.9522 6.74239 12.5912 7.30039" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className="font-bold">MCABEE</p>
                  <p>Digital</p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <Image src={logo2} className="h-8 w-6" alt="logo"></Image>
                </div>
                <div className="flex flex-row items-center justify-end">
                  <div className="flex items-center bg-white rounded-3xl border border-[#444444] text-black space-x-8 px-6 py-3">
                    <p>
                      English
                    </p>
                    <div className="">
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.72347L6.2765 11L11.553 5.72347" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.27734 1.0007V10.8525" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block mb-10">
        <div className="flex justify-center items-center flex-col space-y-10">
          <div className="">
            <svg width="105" height="19" viewBox="0 0 105 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5459 18H0.865234V5.15039H8.23047V7.38281H3.5459V10.6963H7.90527V12.9199H3.5459V18ZM10.7441 18V5.15039H13.4688V18H10.7441ZM20.4473 5.15039C21.6133 5.15039 22.5742 5.29102 23.3301 5.57227C24.0918 5.85352 24.6572 6.27832 25.0264 6.84668C25.3955 7.41504 25.5801 8.13281 25.5801 9C25.5801 9.58594 25.4688 10.0986 25.2461 10.5381C25.0234 10.9775 24.7305 11.3496 24.3672 11.6543C24.0039 11.959 23.6113 12.208 23.1895 12.4014L26.9688 18H23.9453L20.8779 13.0693H19.4277V18H16.7031V5.15039H20.4473ZM20.2539 7.38281H19.4277V10.8545H20.3066C21.209 10.8545 21.8535 10.7051 22.2402 10.4062C22.6328 10.1016 22.8291 9.65625 22.8291 9.07031C22.8291 8.46094 22.6182 8.02734 22.1963 7.76953C21.7803 7.51172 21.1328 7.38281 20.2539 7.38281ZM36.1709 14.4316C36.1709 15.1934 35.9863 15.8555 35.6172 16.418C35.248 16.9805 34.709 17.4141 34 17.7188C33.2969 18.0234 32.4414 18.1758 31.4336 18.1758C30.9883 18.1758 30.5518 18.1465 30.124 18.0879C29.7021 18.0293 29.2949 17.9443 28.9023 17.833C28.5156 17.7158 28.1465 17.5723 27.7949 17.4023V14.8711C28.4043 15.1406 29.0371 15.3838 29.6934 15.6006C30.3496 15.8174 31 15.9258 31.6445 15.9258C32.0898 15.9258 32.4473 15.8672 32.7168 15.75C32.9922 15.6328 33.1914 15.4717 33.3145 15.2666C33.4375 15.0615 33.499 14.8271 33.499 14.5635C33.499 14.2412 33.3906 13.9658 33.1738 13.7373C32.957 13.5088 32.6582 13.2949 32.2773 13.0957C31.9023 12.8965 31.4775 12.6826 31.0029 12.4541C30.7041 12.3135 30.3789 12.1436 30.0273 11.9443C29.6758 11.7393 29.3418 11.4902 29.0254 11.1973C28.709 10.9043 28.4482 10.5498 28.2432 10.1338C28.0439 9.71191 27.9443 9.20801 27.9443 8.62207C27.9443 7.85449 28.1201 7.19824 28.4717 6.65332C28.8232 6.1084 29.3242 5.69238 29.9746 5.40527C30.6309 5.1123 31.4043 4.96582 32.2949 4.96582C32.9629 4.96582 33.5986 5.04492 34.2021 5.20312C34.8115 5.35547 35.4473 5.57813 36.1094 5.87109L35.2305 7.98926C34.6387 7.74902 34.1084 7.56445 33.6396 7.43555C33.1709 7.30078 32.6934 7.2334 32.207 7.2334C31.8672 7.2334 31.5771 7.28906 31.3369 7.40039C31.0967 7.50586 30.915 7.6582 30.792 7.85742C30.6689 8.05078 30.6074 8.27637 30.6074 8.53418C30.6074 8.83887 30.6953 9.09668 30.8711 9.30762C31.0527 9.5127 31.3223 9.71191 31.6797 9.90527C32.043 10.0986 32.4941 10.3242 33.0332 10.582C33.6895 10.8926 34.249 11.2178 34.7119 11.5576C35.1807 11.8916 35.541 12.2871 35.793 12.7441C36.0449 13.1953 36.1709 13.7578 36.1709 14.4316ZM43.457 18H40.7324V7.41797H37.2432V5.15039H46.9463V7.41797H43.457V18Z" fill="#FE1940" />
              <path d="M49.0645 18V5.15039H50.5586V16.6641H56.2627V18H49.0645ZM69.6133 11.5576C69.6133 12.5479 69.4873 13.4502 69.2354 14.2646C68.9834 15.0732 68.6084 15.7705 68.1104 16.3564C67.6182 16.9365 67.0059 17.3848 66.2734 17.7012C65.541 18.0176 64.6914 18.1758 63.7246 18.1758C62.7285 18.1758 61.8584 18.0176 61.1143 17.7012C60.376 17.3848 59.7607 16.9336 59.2686 16.3477C58.7822 15.7617 58.416 15.0615 58.1699 14.2471C57.9297 13.4326 57.8096 12.5303 57.8096 11.54C57.8096 10.2275 58.0264 9.07617 58.46 8.08594C58.8936 7.0957 59.5498 6.3252 60.4287 5.77441C61.3135 5.22363 62.4209 4.94824 63.751 4.94824C65.0225 4.94824 66.0918 5.2207 66.959 5.76562C67.832 6.31055 68.4912 7.07812 68.9365 8.06836C69.3877 9.05273 69.6133 10.2158 69.6133 11.5576ZM59.3828 11.5576C59.3828 12.6475 59.5381 13.5908 59.8486 14.3877C60.1592 15.1846 60.6338 15.7998 61.2725 16.2334C61.917 16.667 62.7344 16.8838 63.7246 16.8838C64.7207 16.8838 65.5352 16.667 66.168 16.2334C66.8066 15.7998 67.2783 15.1846 67.583 14.3877C67.8877 13.5908 68.04 12.6475 68.04 11.5576C68.04 9.89941 67.6914 8.60449 66.9941 7.67285C66.3027 6.73535 65.2217 6.2666 63.751 6.2666C62.7549 6.2666 61.9346 6.48047 61.29 6.9082C60.6455 7.33594 60.165 7.94531 59.8486 8.73633C59.5381 9.52148 59.3828 10.4619 59.3828 11.5576ZM83.623 11.5576C83.623 12.5479 83.4971 13.4502 83.2451 14.2646C82.9932 15.0732 82.6182 15.7705 82.1201 16.3564C81.6279 16.9365 81.0156 17.3848 80.2832 17.7012C79.5508 18.0176 78.7012 18.1758 77.7344 18.1758C76.7383 18.1758 75.8682 18.0176 75.124 17.7012C74.3857 17.3848 73.7705 16.9336 73.2783 16.3477C72.792 15.7617 72.4258 15.0615 72.1797 14.2471C71.9395 13.4326 71.8193 12.5303 71.8193 11.54C71.8193 10.2275 72.0361 9.07617 72.4697 8.08594C72.9033 7.0957 73.5596 6.3252 74.4385 5.77441C75.3232 5.22363 76.4307 4.94824 77.7607 4.94824C79.0322 4.94824 80.1016 5.2207 80.9688 5.76562C81.8418 6.31055 82.501 7.07812 82.9463 8.06836C83.3975 9.05273 83.623 10.2158 83.623 11.5576ZM73.3926 11.5576C73.3926 12.6475 73.5479 13.5908 73.8584 14.3877C74.1689 15.1846 74.6436 15.7998 75.2822 16.2334C75.9268 16.667 76.7441 16.8838 77.7344 16.8838C78.7305 16.8838 79.5449 16.667 80.1777 16.2334C80.8164 15.7998 81.2881 15.1846 81.5928 14.3877C81.8975 13.5908 82.0498 12.6475 82.0498 11.5576C82.0498 9.89941 81.7012 8.60449 81.0039 7.67285C80.3125 6.73535 79.2314 6.2666 77.7607 6.2666C76.7646 6.2666 75.9443 6.48047 75.2998 6.9082C74.6553 7.33594 74.1748 7.94531 73.8584 8.73633C73.5479 9.52148 73.3926 10.4619 73.3926 11.5576ZM95.752 18H93.9854L89.3535 11.751L87.9824 12.9814V18H86.4883V5.15039H87.9824V11.5576C88.3164 11.1768 88.6592 10.7988 89.0107 10.4238C89.3623 10.043 89.7109 9.65918 90.0566 9.27246L93.8096 5.15039H95.5586L90.4434 10.7227L95.752 18Z" fill="black" />
              <path d="M98.165 5H97.667V1.15918H96.3105V0.716797H99.5215V1.15918H98.165V5ZM102.064 5L100.611 1.20312H100.588C100.615 1.50391 100.629 1.86133 100.629 2.27539V5H100.169V0.716797H100.919L102.275 4.25H102.299L103.667 0.716797H104.411V5H103.913V2.24023C103.913 1.92383 103.927 1.58008 103.954 1.20898H103.931L102.466 5H102.064Z" fill="black" />
            </svg>
          </div>
          <div className="flex flex-row space-x-8">
            <a>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 17.028C24 21.396 21.396 24 17.028 24H15.6C14.94 24 14.4 23.46 14.4 22.8V15.876C14.4 15.552 14.664 15.276 14.988 15.276L17.1 15.24C17.268 15.228 17.412 15.108 17.448 14.94L17.868 12.648C17.904 12.432 17.736 12.228 17.508 12.228L14.952 12.264C14.616 12.264 14.352 12 14.34 11.676L14.292 8.736C14.292 8.544 14.448 8.37601 14.652 8.37601L17.532 8.328C17.736 8.328 17.892 8.17201 17.892 7.96801L17.844 5.08799C17.844 4.88399 17.688 4.728 17.484 4.728L14.244 4.77601C12.252 4.81201 10.668 6.444 10.704 8.436L10.764 11.736C10.776 12.072 10.512 12.336 10.176 12.348L8.736 12.372C8.532 12.372 8.37601 12.528 8.37601 12.732L8.41201 15.012C8.41201 15.216 8.568 15.372 8.772 15.372L10.212 15.348C10.548 15.348 10.812 15.612 10.824 15.936L10.932 22.776C10.944 23.448 10.404 24 9.732 24H6.972C2.604 24 0 21.396 0 17.016V6.972C0 2.604 2.604 0 6.972 0H17.028C21.396 0 24 2.604 24 6.972V17.028Z" fill="#FE1940" />
              </svg>
            </a>
            <a>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.028 0H6.972C2.604 0 0 2.604 0 6.972V17.016C0 21.396 2.604 24 6.972 24H17.016C21.384 24 23.988 21.396 23.988 17.028V6.972C24 2.604 21.396 0 17.028 0ZM12 16.656C9.432 16.656 7.344 14.568 7.344 12C7.344 9.432 9.432 7.344 12 7.344C14.568 7.344 16.656 9.432 16.656 12C16.656 14.568 14.568 16.656 12 16.656ZM19.104 5.856C19.044 6 18.96 6.132 18.852 6.252C18.732 6.36 18.6 6.444 18.456 6.504C18.312 6.564 18.156 6.6 18 6.6C17.676 6.6 17.376 6.48 17.148 6.252C17.04 6.132 16.956 6 16.896 5.856C16.836 5.712 16.8 5.556 16.8 5.4C16.8 5.244 16.836 5.088 16.896 4.944C16.956 4.788 17.04 4.668 17.148 4.548C17.424 4.272 17.844 4.14 18.228 4.224C18.312 4.236 18.384 4.26 18.456 4.296C18.528 4.32 18.6 4.356 18.672 4.404C18.732 4.44 18.792 4.5 18.852 4.548C18.96 4.668 19.044 4.788 19.104 4.944C19.164 5.088 19.2 5.244 19.2 5.4C19.2 5.556 19.164 5.712 19.104 5.856Z" fill="#FE1940" />
              </svg>
            </a>
            <a>
              <svg width="26" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.4428 6.05211C26.4428 6.30637 26.4428 6.57558 26.4428 6.82984C26.4567 9.08853 26.0221 11.3275 25.1642 13.4169C24.3061 15.5063 23.042 17.4045 21.4448 19.0017C19.8476 20.5989 17.9494 21.863 15.86 22.7211C13.7706 23.579 11.5316 24.0136 9.27292 23.9997C5.98573 24.0093 2.76574 23.0692 0 21.2926C0.493559 21.2926 0.957204 21.2926 1.49563 21.2926C4.2079 21.2926 6.84153 20.3814 8.97379 18.7051C7.70989 18.6938 6.48204 18.2825 5.46639 17.5302C4.45073 16.7779 3.69945 15.7231 3.3203 14.5174C3.70117 14.5781 4.08628 14.6082 4.47194 14.6071C5.0061 14.6032 5.53806 14.538 6.05731 14.4127C4.70602 14.1369 3.49154 13.4027 2.61939 12.3342C1.74724 11.2659 1.27102 9.92892 1.27129 8.54981C2.10748 9.01107 3.03923 9.27219 3.99334 9.31257C3.15148 8.7557 2.46172 7.99775 1.98644 7.10726C1.51117 6.21678 1.26538 5.22185 1.27129 4.21248C1.27316 3.16177 1.55172 2.13008 2.07893 1.22122C3.5921 3.08724 5.48035 4.61463 7.62138 5.70446C9.76241 6.7943 12.1085 7.42229 14.5076 7.54774C14.4127 7.0951 14.3626 6.63422 14.3581 6.17176C14.319 4.94067 14.6611 3.72755 15.3373 2.69808C16.0136 1.66859 16.991 0.872929 18.1363 0.419707C19.2816 -0.0334992 20.5389 -0.12216 21.7365 0.165839C22.934 0.453838 24.0134 1.10447 24.8275 2.02886C26.1811 1.75697 27.4769 1.25083 28.6563 0.533226C28.2058 1.92889 27.2585 3.11048 25.9941 3.85353C27.1961 3.72363 28.3713 3.41093 29.4789 2.92624C28.6587 4.12418 27.6484 5.18005 26.4877 6.05211H26.4428Z" fill="#FE1940" />
              </svg>
            </a>
            <a>
              <svg width="26" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 0H7.5C3 0 0 3 0 7.5V16.5C0 21 3 24 7.5 24H22.5C27 24 30 21 30 16.5V7.5C30 3 27 0 22.5 0ZM17.835 13.545L14.13 15.765C12.63 16.665 11.4 15.975 11.4 14.22V9.765C11.4 8.01002 12.63 7.32001 14.13 8.22001L17.835 10.44C19.26 11.31 19.26 12.69 17.835 13.545Z" fill="#FE1940" />
              </svg>
            </a>
          </div>
          <div className="w-full flex justify-center flex-col items-center space-y-5">
            <a className="cursor-pointer text-black">Terms & Policy</a>
            <a className="cursor-pointer text-black"> Help Center</a>
            <a className="cursor-pointer text-black">Press</a>
            <a className="cursor-pointer text-black">Company</a>
            <a className="cursor-pointer text-black">Contact</a>
          </div>
          <div className="flex space-x-2 items-center text-base text-black">
            <p>
              2024
            </p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19C5.032 19 1 14.968 1 10C1 5.032 5.032 1 10 1C14.968 1 19 5.032 19 10C19 14.968 14.968 19 10 19Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5912 12.7004C11.9522 13.2584 11.1242 13.6004 10.2152 13.6004C8.22624 13.6004 6.61523 11.9894 6.61523 10.0004C6.61523 8.01139 8.22624 6.40039 10.2152 6.40039C11.1242 6.40039 11.9522 6.74239 12.5912 7.30039" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className="font-bold">MCABEE</p>
            <p>Digital</p>
            <Image src={logo2} className="h-5 w-3" alt="logo"></Image>
          </div>
          <div className="flex">
            <div className="flex items-center bg-white rounded-3xl border border-[#444444] text-black space-x-9 px-6 py-2">
              <p>
                English
              </p>
              <div className="">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.72347L6.2765 11L11.553 5.72347" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.27734 1.0007V10.8525" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
