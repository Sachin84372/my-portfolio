function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "30px 20px",
        marginTop: "80px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h3
        style={{
          marginBottom: "10px",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        Sachin Kumar
      </h3>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        B.Tech CSE Student | Full Stack Developer | Python Enthusiast
      </p>

      <p
        style={{
          color: "#64748b",
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Sachin Kumar. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;