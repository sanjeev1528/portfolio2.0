
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

function Skills() {
    const [dbhidden, setDbhidden] = useState(false);
    const [nodehidden, setNodehidden] = useState(false);
    const [chidden, setChidden] = useState(false);
    const [htmlhidden, setHtmlhidden] = useState(false);
    const [jshidden, setJshidden] = useState(false);

    const popoverColor = 'bg-gradient-to-r from-green-200 via-blue-300 to-purple-400'; 

    return (
        <>
            <Element className='flex flex-col justify-center items-center'  name='skills-section'>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-300 to-purple-400">
                    SKILLS
                </h1>
                <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center px-4">
                    Proficient in C programming and database management, I create efficient software solutions while optimizing data storage for dynamic applications. As a full-stack developer, I craft responsive user interfaces using HTML/CSS/JS, seamlessly integrating backend functionalities for comprehensive solutions.
                </p>
           

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 w-11/12 mx-auto lg:mt-10 my-6">
                {/* C Programming Card */}
                <motion.div 
                    className="bg-gray-800 border border-gray-300 rounded-lg lg:h-auto w-full lg:w-full dark:bg-gray-900 shadow-2xl shadow-blue-300 relative cursor-pointer" 
                    onMouseEnter={() => setChidden(true)} onMouseLeave={() => setChidden(false)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 150 }}
                >
                    <img className="rounded-t-lg h-4/5  w-full object-cover" src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png" alt="C Programming" />
                    {chidden && (
                        <motion.div 
                            className={`p-2 sm:hidden lg:block rounded-t-lg absolute top-0 h-full ${popoverColor}`}
                            initial={{ opacity: 0, scale: 0.95 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.4 }}
                        >
                            <p className="mb-3 font-normal text-black text-xs sm:text-sm md:text-base">
                                I'm experienced in using C for various tasks like creating software, working with systems, and making programs that run on different types of computers.
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* HTML/CSS Card */}
                <motion.div 
                    className="bg-gray-800 border border-gray-300 rounded-lg  lg:h-auto w-full lg:w-full dark:bg-gray-900 shadow-2xl shadow-blue-300 relative cursor-pointer" 
                    onMouseEnter={() => setHtmlhidden(true)} onMouseLeave={() => setHtmlhidden(false)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 150 }}
                >
                    <img className="rounded-t-lg h-4/5  w-full object-cover" src="https://i.pinimg.com/originals/8b/50/6a/8b506a90c382e610556d51c957d3999f.jpg" alt="HTML/CSS" />
                    {htmlhidden && (
                        <motion.div 
                            className={`p-2 sm:hidden lg:block rounded-t-lg absolute top-0 h-full ${popoverColor}`}
                            initial={{ opacity: 0, scale: 0.95 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.4 }}
                        >
                            <p className="mb-3 font-normal text-black text-xs sm:text-sm md:text-base">
                                Developed responsive and visually appealing websites using modern HTML and CSS techniques. Implemented CSS frameworks like Bootstrap for rapid prototyping.
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* JavaScript Card */}
                <motion.div 
                    className="bg-gray-800 border border-gray-300 rounded-lg lg:h-auto w-full lg:w-full dark:bg-gray-900 shadow-2xl shadow-blue-300 relative cursor-pointer" 
                    onMouseEnter={() => setJshidden(true)} onMouseLeave={() => setJshidden(false)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 150 }}
                >
                    <img className="rounded-t-lg h-4/5  w-full object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" />
                    {jshidden && (
                        <motion.div 
                            className={`p-2 sm:hidden lg:block rounded-t-lg absolute top-0 h-full ${popoverColor}`}
                            initial={{ opacity: 0, scale: 0.95 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.4 }}
                        >
                            <p className="mb-3 font-normal text-black text-xs sm:text-sm md:text-base">
                                Built interactive user interfaces and dynamic web applications using JavaScript. Proficient in ES6+ syntax and modern JavaScript frameworks like ReactJS.
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Node.js Card */}
                <motion.div 
                    className="bg-gray-800 border border-gray-300 rounded-lg lg:h-auto w-full lg:w-full dark:bg-gray-900 shadow-2xl shadow-blue-300 relative cursor-pointer" 
                    onMouseEnter={() => setNodehidden(true)} onMouseLeave={() => setNodehidden(false)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 150 }}
                >
                    <img className="rounded-t-lg h-4/5  w-full object-cover" src="https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp" alt="Node.js" />
                    {nodehidden && (
                        <motion.div 
                            className={`p-2 sm:hidden lg:block rounded-t-lg absolute top-0 h-full ${popoverColor}`}
                            initial={{ opacity: 0, scale: 0.95 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.4 }}
                        >
                            <p className="mb-3 font-normal text-black text-xs sm:text-sm md:text-base">
                                Utilized Node.js for server-side scripting and building scalable web applications. Experience with Express.js for middleware development and RESTful API design.
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Database Card */}
                <motion.div 
                    className="bg-gray-800 border border-gray-300 rounded-lg  lg:h-auto w-full lg:w-full dark:bg-gray-900 shadow-2xl shadow-blue-300 relative cursor-pointer" 
                    onMouseEnter={() => setDbhidden(true)} onMouseLeave={() => setDbhidden(false)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 150 }}
                >
                    <img className="rounded-t-lg h-4/5  w-full object-cover" src="https://c1.klipartz.com/pngpicture/293/545/sticker-png-sql-server-logo-data-database-microsoft-sql-server-amazon-relational-database-service-line-cylinder-line-art.png" alt="Database" />
                    {dbhidden && (
                        <motion.div 
                            className={`p-2 sm:hidden rounded-t-lg lg:block absolute top-0 h-full ${popoverColor}`}
                            initial={{ opacity: 0, scale: 0.95 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.4 }}
                        >
                            <p className="mb-3 font-normal text-black text-xs sm:text-sm md:text-base">
                                Proficient in designing and optimizing relational and NoSQL databases, including MongoDB and Supabase, to support dynamic applications and scalable data storage solutions.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            </Element>
        </>
    );
}

export default Skills;


