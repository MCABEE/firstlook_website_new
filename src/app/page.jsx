"use client"
import Footer from "@/components/Footer";
import Hero from '@/components/home/1_hero';
import Description from '@/components/home/2_description';
import Verified from '@/components/home/3_verified';
import Reels from '@/components/home/4_reels';
import Engage from '@/components/home/5_engage';
import Chat from '@/components/home/6_chat';
import Bottom from '@/components/home/7_bottom';
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetElement = document.getElementById('firstlook-section');

      if (targetElement && scrollPosition > targetElement.offsetTop) {
        setShowDownloadButton(true);
      } else {
        setShowDownloadButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <>
      <div className={`fixed top-0 w-full z-10 transform transition-transform duration-700 ease-in-out ${showNavbar ? 'navbar-enter' : 'opacity-0'}`}>
        {showNavbar && <Navbar fontcolor='white' percent={90} />}
      </div>
      <Hero />
      <Description />
      <Verified />
      <Reels />
      <Engage />
      <Chat />
      <Bottom />
      <Footer />
      {showDownloadButton && (
        <div className="md:hidden block fixed bottom-5 right-5 animate-bounce z-50">
          <Link href="/download">
            <div className="bg-[#FE1940] text-white flex items-center gap-2 px-3.5 py-3 rounded-full shadow-lg hover:bg-[#fe193fec] focus:outline-none">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7 0C7.55228 0 8 0.447715 8 1V11.5858L10.2929 9.29289C10.6834 8.90237 11.3166 8.90237 11.7071 9.29289C12.0976 9.68342 12.0976 10.3166 11.7071 10.7071L7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289C2.68342 8.90237 3.31658 8.90237 3.70711 9.29289L6 11.5858V1C6 0.447715 6.44772 0 7 0ZM1 16C1 15.4477 1.44772 15 2 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H2C1.44772 17 1 16.5523 1 16Z" fill="currentColor" />
              </svg>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
