"use client";

import Testimonial from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
              Unlock Your Future with
              <span className="text-blue-600"> WorkSkillsHub</span>!
            </h1>
            <p>
              Are you ready to level up your career and dive into the world of
              digital and tech skills? Look no further! Welcome to WorkSkillHub
              – your gateway to acquiring cutting-edge skills, receiving
              personalized career advice, and landing your dream job.
            </p>
            <div className="flex items-center gap-x-3 sm:text-sm">
              <Link
                href="/services"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <Image
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
              className="max-w-xl"
              width={500}
              height={500}
              alt="Illustration of a laptop & phone"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Discover Our Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              At WorkSkillsHub, we pride ourselves on offering a comprehensive
              suite of services designed to propel you towards success in the
              digital and tech landscape.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z"
                      fill="#E6E6E6"
                    ></path>
                    <path
                      d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z"
                      fill="#06F3FF"
                    ></path>
                    <path
                      d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z"
                      fill="#005BFF"
                    ></path>
                    <path
                      d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z"
                      fill="#005BFF"
                    ></path>
                    <path
                      d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z"
                      fill="#005BFF"
                    ></path>
                    <path
                      d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z"
                      fill="#005BFF"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Master Digital and Tech Skills
                </h2>
                <p className="leading-relaxed text-justify text-base">
                  Our carefully curated courses cover a wide array of digital
                  and tech skills, from coding and data analysis to digital
                  marketing and UX design. Led by industry experts, our
                  interactive and hands-on lessons ensure you gain practical
                  experience, setting you on the fast track to success.
                </p>
                <Link
                  href="/services"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M670.1 857.7H206.2c-27.6 0-50-22.4-50-50V331.1c0-27.6 22.4-50 50-50H670c27.6 0 50 22.4 50 50v476.6c0.1 27.7-22.3 50-49.9 50z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M669 299.3H205.1c-16.5 0-30 13.5-30 30v75.9H699v-75.9c0-16.5-13.5-30-30-30z"
                      fill="#E6E6E6"
                    ></path>
                    <path
                      d="M859 159.3c-15.4-12.3-35.5-19-56.7-19H363.6c-21.2 0-41.4 6.8-56.7 19-16.4 13.1-25.9 31.7-25.9 51v49h-75.9c-38.6 0-70 31.4-70 70v476.6c0 38.6 31.4 70 70 70H669c38.6 0 70-31.4 70-70v-49h63.3c21.2 0 41.4-6.8 56.7-19 16.4-13.1 25.9-31.7 25.9-51V210.3c0-19.3-9.5-37.9-25.9-51zM699 405.2H175.1v-75.9c0-16.5 13.5-30 30-30H669c16.5 0 30 13.5 30 30v75.9z m0 400.7c0 16.5-13.5 30-30 30H205.1c-16.5 0-30-13.5-30-30V425.2H699v380.7z m145.9-119c0 16.3-19.5 30-42.6 30H739V329.3c0-38.6-31.4-70-70-70H321v-49c0-16.3 19.5-30 42.6-30h438.7c23.1 0 42.6 13.7 42.6 30v476.6z"
                      fill="#005BFF"
                    ></path>
                    <path
                      d="M537.3 369.2H393.1c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h144.2c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M320.4 802.3h-82.1c-16.6 0-30-13.4-30-30V454.4h112.1v347.9zM636.2 802.3H355V454.4h311.3v317.9c-0.1 16.6-13.5 30-30.1 30z"
                      fill="#E6E6E6"
                    ></path>
                    <path
                      d="M230.2 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M290.6 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M225.3 749.2c-2.4 0-4.7-0.8-6.6-2.5-4.1-3.7-4.5-10-0.8-14.1l120.8-136 121 34.4 191.7-132.3c4.5-3.1 10.8-2 13.9 2.5 3.1 4.5 2 10.8-2.5 13.9L463.2 652.7l-118-33.5-112.5 126.6c-1.9 2.2-4.7 3.4-7.4 3.4z"
                      fill="#005BFF"
                    ></path>
                    <path
                      d="M469.9 740.3L338.6 566.7l-123.2 51.8c-5.1 2.1-11-0.2-13.1-5.3-2.1-5.1 0.2-11 5.3-13.1l137.5-57.9 124 164.1L638 463.6c3.2-4.5 9.4-5.7 13.9-2.5s5.7 9.4 2.5 13.9L469.9 740.3z"
                      fill="#06F3FF"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Career Advisory and Mentorship
                </h2>
                <p className="leading-relaxed text-justify text-base">
                  Navigating the complex landscape of your career journey just
                  got easier! WorkSkillHub provides tailored career advisory
                  services and mentorship programs. Benefit from one-on-one
                  sessions with experienced professionals who have walked the
                  path you're on, helping you make informed decisions and
                  overcome challenges.
                </p>
                <Link
                  href="/services"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#181db9"
                      d="M512,512l-512,0c0,-108.606 2.909,-138.303 8.727,-153.819c2.909,-4.121 7.091,-8.181 12.546,-12.181c5.454,-4 12.606,-7.94 21.454,-11.819c8.849,-3.878 16.909,-7.212 24.182,-10c7.273,-2.787 17.212,-6.484 29.818,-11.09c12.606,-4.607 22.546,-8.243 29.818,-10.91c6.303,-2.424 12.425,-5.212 18.364,-8.363c5.939,-3.152 9.758,-5.091 11.455,-5.818c1.697,2.181 3.272,13.515 4.727,34c1.454,20.484 3.515,43.818 6.182,70c2.666,26.181 5.939,45.818 9.818,58.909c1.697,5.818 5.273,10.363 10.727,13.636c5.455,3.273 10.606,5.515 15.455,6.727c4.848,1.212 7.394,2.182 7.636,2.909c0.243,-0.969 2.727,-12.969 7.455,-36c4.727,-23.03 9.151,-43.393 13.272,-61.09c1.775,-7.621 3.37,-15.905 4.785,-23.255c1.421,-7.379 2.66,-13.817 3.718,-17.697l-32.139,-32.139l48,-32l48,32l-31.955,31.955c6.302,16.342 16.024,63.881 29.165,128.142c0.679,3.318 1.366,6.68 2.063,10.084c0.242,-0.727 2.788,-1.697 7.636,-2.909c4.849,-1.212 10,-3.454 15.455,-6.727c5.454,-3.273 9.03,-7.818 10.727,-13.636c3.879,-13.091 6.97,-32.728 9.273,-58.909c2.303,-26.182 4,-49.516 5.091,-70c1.09,-20.485 2.484,-31.819 4.181,-34c1.697,0.727 5.516,2.666 11.455,5.818c5.939,3.151 12.061,5.939 18.364,8.363c7.272,2.667 17.212,6.303 29.818,10.91c12.606,4.606 22.545,8.303 29.818,11.09c7.273,2.788 15.333,6.122 24.182,10c8.848,3.879 16,7.819 21.454,11.819c5.455,4 9.637,8.06 12.546,12.181c3.151,9.697 5.394,36.364 6.727,80c0.47,15.374 0.857,25.707 1.161,33.831l0,0.002c0.558,14.906 0.838,22.373 0.839,39.986Zm-256,-256c-70.692,0 -128,-57.308 -128,-128c0,-70.692 57.308,-128 128,-128c70.692,0 128,57.308 128,128c0,70.692 -57.308,128 -128,128Zm108.8,-127.2c-10.4,2.133 -25.267,1.133 -44.6,-3c-19.333,-4.134 -35.667,-9 -49,-14.6c-9.067,-4 -17.733,-8.6 -26,-13.8c-8.267,-5.2 -17.733,-11.734 -28.4,-19.6c-10.667,-7.867 -18.933,-13.667 -24.8,-17.4c4.267,31.733 -10.667,54.4 -44.8,68c0.267,30.133 11,55.733 32.2,76.8c21.2,21.066 46.733,31.6 76.6,31.6c29.867,0 55.4,-10.534 76.6,-31.6c21.2,-21.067 31.933,-46.533 32.2,-76.4Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Build Your Work Profile
                </h2>
                <p className="leading-relaxed text-justify text-base">
                  Your skills deserve to be showcased. Build an impressive work
                  profile that highlights your achievements and expertise. Our
                  user-friendly platform allows you to create a captivating
                  portfolio that catches the eye of potential employers, setting
                  you apart from the competition.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#273cdd"
                  stroke="#273cdd"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M843.2 876.7H180.8c-13.5 0-24.5-11-24.5-24.5V501.7h711.3v350.4c0.1 13.6-10.9 24.6-24.4 24.6z"
                      fill="#311fb7"
                    ></path>
                    <path
                      d="M842 882.4H182c-17.3 0-31.4-14.1-31.4-31.4V496h722.9v355c-0.1 17.3-14.2 31.4-31.5 31.4zM162.1 507.5V851c0 11 8.9 19.9 19.9 19.9h660c11 0 19.9-8.9 19.9-19.9V507.5H162.1z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M485.7 835.9H208c-6.2 0-11.2-5-11.2-11.2V521.8H497v302.8c0 6.2-5 11.3-11.3 11.3z"
                      fill="#311fb7"
                    ></path>
                    <path
                      d="M485.2 841.6H208.5c-9.7 0-17.5-7.9-17.5-17.5V516h311.8v308.1c0 9.7-7.9 17.5-17.6 17.5zM202.5 527.5v296.6c0 3.3 2.7 6 6 6h276.7c3.3 0 6-2.7 6-6V527.5H202.5z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M813.7 835.9H535.9c-6.2 0-11.2-5-11.2-11.2V521.8H825v302.8c-0.1 6.2-5.1 11.3-11.3 11.3z"
                      fill="#311fb7"
                    ></path>
                    <path
                      d="M813.2 841.6H536.5c-9.7 0-17.5-7.9-17.5-17.5V516h311.8v308.1c-0.1 9.7-8 17.5-17.6 17.5zM530.5 527.5v296.6c0 3.3 2.7 6 6 6h276.7c3.3 0 6-2.7 6-6V527.5H530.5z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M806.2 589.5H217.8c-34 0-61.5-27.5-61.5-61.5V346.5c0-4.8 3.9-8.7 8.7-8.7h693.8c4.8 0 8.7 3.9 8.7 8.7V528c0.2 34-27.4 61.5-61.3 61.5z"
                      fill="#5533ff"
                    ></path>
                    <path
                      d="M803.3 595.3H220.7c-38.7 0-70.1-31.5-70.1-70.1V346.9c0-8.2 6.7-14.9 14.9-14.9h693c8.2 0 14.9 6.7 14.9 14.9v178.2c0 38.7-31.4 70.2-70.1 70.2zM165.5 343.5c-1.9 0-3.4 1.5-3.4 3.4v178.2c0 32.3 26.3 58.6 58.6 58.6h582.6c32.3 0 58.6-26.3 58.6-58.6V346.9c0-1.9-1.5-3.4-3.4-3.4h-693z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M397.3 675H296.4c-0.8 0-1.5-0.7-1.5-1.5v-131c0-0.8 0.7-1.5 1.5-1.5h100.9c0.8 0 1.5 0.7 1.5 1.5v131c0 0.8-0.6 1.5-1.5 1.5z"
                      fill="#3d15cb"
                    ></path>
                    <path
                      d="M397.3 680.7H296.5c-4 0-7.3-3.3-7.3-7.3V542.6c0-4 3.3-7.3 7.3-7.3h100.8c4 0 7.3 3.3 7.3 7.3v130.8c0 4.1-3.3 7.3-7.3 7.3z m-96.6-11.5h92.4V546.8h-92.4v122.4z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M402.5 606.5H291.2c-5 0-9-4-9-9v-9.7c0-5 4-9 9-9h111.3c5 0 9 4 9 9v9.7c0 4.9-4 9-9 9z"
                      fill="#D8A128"
                    ></path>
                    <path
                      d="M402.1 612.2H291.6c-8.4 0-15.2-6.8-15.2-15.2v-8.9c0-8.4 6.8-15.2 15.2-15.2h110.5c8.4 0 15.2 6.8 15.2 15.2v8.9c0 8.4-6.8 15.2-15.2 15.2z m-110.5-27.7c-2 0-3.7 1.6-3.7 3.7v8.9c0 2 1.6 3.7 3.7 3.7h110.5c2 0 3.7-1.6 3.7-3.7v-8.9c0-2-1.6-3.7-3.7-3.7H291.6zM346.9 654c-3.2 0-5.8-2.6-5.8-5.8v-15.6c0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8v15.6c-0.1 3.2-2.7 5.8-5.8 5.8z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M723.7 675H622.8c-0.8 0-1.5-0.7-1.5-1.5v-131c0-0.8 0.7-1.5 1.5-1.5h100.9c0.8 0 1.5 0.7 1.5 1.5v131c0 0.8-0.6 1.5-1.5 1.5z"
                      fill="#3d15cb"
                    ></path>
                    <path
                      d="M723.7 680.7H622.9c-4 0-7.3-3.3-7.3-7.3V542.6c0-4 3.3-7.3 7.3-7.3h100.8c4 0 7.3 3.3 7.3 7.3v130.8c0 4.1-3.3 7.3-7.3 7.3z m-96.6-11.5h92.4V546.8h-92.4v122.4z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M729 606.5H617.6c-5 0-9-4-9-9v-9.7c0-5 4-9 9-9H729c5 0 9 4 9 9v9.7c0 4.9-4.1 9-9 9z"
                      fill="#D8A128"
                    ></path>
                    <path
                      d="M728.5 612.2H618c-8.4 0-15.2-6.8-15.2-15.2v-8.9c0-8.4 6.8-15.2 15.2-15.2h110.5c8.4 0 15.2 6.8 15.2 15.2v8.9c0 8.4-6.8 15.2-15.2 15.2zM618 584.5c-2 0-3.7 1.6-3.7 3.7v8.9c0 2 1.6 3.7 3.7 3.7h110.5c2 0 3.7-1.6 3.7-3.7v-8.9c0-2-1.6-3.7-3.7-3.7H618z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M673.3 654c-3.2 0-5.8-2.6-5.8-5.8v-15.6c0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8v15.6c-0.1 3.2-2.6 5.8-5.8 5.8z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M664.3 273.2c10.9-7.9 14-22.7 7.2-34.3-21.9-37.4-76-111.6-161.5-111.6-92.6 0-143.4 74.7-163 112-6 11.5-2.6 25.7 7.9 33.3l0.2 0.1c12.8 9.3 30.8 5.1 38.4-8.8 18.9-34.6 58.2-90.1 116.5-90.1 56.6 0 97 56.4 116.4 91 7.6 13.6 25.3 17.5 37.9 8.4z"
                      fill="#5533ff"
                    ></path>
                    <path
                      d="M649.1 283.9c-2.3 0-4.6-0.2-6.8-0.7-8.8-1.9-16.4-7.6-20.9-15.5-18.5-32.9-57.5-88.1-111.4-88.1-55.7 0-93.8 54.6-111.5 87.1-4.4 8.1-12.1 13.9-21.1 15.9-8.9 2-18.3 0.1-25.7-5.2l-0.2-0.1c-12.8-9.2-16.9-26.7-9.6-40.7 10.3-19.6 28.2-47.9 55.4-71.6 33-28.8 70.9-43.4 112.7-43.4 38.7 0 75.1 14.5 108.4 43.2 27.4 23.6 46.7 51.8 58.1 71.3 8.3 14.2 4.5 32.2-8.8 41.8-5.5 3.9-12 6-18.6 6zM510 168.1c59.8 0 101.7 58.9 121.4 93.9 2.8 5 7.7 8.6 13.3 9.9 5.6 1.2 11.5 0 16.2-3.4 8.5-6.1 10.9-17.6 5.6-26.7-11-18.7-29.5-45.8-55.7-68.4-31.1-26.8-65-40.4-100.9-40.4-38.9 0-74.3 13.6-105.1 40.6-25.8 22.5-42.9 49.6-52.8 68.3-4.7 8.9-2 20.1 6.2 26l0.2 0.1c4.7 3.4 10.7 4.6 16.4 3.4 5.7-1.3 10.7-5 13.5-10.2 19.1-34.8 60-93.1 121.7-93.1z"
                      fill="#333336"
                    ></path>
                    <path d="M376.1 247.6L336 313" fill="#5533ff"></path>
                    <path
                      d="M331.041 309.941l40.114-65.371 9.802 6.014-40.114 65.372z"
                      fill="#333336"
                    ></path>
                    <path d="M644.2 247.6l40.1 65.4" fill="#5533ff"></path>
                    <path
                      d="M639.253 250.588l9.801-6.014 40.115 65.371-9.802 6.014z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M343 336.2h-67.8c-6.1 0-11-4.9-11-11v-11.9c0-6.1 4.9-11 11-11H343c6.1 0 11 4.9 11 11v11.9c0 6.1-5 11-11 11z"
                      fill="#3d15cb"
                    ></path>
                    <path
                      d="M342.4 342h-66.8c-9.5 0-17.3-7.8-17.3-17.3v-10.9c0-9.5 7.8-17.3 17.3-17.3h66.8c9.5 0 17.3 7.8 17.3 17.3v10.9c0 9.5-7.7 17.3-17.3 17.3z m-66.7-33.9c-3.2 0-5.8 2.6-5.8 5.8v10.9c0 3.2 2.6 5.8 5.8 5.8h66.8c3.2 0 5.8-2.6 5.8-5.8v-10.9c0-3.2-2.6-5.8-5.8-5.8h-66.8z"
                      fill="#333336"
                    ></path>
                    <path
                      d="M745 336.2h-67.8c-6.1 0-11-4.9-11-11v-11.9c0-6.1 4.9-11 11-11H745c6.1 0 11 4.9 11 11v11.9c0 6.1-4.9 11-11 11z"
                      fill="#3d15cb"
                    ></path>
                    <path
                      d="M744.4 342h-66.8c-9.5 0-17.3-7.8-17.3-17.3v-10.9c0-9.5 7.8-17.3 17.3-17.3h66.8c9.5 0 17.3 7.8 17.3 17.3v10.9c0 9.5-7.7 17.3-17.3 17.3z m-66.7-33.9c-3.2 0-5.8 2.6-5.8 5.8v10.9c0 3.2 2.6 5.8 5.8 5.8h66.8c3.2 0 5.8-2.6 5.8-5.8v-10.9c0-3.2-2.6-5.8-5.8-5.8h-66.8z"
                      fill="#333336"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Job Placement Assistance
                </h2>
                <p className="leading-relaxed text-justify text-base">
                  Our commitment goes beyond education; we're here to help you
                  land the job you've been dreaming of. Benefit from our job
                  placement assistance program, connecting you with top
                  employers actively seeking candidates with your skill set.
                </p>
                <Link
                  href="/services"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
}
