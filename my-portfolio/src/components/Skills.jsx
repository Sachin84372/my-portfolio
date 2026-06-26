import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaPython />,
      name: "Python",
      level: "90%",
      desc: "Automation & Backend Development",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "95%",
      desc: "Semantic & Responsive Layouts",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: "90%",
      desc: "Modern UI & Animations",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "85%",
      desc: "Interactive Applications",
    },
    {
      icon: <FaReact />,
      name: "React JS",
      level: "80%",
      desc: "Component-Based Development",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: "85%",
      desc: "Version Control",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: "90%",
      desc: "Collaboration & Deployment",
    },
  ];

  return (
    <>
      <style>{`

      .skills{
        min-height:100vh;
        padding:120px 8%;
      }

      .skills-title{
        text-align:center;
        font-size:3rem;
        margin-bottom:15px;

        background:linear-gradient(
        90deg,
        #38bdf8,
        #60a5fa
        );

        -webkit-background-clip:text;
        color:transparent;
      }

      .skills-subtitle{
        text-align:center;
        color:#94a3b8;
        margin-bottom:60px;
      }

      .skills-container{
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(280px,1fr));

        gap:25px;
      }

      .skill-card{
        background:rgba(17,24,39,.8);

        backdrop-filter:blur(10px);

        border:1px solid rgba(255,255,255,.05);

        padding:25px;

        border-radius:20px;

        transition:.4s;
      }

      .skill-card:hover{
        transform:
        translateY(-10px)
        scale(1.03);

        box-shadow:
        0 15px 35px rgba(56,189,248,.25);
      }

      .skill-icon{
        font-size:3rem;
        color:#38bdf8;

        margin-bottom:15px;

        transition:.3s;
      }

      .skill-card:hover .skill-icon{
        transform:scale(1.15);

        filter:
        drop-shadow(
        0 0 12px #38bdf8
        );
      }

      .skill-card h3{
        margin-bottom:10px;
      }

      .skill-card p{
        color:#94a3b8;
        margin-bottom:15px;
      }

      .skill-level{
        display:flex;
        justify-content:space-between;

        margin-bottom:8px;
      }

      .progress{
        width:100%;
        height:8px;

        background:#1e293b;

        border-radius:20px;

        overflow:hidden;
      }

      .progress-bar{
        height:100%;

        background:
        linear-gradient(
        90deg,
        #38bdf8,
        #60a5fa
        );

        border-radius:20px;
      }

      @media(max-width:768px){

        .skills-title{
          font-size:2.3rem;
        }

      }

      `}</style>

      <section
        id="skills"
        className="skills"
        data-aos="zoom-in"
      >

        <h2 className="skills-title">
          My Skills
        </h2>

        <p className="skills-subtitle">
          Technologies and tools I use to build
          modern web applications.
        </p>

        <div className="skills-container">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.desc}</p>

              <div className="skill-level">
                <span>Proficiency</span>
                <span>{skill.level}</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: skill.level,
                  }}
                ></div>
              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default Skills;