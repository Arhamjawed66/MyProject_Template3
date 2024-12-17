"use client"
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing social media icons

const Footer: React.FC = () => {
  return (
    <footer className="text-black bg-slate-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Image src={"/images/navlogo/Frame.png"}
            alt='nike'
            width={100}
            height={50}
            className='text-white  hover:text-slate-100'/>
        <span className="ml-3  font-bold text-2xl  hover:text-slate-100" >Nike</span>
         
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10  ">
              <li>
                <a className="text-black hover:text-slate-100">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-mediu text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-black hover:text-slate-100">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-mediu text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-black hover:text-slate-100">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-mediu text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-black hover:text-slate-100">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-slate-100">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Nike —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-black ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <FaYoutube size={20} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 