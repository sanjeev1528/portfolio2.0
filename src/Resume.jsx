import React from 'react'
import "./Resume.css"

function Resume() {
  return (
    <div className="main">
        <div className="heading">
            <div className="intro">
                <div className="head-name-div">
                    <h3 className="head-name">SANJEEV KUMAR M<Menu:context></Menu:context>
                    </h3>
                </div>
                <div className="each-head-line">
                    <p className="bold">Gmail:</p>
                    <p>sanjeevcsevec@gmail.com</p>
                </div>
                <div className="each-head-line">
                    <p className="bold">Mobile:</p>
                    <p>6380660496</p>
                </div>
                <div className="each-head-line">
                    <p className="bold">Linkedin Profile:</p>
                    <p>https://www.linkedin.com/in/sanjeev-kumar-6486b2250 </p>
                </div>
                <div className="each-head-line">
                    <p className="bold">Github Profile:</p>
                    <p>https://github.com/sanjeev1528 </p>
                </div>
                <div className="each-head-line">
                    <p className="bold">Address:</p>
                    <p>No:660, SSV Nagar, Alinjjivakkam, Redhills, Chennai. </p>
                </div>
            </div>
            <div className="pho">
                <img className="image" src="/sanjeev-pho.jpg" alt="" />
            </div>
        </div>
        <hr />
        <div className="content">
            <h2>Career Objective</h2>
            <p>A highly motivated and hardworking individual looking for a responsible role in a reputable
                organization where I can launch my career and build a valuable skill set. </p>
            <hr />
        </div>

        <h2>Education</h2>
        <div className="table">
            <table className="edu-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Name Of the Institute</th>
                        <th>Cgpa</th>
                        <th>Year of passing</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.E.
                            Computer Science
                            Engineering </td>
                        <td>Veleammal Engineering
                            College, Chennai </td>
                        <td>8.84</td>
                        <td>2025</td>
                        <td>Anna University</td>
                    </tr>
                    <tr>
                        <td>HSC
                            (12th standard) </td>
                        <td>Velammal Vidhyashram,
                            Chennai </td>
                        <td>8.84</td>
                        <td>2025</td>
                        <td>anna university</td>
                    </tr>
                    <tr>
                        <td>SSLC
                            (10th standard) </td>
                        <td>Velammal Vidhyashram,
                            Chennai</td>
                        <td>8.84</td>
                        <td>2025</td>
                        <td>CBSE</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />


        <div className="content">
            <h2>Skills:</h2>
            <div className="skills">
                <div className="skill-left">
                    <h3>Programming skill</h3>
                    <ul>
                        <li>html</li>
                        <li>html</li>
                        <li>html</li>
                    </ul>
                </div>
                <div className="skill-right">
                    <h3>Soft skill</h3>
                    <ul>
                        <li>html</li>
                        <li>html</li>
                        <li>html</li>
                    </ul>
                </div>
            </div>
            <hr/>
        </div>

        <div className="content">
            <h2>Projects</h2>
            <h3>Sea Sale Application</h3>
            <ul>
                <li> An android mobile application used for fishmongers for effective sale and customer
                    satisfaction.</li>
                <li>It updates daily sale and stock details publicly for customer access. </li>
            </ul>

            <h3>Ecommerce Website</h3>
            <ul>
                <li> A responsive online shopping Website. </li>
                <li>Allows users to sell and buy physical products and services online. </li>
            </ul>
            <hr />
        </div>

        <div className="content">
            <h2>Internships:</h2>
            <ul>
                <li> <span>NSIC– Technical Service Centre [12th-June-2023 to 16th-June- 2023] </span>
                    Successfully completed one week Internship training on “Android Application
                    Development”. </li>
            </ul>


            <ul>
                <li><span>Gustovalley Technovation [Oct 2022 - Nov 2022 ] </span>
                    Successfully completed one month Internship training on “Industry 4.O”. </li>
            </ul>
            <hr />
        </div>

        <div className="content">

            <h2>Proffessional Certificates:</h2>
            <ul>
                <li> Advance diploma in java programming (ISO certification) </li>
                <li> Honour diploma in computer application (ISO certification) </li>
                <li> Database management system (NPTEL certification) </li>
                <li> Python for DataScience (NPTEL certification)</li>
                <li> Android devolopment using java (Online certification) </li>
            </ul>
            <hr />
        </div>

        <div className="content">

            <h2>Workshops</h2>
            <ul>
                <li> Participated in “Code the node and way to cloud” workshop conducted by CDW(3 days). </li>
                <li>Participated in “Full stack development using Flask” conducted in OZMENTA’22. </li>

            </ul>
            <hr />
        </div>

        <div className="content">

            <h2>Area of Interest:</h2>
            <ul>
                <li> Object Oriented Programming </li>
                <li>Data Stuctures </li>
                <li> Web Development </li>

            </ul>
            <hr />
        </div>

        <div className="content">

            <h2>Hobbies:</h2>
            <ul>
                <li> Online problem solving in many coding platforms (HackerRank, skillRack). </li>
                <li>Listening to Music. </li>

            </ul>
            <hr />
        </div>

        <div className="footer">
            <div className="left-foot">
                <span className="bold">Date: </span><span>23/12/2023</span> <br />
                <span className="bold"> Place: </span><span>Chennai</span>
            </div>
            <div className="right-foot">
                <p> M SANJEEV KUMAR</p>
            </div>
        </div>




    </div>
    

  )
}

export default Resume