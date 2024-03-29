"use client"
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import Stars from "../components/Stars";
import Diabetes from "../components/Diabetes";
import Heart from "../components/Heart";
import Lungs from "../components/LungCancer";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Stars />
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        {/* <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Precise Detection of Diabetes, Heart Attacks, and Lung Cancer
        </a> */}
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Unleashing the Power of {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative"> AI and Web  </span>
          </span>{" "}
          to Safeguard Your Health
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Harnessing Data for Early Detection and Personalized Care in Diabetes, Heart Attack, and Lung Cancer Prevention
        </h2>
        <Link
          className="bg-blue-600 rounded-full text-white font-medium px-6 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Get Started
        </Link>
        <div className="flex justify-between items-center w-full h-full flex-col gap-10 sm:mt-10 mt-40">
          {/* <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div> */}
          <Diabetes />  
          <Heart />  
          <Lungs />  
        </div>
      </main>
      <Footer />
    </div>
  );
}
