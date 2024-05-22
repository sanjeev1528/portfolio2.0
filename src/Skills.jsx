import React from 'react'
import { useState } from 'react'
import { Element } from 'react-scroll';

function Skills() {

    const [dbhidden, setDbhidden] = useState(false);
    const [nodehidden, setNodehidden] = useState(false);
    const [chidden, setChidden] = useState(false);
    const [htmlhidden, setHtmlhidden] = useState(false);
    const [jshidden, setJshidden] = useState(false);
    return (

        <>
            <Element className='flex flex-col justify-center items-center' name='skills-section'>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">SKILLS</h1>
               
                <p className="max-w-4xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 m-0 p-0">Proficient in C programming and database management, I create efficient software solutions while optimizing data storage for dynamic applications. As a full-stack developer, I craft responsive user interfaces using HTML/CSS/JS, seamlessly integrating backend functionalities for comprehensive solutions.</p>
                
            </Element>

            {/* <div data-popover id="popover-default-sk" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div> */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 w-4/5 m-auto mt-10">


                <div  className="max-w-40 h-32 bg-gray-600 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-500 relative" onMouseEnter={() => setChidden(true)} onMouseLeave={() => setChidden(false)}>
                    <a href="#">
                        <img className="rounded-t-lg h-5/6 w-full object-fill relative" src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png" alt="" />
                    </a>
                    {chidden &&
                    <div className="p-2 absolute top-0 bg-green-200 mb-5 h-60 bg-gradient-to-r from-green-200 to-gray-200">
                   
                     
                            <p  className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">I'm experienced in using C for various tasks like creating software, working with systems, and making programs that run on different types of computers.</p>
                        
                        </div>
                       }
                </div>

                <div className="max-w-40 h-32 bg-gray-600 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-500 relative" onMouseEnter={() => setHtmlhidden(true)} onMouseLeave={() => setHtmlhidden(false)}>
                    <a href="#">
                        <img className="rounded-t-lg h-5/6 w-full object-fill" src="https://i.pinimg.com/originals/8b/50/6a/8b506a90c382e610556d51c957d3999f.jpg" alt="" />
                    </a>
                    {htmlhidden &&
                    <div className="p-2 absolute top-0 bg-green-200 h-60 bg-gradient-to-r from-green-200 to-gray-200">
                        
                       
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">Developed responsive and visually appealing websites using modern HTML and CSS techniques. Implemented CSS frameworks like Bootstrap for rapid prototyping.</p>
                        
                    </div>
                  }
                </div>


                <div className="max-w-40 h-32 bg-gray-600 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-500 relative" onMouseEnter={() => setJshidden(true)} onMouseLeave={() => setJshidden(false)}>
                    <a href="#">
                        <img className="rounded-t-lg h-5/6 w-full object-fill" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                    </a>
                    {jshidden &&
                    <div className="p-2 absolute top-0 bg-green-200 h-60 bg-gradient-to-r from-green-200 to-gray-200 ">
                       
                       
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm"> Built interactive user interfaces and dynamic web applications using JavaScript. Proficient in ES6+ syntax and modern JavaScript frameworks like ReactJS.</p>
                     

                    </div>
                       }
                </div>

                <div className="max-w-40 h-32 bg-gray-600 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-500 relative" onMouseEnter={() => setNodehidden(true)} onMouseLeave={() => setNodehidden(false)}>
                    <a href="#">
                        <img className="rounded-t-lg h-5/6 w-full object-fill" src="https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp" alt="" />
                    </a> 
                    {nodehidden &&
                    <div className="p-2 absolute top-0 bg-green-200 h-60 bg-gradient-to-r from-green-200 to-gray-200 ">
                       
                       
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">Utilized Node.js for server-side scripting and building scalable web applications. Experience with Express.js for middleware development and RESTful API design.</p>
                      

                    </div>
                   }
                </div>

                <div className="max-w-40 h-32 bg-gray-600 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-500 relative" onMouseEnter={() => setDbhidden(true)} onMouseLeave={() => setDbhidden(false)}>
                    <a href="#">
                        <img className="rounded-t-lg h-5/6 w-full object-fill" src="https://c1.klipartz.com/pngpicture/293/545/sticker-png-sql-server-logo-data-database-microsoft-sql-server-amazon-relational-database-service-line-cylinder-line-art.png" alt="" />
                    </a>
                    {dbhidden &&
                    <div className="p-2 absolute top-0 bg-green-200 h-60 bg-gradient-to-r from-green-200 to-gray-200">
                      
                      
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">Proficient in designing and optimizing relational and NoSQL databases, including MongoDB and Supabase, to support dynamic applications and scalable data storage solutions.</p>
                   


                    </div>
                         }
                </div>



            </div>



        </>
    )
}

export default Skills