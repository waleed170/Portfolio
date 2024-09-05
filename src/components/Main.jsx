import React, { useEffect } from 'react';
import mainImage from './WhatsApp Image 2023-05-22 at 20.07.010.jpg';
import '../styles/style.css';


const Main = () => {
  useEffect(() => {
    document.title = "Welcome to Waleed Monim's Portfolio";
    
    
    return () => {
      
      document.title = "React App";
    };
  }, []); 
  return (
    <main>
      <section id="home" className="home">
        <div className="home-img">
          <img src={mainImage} alt="image not found" />
        </div>
        <div className="home-content">
          <h1>Hi, it's <span>Waleed Monim</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>I’m a software engineer with a passion for creating innovative solutions and building efficient applications. I’m skilled in multiple programming languages and enjoy tackling complex problems. I’m always eager to learn new technologies and enhance my expertise.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/waleed-monim/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            
            <a href="https://www.instagram.com/iwaleed.18/"><i className="fa-brands fa-instagram"></i></a>
          </div>
          
        </div>
      </section>

      <section id="skills" className="skills">
  <h2>Skills</h2>
  <p>I have a diverse set of skills, ranging from design to development:</p>
  <ul>
    <li>Proficient in HTML, CSS, and JavaScript</li>
    <li>Experienced with React, Tailwind and Flowbite</li>
    <li>Strong understanding of responsive web design</li>
    <li>Familiar with backend development using Node.js and Python</li>
    <li>Database management with SQL</li>
    <li>Version control using Git and GitHub</li>
  </ul>
</section>


<section id="education" className="education">
  <h2>Education</h2>
  <p>My academic background has provided me with a solid foundation in software engineering:</p>
  <ul>
    <li>Bachelor of Science in Software Engineering, Lahore Garrison University, 2021-2025</li>
    <li>Certification in Python Development, Harvard University, 2023</li>
  </ul>
</section>


<section id="experience" className="experience">
  <h2>Experience</h2>
  <div className="experience-item">
    <h3>Software Engineer</h3>
    <p>Fa21 2021 - Present</p>
    <p>Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to design, build, and deploy scalable software solutions.</p>
  </div>
  <div className="experience-item">
    <h3>Frontend Developer at SS</h3>
    <p>July 2020 - May 2022</p>
    <p>Worked on improving the user experience and interface of various web applications. Led the development of responsive and accessible UI components using HTML, CSS, and JavaScript.</p>
  </div>
</section>


      <section id="contact" className="contact">
  <h2>Contact</h2>
  <p>If you'd like to reach out to me, feel free to contact me through the following:</p>
  <ul>
    <li>Email: waleedmonim18@gmail.com</li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/waleed-monim/">www.linkedin.com/in/waleed-monim</a></li>

  </ul>
</section>


    </main>
  );
};

export default Main;


















