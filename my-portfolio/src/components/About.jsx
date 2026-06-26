import {
  FaCode,
  FaLaptopCode,
  FaPython,
  FaReact,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";
import myImage from "../assets/Sachin.jpeg";
function About() {
  return (
    <>
      <style>{`

      .about{
        min-height:100vh;
        padding:120px 8%;

        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:60px;
      }

      .about-image{
        flex:1;
        display:flex;
        justify-content:center;
      }

      .about-image img{
        width:380px;
        height:380px;

        object-fit:cover;

        border-radius:25px;

        border:4px solid #38bdf8;

        box-shadow:
        0 0 40px rgba(56,189,248,.3);

        transition:.4s;
      }

      .about-image img:hover{
        transform:scale(1.05);

        box-shadow:
        0 0 70px rgba(56,189,248,.5);
      }

      .about-content{
        flex:1;
      }



      .about-title{
        font-size:3rem;

        margin-bottom:20px;

        background:linear-gradient(
        90deg,
        #38bdf8,
        #60a5fa
        );

        -webkit-background-clip:text;
        color:transparent;
      }




      .about-content p{
        color:#94a3b8;
        line-height:1.8;
        margin-bottom:20px;
      }



      .stats{
        display:flex;
        gap:25px;

        margin:30px 0;
      }




      .stat-box{
        flex:1;

        background:#111827;

        padding:20px;

        border-radius:15px;

        text-align:center;

        transition:.3s;
      }



      .stat-box:hover{
        transform:translateY(-8px);

        box-shadow:
        0 10px 30px rgba(56,189,248,.2);
      }



      .stat-box h3{
        color:#38bdf8;
        font-size:1.8rem;
      }



      .about-cards{
       display:grid; 

       grid-template-columns:
       repeat(3,1fr);

        gap:20px;

        margin-top:30px;
       }





      .about-card{
        background:rgba(17,24,39,.8);

        backdrop-filter:blur(10px);

        padding:20px;

        border-radius:18px;

        text-align:center;

        border:1px solid rgba(255,255,255,.05);

        transition:.4s;
      }

      
      .about-card:hover{
        transform:
        translateY(-10px);

        box-shadow:
        0 12px 30px rgba(56,189,248,.2);
      }



      .about-card svg{
        font-size:2rem;

        color:#38bdf8;

        margin-bottom:12px;
      }


      .about-card h4{
        margin-bottom:10px;
      }



      .about-card p{
        font-size:.9rem;
        margin:0;
      }



@media(max-width:1000px){

  .about-cards{
    grid-template-columns:
    repeat(2,1fr);
  }



.about-image::before{
  content:"";
  position:absolute;

  width:420px;
  height:420px;

  border-radius:50%;

  background:
  radial-gradient(
    rgba(56,189,248,.4),
    transparent 70%
  );

  filter:blur(40px);

  z-index:-1;
}



.about-image img:hover{
  transform:scale(1.05);

  box-shadow:
  0 0 70px rgba(56,189,248,.7);
}

    `} 
      </style>

      <section
        id="about"
        className="about"
        data-aos="fade-right"
      >

        <div className="about-image">

              <img
                 src={myImage}
                 alt="Profile"
                 width="250"
               />

        </div>

        <div className="about-content">

          <h2 className="about-title">
            About Me
          </h2>

         <p>
        I'm Sachin Kumar, a B.Tech Computer Science Engineering
         student with strong interests in Full Stack Development,
         Python, React, SQL, and Software Engineering.
        </p>

          <p>
          My goal is to become a skilled Software Engineer by
          building real-world applications, mastering Data
          Structures & Algorithms, and continuously improving
          my technical expertise through projects and hands-on learning.
          </p>

         <div className="stats">

         <div className="stat-box">
         <h3>6+</h3>
         <p>Projects</p>
         </div>

         <div className="stat-box">
         <h3>100+</h3>
         <p>Coding Problems</p>
         </div>

        <div className="stat-box">
        <h3 style={{fontSize:"1rem"}}>
          React | Python | SQL
          </h3>
        <p>Core Skills</p>
          </div>

</div>

      <div className="about-cards">

  <div className="about-card">
    <FaCode />
    <h4>Frontend Development</h4>
    <p>React • JavaScript • HTML • CSS</p>
  </div>

  <div className="about-card">
    <FaLaptopCode />
    <h4>Backend Development</h4>
    <p>Node.js • Express.js • REST APIs</p>
  </div>

  <div className="about-card">
    <FaProjectDiagram />
    <h4>Database</h4>
    <p>SQL • MySQL • PostgreSQL</p>
  </div>

  <div className="about-card">
    <FaPython />
    <h4>Programming</h4>
    <p>Python • DSA • OOP</p>
  </div>

  <div className="about-card">
    <FaReact />
    <h4>Tools</h4>
    <p>Git • GitHub • Linux</p>
  </div>

  <div className="about-card">
    <FaGraduationCap />
    <h4>Education</h4>
    <p>B.Tech CSE (2023-2027)</p>
  </div>

</div>
        </div>

      </section>
    </>
  );
}

export default About;
