import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <style>{`

      .contact{
        min-height:70vh;
        padding:120px 8%;
      }

      .contact-title{
        text-align:center;
        font-size:3rem;
        margin-bottom:15px;

        background:linear-gradient(
          90deg,
          #38bdf8,
          #60a5fa,
          #38bdf8
        );

        -webkit-background-clip:text;
        color:transparent;

        animation:glow 3s infinite;
      }

      .contact-subtitle{
        text-align:center;
        color:#94a3b8;
        margin-bottom:60px;
        font-size:1.1rem;
      }

      .contact-container{
        display:flex;
        justify-content:space-between;
        gap:50px;
      }

      .contact-info{
        flex:1;
      }

      .info-card{
        display:flex;
        align-items:center;
        gap:15px;

        padding:20px;
        margin-bottom:20px;

        background:#111827;

        border-radius:15px;

        transition:all .4s ease;
        background:rgba(17,24,39,.8);
        border:1px solid rgba(56,189,248,.15);
        backdrop-filter:blur(12px);
      }

      .info-card:hover{
        transform:translateY(-8px);

        background:#172033;

        box-shadow:
        0 10px 30px rgba(56,189,248,.15);
      }

      .info-card svg{
        color:#38bdf8;
        font-size:1.4rem;
      }

      .social-links{
        display:flex;
        gap:20px;
        margin-top:30px;
      }

      .social-links svg{
        font-size:2rem;
        cursor:pointer;
        transition:all .4s ease;
      }

      .social-links svg:hover{
        color:#38bdf8;

        transform:
        translateY(-6px)
        scale(1.15);

        filter:
        drop-shadow(
        0 0 10px #38bdf8
        );
      }

      .contact-form{
        flex:1;

        display:flex;
        flex-direction:column;

        gap:20px;
      }

      .contact-form input,
      .contact-form textarea{
        padding:15px;

        border:1px solid transparent;

        outline:none;

        border-radius:12px;

        background:#111827;
        color:white;

        transition:all .35s ease;
      }

      .contact-form input:focus,
      .contact-form textarea:focus{
        border-color:#38bdf8;

        box-shadow:
        0 0 15px rgba(56,189,248,.25);

        transform:translateY(-2px);
      }

      .contact-form button{
        padding:15px;

        border:none;
        border-radius:12px;

        background:#38bdf8;

        font-weight:600;

        cursor:pointer;

        transition:all .35s ease;
      }

      .contact-form button:hover{
        transform:
        translateY(-5px)
        scale(1.02);

        box-shadow:
        0 12px 30px rgba(56,189,248,.4);
      }

      .contact-form button:active{
        transform:scale(.98);
      }

      @keyframes glow{
        50%{
          filter:
          drop-shadow(
          0 0 15px rgba(56,189,248,.5)
          );
        }
      }

      @media(max-width:768px){

        .contact-container{
          flex-direction:column;
        }

        .contact-title{
          font-size:2.3rem;
        }

      }

      `}</style>

      <section
        id="contact"
        className="contact"
        data-aos="fade-left"
        data-aos-duration="1200"
      >

        <h2 className="contact-title">
          Get In Touch
        </h2>

        <p
  style={{
    textAlign: "center",
    color: "#94a3b8",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.8",
  }}
>
  I'm always open to discussing new projects,
  internship opportunities, collaborations,
  and innovative ideas. Feel free to reach out
  and let's build something amazing together.
</p>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope />
              <span>sachin84372kumar@gmail.com</span>
            </div>

            <div className="info-card">
              <FaPhone />
              <span>+91 84372-77607</span>
            </div>

            <div className="social-links">
              <FaGithub />
              <FaLinkedin />
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message 🚀
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;