// import { FaCode } from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <FaCode />
//         <span>Sachin.dev</span>
//       </div>

//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <button className="hire-btn">
//         Hire Me
//       </button>
//     </nav>
//   );
// }

// export default Navbar;
import { FaCode, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <style>{`

      .navbar{
        position:fixed;
        top:0;
        left:0;

        width:100%;

        display:flex;
        justify-content:space-between;
        align-items:center;

        padding:18px ;

        background:rgba(15,23,42,.85);

        backdrop-filter:blur(12px);

        border-bottom:
        1px solid rgba(255,255,255,.08);

        z-index:1000;
      }

      .logo{
        display:flex;
        align-items:center;
        gap:10px;

        font-size:1.5rem;
        font-weight:700;

        cursor:pointer;

        color:white;

        transition:.3s;
      }

      .logo:hover{
        color:#38bdf8;

        transform:scale(1.03);
      }

      .logo svg{
        color:#38bdf8;
      }

      .nav-links{
        display:flex;
        gap:35px;

        list-style:none;
      }

      .nav-links a{
        text-decoration:none;

        color:#e2e8f0;

        font-weight:500;

        position:relative;

        transition:.3s;
      }

      .nav-links a::after{
        content:"";

        position:absolute;

        left:0;
        bottom:-6px;

        width:0;
        height:2px;

        background:#38bdf8;

        transition:.3s;
      }

      .nav-links a:hover{
        color:#38bdf8;
      }

      .nav-links a:hover::after{
        width:100%;
      }

      .hire-btn{
        padding:12px 24px;

        border:none;
        border-radius:50px;

        background:#38bdf8;

        font-weight:600;

        cursor:pointer;

        transition:.3s;
      }

      .hire-btn:hover{
        transform:
        translateY(-4px);

        box-shadow:
        0 10px 25px rgba(56,189,248,.4);
      }

      .menu-icon{
        display:none;
      }

      @media(max-width:768px){

        .nav-links{
          display:none;
        }

        .hire-btn{
          display:none;
        }

        .menu-icon{
          display:block;

          font-size:1.5rem;

          color:white;

          cursor:pointer;
        }
      }

      `}</style>

      <nav className="navbar">

        <div className="logo">
          <FaCode />
          <span>Sachin.dev</span>
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <button
  className="hire-btn"
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Hire Me
</button>

        <div className="menu-icon">
          <FaBars />
        </div>

      </nav>
    </>
  );
}

export default Navbar;