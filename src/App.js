import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button after 3 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1200);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='HomePage'>
      <div className='HomePage1'>
        <div className='Content1'>
          Hello, I am<br />
          <span className='NameStyle'>Harsha</span>
          <br />Full Stack Developer
        </div>

        {showButton && ( // Show button only after 3 seconds
          <button className='ToContent' onClick={scrollToAbout}>Scroll Down</button>
        )}
      </div>

      <div className='About' ref={aboutRef}>
        
        <div className='Resume'>

        <h1 className='ResumeHeading'><u><span className='ResumeContent1'>My </span></u><u>Resume</u></h1>
        
        <div className='ResumeContent'>
          
          <div>
            <h1 className='ResumeSideHeadings'><u>Education</u></h1><br/>
            <span className='ResumeContentPart'>
            <h1>Aditya Engineering College</h1><br/>
            <h1>B.Tech Computer Science and Engineering : CGPA 7.63</h1><br/>
            <h1>Batch 2021 - 2025</h1><br/>
            <h1>Location: Surampalem India</h1>
            </span>
          </div>
          <br/>
          <div>
            <h1 className='ResumeSideHeadings'><u>Skills</u></h1><br/>
            <span className='ResumeContentPart'>
            <h1>Languages: C, Java, JavaScript, Python.</h1><br/>
            <h1>Skills: Data Structures and Algorithms, Object Oriented Programming.</h1><br/>
            <h1>IDE: Eclipse, Jupyter Notebook, Vscode, Mongo Compass.</h1><br/>
            <h1>DataBases: MySQL, MongoDB.</h1><br/>
            <h1>Tools/Frameworks: Spring Boot, ReactJS, GitHub.</h1>
            </span>
          </div><br/>
          <div>
            <h1 className='ResumeSideHeadings'><u>Training and Internships</u></h1><br/>
            <span className='ResumeContentPart'>
            <h1>Galaxe.Solutions - Bangalore, India </h1><br/>
            <h1>Role: Web Application Developer - Internship</h1><br/>
            <h1>
            Successfully completed comprehensive training in full-stack development at Galaxe Solutions,
            focusing on Core Java, JavaScript, Spring Boot, ReactJS, MongoDB, MySQL.
            Developed a web application as a part of the training, showcasing proficiency in applying acquired
            skills to real-world projects.
            </h1></span>
            <br/>
            <span className='ResumeContentPart'>
            <h1>Technical Hub - Surampalem, India</h1><br/>
            <h1>Full stack development & DSA training</h1><br/>
            <h1>
            Underwent intensive FSD and Data Structures & Algorithms training, honing coding skills
            and problem-solving techniques
            </h1>
            </span>
            </div><br/>
          <div>
            <h1 className='ResumeSideHeadings'><u>Projects</u></h1><br/>
            <span className='ResumeContentPart'>
            <h1>Hospital Website:</h1><br/>
            <h1>Developed a responsive and user-friendly features, ensuring an optimal online suggestions service experience for patients.</h1><br/>
            <h1>Tech Stack: ReactJS, HTML, CSS, JavaScript, MongoDB</h1><br/>

            <h1>BusFleet Manager:</h1><br/>
            <h1>Developed a web application with ReactJS and Spring Boot to manage extensive bus data, including bus
            numbers, driver names, routes, and starting/ending points, with a focus on robust data management
            and user-friendly interface.
            Enhanced backend performance and ensured seamless frontend integration, delivering a scalable
            and maintainable solution for large-scale transportation data management.</h1><br/>
            <h1>Tech Stack: ReactJS, Spring Boot, MySQL.</h1><br/>

            <h1>From Data to Decisions: Healthcare Analytics with Java Full Stack </h1><br/>
            <h1>This application is designed to analyze healthcare data through clustering (along with PCA) and visualization using
            ReactJS and Spring Boot.</h1><br/>
            <h1>Tech Stack: ReactJS, Spring Boot, MySQL.</h1>
            </span>

          </div><br/>
          <div>
            <h1 className='ResumeSideHeadings'><u>Cerifications</u></h1><br/>
            <span className='ResumeContentPart'>
            <h1>HTML and CSS - Certified from IT Specialist</h1><br/>
            <h1>JAVA Foundations - Certified from Oracle Academy</h1><br/>
            <h1>Database Management System - Certified By NPTEL</h1><br/>
            <h1>RHCSA - Certified from REDHAT</h1><br/>
            <h1>ML with Python - Certified by (IBM-edx)</h1><br/>
            <h1>Python-IT specialist - Certified from Pearson</h1><br/>
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;