import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTrash, FaPlus } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "School Management System",
      description:
        "A web-based platform to manage students, attendance, teachers, and academic records.",
    },
    {
      id: 2,
      title: "AI Fake News Detector",
      description:
        "Machine Learning based application that identifies fake and misleading news articles.",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "React application using weather APIs to display real-time weather updates.",
    },
  ]);

  const addProject = () => {
    const title = prompt("Enter Project Name");

    if (title) {
      setProjects([
        ...projects,
        {
          id: Date.now(),
          title,
          description: "New Project Description",
        },
      ]);
    }
  };

  const deleteProject = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (confirmDelete) {
    setProjects(
      projects.filter((project) => project.id !== id)
    );
  }
};

  return (
    <>
      <style>{`
      
      .projects{
        min-height:100vh;
        padding:100px 8%;
      }

      .projects-title{
        text-align:center;
        margin-bottom:60px;
      }

      .projects-title h4{
        font-size:3rem;
        color:#38bdf8;
      }

      .projects-title p{
        color:#94a3b8;
      }

      .project-grid{
       display:grid;
       grid-template-columns:repeat(auto-fit,minmax(280px,340px));
       justify-content:center;
       gap:25px;
      }
     .project-card{
      background:rgba(15,23,42,.8);
      backdrop-filter:blur(15px);
      border:1px solid rgba(56,189,248,.15);
      border-radius:24px;
      overflow:hidden;
     transition:.4s;
     position:relative;
     }

     .project-card:hover{
     transform:translateY(-12px);
     box-shadow:
     0 0 30px rgba(56,189,248,.2),
     0 0 60px rgba(56,189,248,.08);
     }

     .project-image{
      height:180px;
      background:linear-gradient(
      135deg,
      rgba(56,189,248,.25),
      rgba(15,23,42,1)
      );
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:4rem;
      color:#38bdf8;
     }

      .project-content{
        padding:25px;
      }

      .project-content h3{
        color:white;
        margin-bottom:10px;
      }

      .project-content p{
        color:#94a3b8;
        line-height:1.6;
      }

      .tech-stack{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin:20px 0;
      }

      .tech-stack span{
        background:#1e293b;
        color:#38bdf8;
        padding:6px 12px;
        border-radius:20px;
        font-size:.8rem;
      }

      .project-buttons{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
      }

      .project-buttons button{
       border:none;
      cursor:pointer;
      width:42px;
      height:42px;
      border-radius:12px;
      font-size:1rem;
      transition:.3s;
     }

      .project-buttons button:hover{
      transform:translateY(-4px);
     }

      .live-btn{
        background:#38bdf8;
      }

      .github-btn{
        background:#1e293b;
        color:white;
      }

      .delete-btn{
        background:#ef4444;
        color:white;
      }

      .add-project{
        display:flex;
        justify-content:center;
        margin-top:50px;
      }

      .add-btn{
     background:#38bdf8;
     color:#081229;
     border:none;
     padding:15px 30px;
     border-radius:50px;
     cursor:pointer;
     font-weight:700;
     display:flex;
     gap:10px;
     align-items:center;
     transition:.3s;
    }

     .add-btn:hover{
      transform:translateY(-5px);
      box-shadow:0 0 25px rgba(56,189,248,.4);
    }

      `}</style>

      <section id="projects" className="projects">
        <div className="projects-title">
          <h4>Projects</h4>
          <p>
            A collection of projects showcasing my skills in
            React, JavaScript, Python, APIs, and problem solving.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image"></div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>

                <div className="project-buttons">
                  <button className="github-btn">
                    <FaGithub />
                  </button>

                  <button className="live-btn">
                    <FaExternalLinkAlt />
                  </button>

                 <button
                   className="delete-btn"
                   title="Delete Project"
                   onClick={() => deleteProject(project.id)}
                   >
                  <FaTrash />
                 </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="add-project">
          <button className="add-btn" onClick={addProject}>
            <FaPlus />
            Add Project
          </button>
        </div>
      </section>
    </>
  );
}

export default Projects;