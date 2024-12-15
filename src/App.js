import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import placeholder from './placeholder.jpg';

function App() {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px 0',
  };

  const headerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
  };

  const navItemStyle = {
    color: '#4a5568',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  };

  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '40px',
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
  };

  const profileContainerStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const profileImageStyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  };

  const contactInfoStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    backgroundColor: '#ffffff',
    padding: '30px',
    marginBottom: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
  };

  const sectionHeaderStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const sectionContentStyle = {
    fontSize: '16px',
    color: '#4a5568',
  };

  const footerStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: 'auto',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#2d3748' }}>Lakshya Tekwani</h1>
          <nav style={navStyle}>
            <a href="#about" style={navItemStyle}>About</a>
            <a href="#experience" style={navItemStyle}>Experience</a>
            <a href="#projects" style={navItemStyle}>Projects</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={mainStyle}>
        {/* Sidebar with Profile */}
        <aside style={profileContainerStyle}>
          <img
            src={placeholder}  // Placeholder image if needed
            alt="Lakshya Tekwani"
            style={profileImageStyle}
          />
          <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#2d3748' }}>Lakshya Tekwani</h2>
          <p style={{ color: '#4a5568', marginBottom: '20px' }}>Software Developer</p>

          {/* Social Links */}
          <div style={socialLinksStyle}>
            <a href="https://www.instagram.com/lakshya_tekwani" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#4a5568" />
            </a>
            <a href="https://github.com/Lakshya-droid" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="#4a5568" />
            </a>
            <a href="https://www.linkedin.com/in/lakshya-tekwani" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#4a5568" />
            </a>
          </div>

          {/* Contact Info */}
          <div style={contactInfoStyle}>
            <p style={{ fontSize: '16px', color: '#4a5568' }}>+91-8878818817</p>
            <p style={{ fontSize: '16px', color: '#4a5568' }}>lakshyatekwani@gmail.com</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <div style={{ flex: '1' }}>
          {/* About Me */}
          <section id="about" style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>
              <span>💼</span>
              About Me
            </h3>
            <p style={sectionContentStyle}>
              A passionate software developer with expertise in full-stack development, cloud computing, and innovative tech solutions. I thrive on creating efficient and scalable applications that solve real-world problems.
            </p>
          </section>

          {/* Skills */}
          <section style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>
              <span>💻</span>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Python', 'JavaScript', 'React', 'Flutter', 'Cloud Computing', 'Machine Learning', 'DevOps'].map((skill) => (
                <span key={skill} style={{
                  backgroundColor: '#edf2f7',
                  color: '#4a5568',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '14px',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>
              <span>💼</span>
              Professional Experience
            </h3>
            <div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#2d3748' }}>Software Development Engineer</h4>
                <p style={{ color: '#4a5568' }}>AstreDorr | July 2023 - Present</p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Developed ReactJS web and React Native mobile applications</li>
                  <li>Implemented microservices and serverless architectures</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#2d3748' }}>System Development Engineer Intern</h4>
                <p style={{ color: '#4a5568' }}>Amazon | January 2023 - June 2023</p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Automated Peak CodeFreeze Calendar</li>
                  <li>Developed Forecast-based Scaling planner</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>
              <span>📚</span>
              Projects
            </h3>
            <div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#2d3748' }}>Socioverse</h4>
                <p style={{ color: '#4a5568' }}>Community Interaction App</p>
                <p style={sectionContentStyle}>
                  A cross-platform messaging app with community-driven interactions using Flutter, Firebase, and BloC architecture.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#2d3748' }}>CRYPTOBY</h4>
                <p style={{ color: '#4a5568' }}>Cryptocurrency Trading Bot</p>
                <p style={sectionContentStyle}>
                  An automated trading platform using Binance API, deployed on Heroku with a central dashboard for fund monitoring.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p style={{ color: '#4a5568' }}>© 2024 Lakshya Tekwani. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
