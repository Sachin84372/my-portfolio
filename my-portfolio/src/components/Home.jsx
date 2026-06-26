import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import myImage from "../assets/Sachin.jpeg";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Python Developer",
        "React Developer",
        "Frontend Developer",
        "Problem Solver",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
.home{
  min-height:100vh;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:120px 8%;
  gap:60px;
  overflow:hidden;
}
      .blur-circle{
        position:absolute;
        width:500px;
        height:500px;
        background:#38bdf8;
        border-radius:50%;
        opacity:.15;
        filter:blur(120px);
        top:10%;
        right:-10%;
      }

      .home-content{
        flex:1;
        z-index:2;
      }

      .intro{
        color:#38bdf8;
        font-size:1.2rem;
        margin-bottom:10px;
        font-weight:500;
      }

      .home-content h1{
        font-size:3.5rem;
        font-weight:700;
        line-height:1.2;
        margin-bottom:10px;
      }

      .name{
        color:#38bdf8;
        text-shadow:0 0 20px rgba(56,189,248,.6);
      }

      .typing{
        color:#38bdf8;
        font-size:2rem;
        font-weight:700;
        min-height:70px;
        text-shadow:0 0 15px rgba(56,189,248,.5);
      }

      .description{
        color:#94a3b8;
        max-width:650px;
        line-height:1.8;
        margin-top:20px;
        font-size:1rem;
      }

      .social-icons{
        display:flex;
        gap:20px;
        margin:35px 0;
      }

      .social-icons a{
        width:55px;
        height:55px;
        display:flex;
        align-items:center;
        justify-content:center;

        border:2px solid #38bdf8;
        border-radius:50%;

        color:#38bdf8;
        font-size:1.4rem;

        transition:.4s ease;
      }

      .social-icons a:hover{
        background:#38bdf8;
        color:#081b29;

        transform:
        translateY(-8px)
        rotate(360deg);

        box-shadow:
        0 0 25px rgba(56,189,248,.8);
      }

      .home-buttons{
        display:flex;
        gap:20px;
        flex-wrap:wrap;
      }

      .btn-primary,
      .btn-secondary{
        padding:14px 28px;
        border-radius:12px;
        font-weight:600;
        cursor:pointer;
        text-decoration:none;
        transition:.3s ease;
      }

      .btn-primary{
        border:none;
        color:#081b29;

        background:
        linear-gradient(
          135deg,
          #38bdf8,
          #0ea5e9
        );
      }

      .btn-secondary{
        border:2px solid #38bdf8;
        color:white;
        background:transparent;
      }

      .btn-primary:hover,
      .btn-secondary:hover{
        transform:translateY(-5px);

        box-shadow:
        0 0 30px rgba(56,189,248,.5);
      }

      .home-image{
        flex:1;
        display:flex;
        justify-content:center;
        position:relative;
      }

      .home-image::before{
        content:"";
        position:absolute;

        width:430px;
        height:430px;

        border-radius:50%;

        background:
        radial-gradient(
          rgba(56,189,248,.5),
          transparent 70%
        );

        filter:blur(30px);

        z-index:-1;
      }

      .home-image img{
        width:370px;
        height:370px;

        object-fit:cover;

        border-radius:50%;
        border:5px solid #38bdf8;

        box-shadow:
        0 0 40px rgba(56,189,248,.5);

        animation:float 4s ease-in-out infinite;
      }

      @keyframes float{
        0%,100%{
          transform:translateY(0);
        }

        50%{
          transform:translateY(-15px);
        }
      }

      .scroll-down{
        position:absolute;
        bottom:30px;
        left:50%;
        transform:translateX(-50%);
        animation:bounce 2s infinite;
      }

      .scroll-down svg{
        color:#38bdf8;
        font-size:1.8rem;
      }

      @keyframes bounce{
        50%{
          transform:
          translateX(-50%)
          translateY(10px);
        }
      }

      @media(max-width:1000px){

        .home{
          flex-direction:column-reverse;
          text-align:center;
          gap:50px;
        }

        .home-content h1{
          font-size:2.8rem;
        }

        .typing{
          font-size:1.6rem;
        }

        .home-image img{
          width:280px;
          height:280px;
        }

        .social-icons{
          justify-content:center;
        }

        .home-buttons{
          justify-content:center;
        }

        .description{
          margin:auto;
        }
      }

      `}</style>

      <section
        id="home"
        className="home"
      >
        <div className="blur-circle"></div>

        <div className="home-content">

          <p className="intro">
            Welcome To My Portfolio
          </p>

          <h1>
            Hi, I'm{" "}
            <span className="name">
              Sachin Kumar
            </span>
          </h1>

          <h2 className="typing">
            <span ref={typedRef}></span>
          </h2>

          <p className="description">
            Passionate Computer Science Engineering student
            specializing in Full Stack Development,
            React, JavaScript, Python, SQL, and modern
            web technologies. I build responsive,
            user-friendly applications while continuously
            improving my development and problem-solving skills.
          </p>

          <div className="social-icons">

            <a
              href="https://github.com/Sachin84372"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-kumar-7bb518286"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

          <div className="home-buttons">

            <button
              className="btn-primary"
              onClick={scrollToProjects}
            >
              View Projects
            </button>

            <a
              href="/sachin-resume.pdf"
              download
              className="btn-secondary"
            >
              <FaDownload />
              &nbsp; Resume
            </a>

          </div>

        </div>

        <div className="home-image">

          <img
            src={myImage}
            alt="Sachin Kumar"
          />

        </div>

        <div className="scroll-down">
          <FaArrowDown />
        </div>

      </section>
    </>
  );
}

export default Home;