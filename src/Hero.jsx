
import React from 'react';
import "./index.css";
import { Element } from 'react-scroll';
import { motion } from 'framer-motion'; // For animations

function Hero() {
    return (
        <Element className="bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 dark:bg-gray-900" style={{"height":"90vh"}} name='home-section'>
            <div className="grid max-w-screen-xl px-4 py-36 my-auto mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <motion.h1 
                        className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                        initial={{ opacity: 0, y: -50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.2 }}
                    >
                        SANJEEV KUMAR M
                    </motion.h1>
                    
                    <motion.p 
                        className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.5, delay: 0.3 }}
                    >
                        As a student, my goal is to excel in computer science, enhance my skills, and contribute positively to make my parents proud.
                    </motion.p>
                    
                    <motion.div 
                        className="flex space-x-4"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5 }}
                    >
                        <a href="#"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            About Me
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="/sanjeev-resumeee.pdf" download="sanjeev_resume"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-400 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300">
                            Resume
                        </a>
                    </motion.div>
                </div>

                <motion.div 
                    className="hidden lg:mt-0 lg:col-span-5 lg:flex"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.2, delay: 0.8 }}
                >
                    <motion.img src="/green_pho.jpg" 
                     className="rounded-full border-4 border-yellow-300 transform hover:rotate-6 transition-transform duration-500 image-sk shadow-lg shadow-black"/>
                </motion.div>
            </div>
        </Element>
    );
}

export default Hero;
