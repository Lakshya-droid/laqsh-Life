import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaSun, FaMoon, FaChevronDown, FaChevronUp, FaBriefcase, FaCode, FaCircle } from 'react-icons/fa';
import placeholder from './placeholder.jpg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [expandedJob, setExpandedJob] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#1a202c' : '#f7fafc';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleJobExpand = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const toggleProjectExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? '#1a202c' : '#f7fafc',
    color: darkMode ? '#e2e8f0' : '#2d3748',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background-color 0.5s, color 0.5s',
  };

  const headerStyle = {
    backgroundColor: darkMode ? '#2d3748' : '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px 0',
    transition: 'background-color 0.5s',
    position: 'sticky',
    top: 0,
    zIndex: 10,
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
    alignItems: 'center',
  };

  const navItemStyle = {
    color: darkMode ? '#e2e8f0' : '#4a5568',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
  };

  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
    gap: '40px',
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
    transition: 'opacity 0.5s',
  };

  const profileContainerStyle = {
    textAlign: 'center',
    backgroundColor: darkMode ? '#2d3748' : '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.5s, transform 0.3s',
    maxHeight: 'fit-content',
  };

  const profileImageStyle = {
    width: '260px',
    height: '260px',
    borderRadius: '130px',
    objectFit: 'cover',
    marginBottom: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  };

  const contactInfoStyle = {
    backgroundColor: darkMode ? '#4a5568' : '#edf2f7',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.5s',
    marginBottom: '20px',
  };

  const skillsContainerStyle = {
    backgroundColor: darkMode ? '#2d3748' : '#ffffff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    transition: 'background-color 0.5s',
  };

  const skillGroupStyle = {
    marginBottom: '10px',
    position: 'relative',
  };

  const sectionStyle = {
    backgroundColor: darkMode ? '#2d3748' : '#ffffff',
    padding: '30px',
    marginBottom: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    transition: 'background-color 0.5s, transform 0.3s',
  };

  const sectionHeaderStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: darkMode ? '#e2e8f0' : '#2d3748',
    transition: 'color 0.5s',
  };

  const footerStyle = {
    backgroundColor: darkMode ? '#2d3748' : '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: 'auto',
    transition: 'background-color 0.5s',
  };

  // Skill data with proficiency levels
  const skills = [
    { name: 'Python', proficiency: 5 },
    { name: 'JavaScript', proficiency: 4 },
    { name: 'React', proficiency: 4 },
    { name: 'Flutter', proficiency: 3 },
    { name: 'Cloud Computing', proficiency: 4 },
    { name: 'Machine Learning', proficiency: 3 },
    { name: 'DevOps', proficiency: 4 },
    { name: 'C++', proficiency: 3 },
    { name: 'HTML/CSS', proficiency: 4 },
    { name: 'MySQL', proficiency: 3 },
    { name: 'Dart', proficiency: 3 },
    { name: 'AWS', proficiency: 4 },
    { name: 'Azure', proficiency: 3 },
    { name: 'Data Structures', proficiency: 4 },
    { name: 'Algorithms', proficiency: 4 },
  ];

  // Experience data with durations
  const experiences = [
    {
      id: 1,
      role: 'System Development Engineer',
      company: 'Amazon',
      period: 'April 2023 - Present',
      duration: '1 year 3 months',
      description: [
        'Part of the Country Expansion Team, working on the launch of Amazon.ie (Ireland).',
        'Enabled notifications for SMS, push, and email for post-transactional updates (shipment status, cancellation, refund, payment method updates).',
        'Implemented search functionality in the Android and iOS apps for the new country launch.'
      ]
    },
    {
      id: 2,
      role: 'Software Development Engineer',
      company: 'AstreDorr',
      period: 'July 2023 - April 2024',
      duration: '9 months',
      description: [
        'Developed ReactJS web and React Native mobile applications.',
        'Implemented microservices and serverless architectures.'
      ]
    },
    {
      id: 3,
      role: 'System Development Engineer Intern',
      company: 'Amazon',
      period: 'January 2023 - June 2023',
      duration: '6 months',
      description: [
        'Automated Peak CodeFreeze Calendar to block deployment pipelines, reducing SDE efforts by 4 weeks per year.',
        'Developed Forecast-based Scaling planner and automatic host ordering system, reducing infrastructure costs by 31% and minimizing service failure risks.'
      ]
    },
    {
      id: 4,
      role: 'ML-AI Problem Setter and Evaluator',
      company: 'HackerEarth',
      period: '2022',
      duration: '1 year',
      description: [
        'Automated the creation of test cases by describing edge conditions, reducing human effort.',
        'Set up interview questions and evaluated interviews, alongside ML dataset synthesis for hackathons.',
        'Evaluated 1200+ submissions for hackathons and framed 25 programming problems.'
      ]
    },
    {
      id: 5,
      role: 'Junior SDE',
      company: 'ConveGenius',
      period: '2021',
      duration: '1 year',
      description: [
        'Worked on distributed Storage and Networking Services, deploying infrastructure as code, and optimizing AWS infrastructure using JavaScript SDK.',
        'Implemented Caching and Database Design for the new SwiftChat API using DynamoDB, Redis, and SQL.',
        'Deployed conversational chatbots, debugged and tested automation scripts using Python, and wrote 500+ unit and integration tests for the SwiftChat API.'
      ]
    },
    {
      id: 6,
      role: 'Technical Intern',
      company: 'Samsung Prism',
      period: '2020',
      duration: '6 months',
      description: [
        'Developed a system to capture, decode, filter, and store messages in a database, with a GUI for querying.',
        'Implemented a multi-threaded client-server architecture to handle 100,000 requests per second using distributed computing.'
      ]
    }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      name: 'Socioverse',
      type: 'Community Interaction App',
      description: 'A cross-platform messaging app with community-driven interactions using Flutter, Firebase, and BloC architecture.'
    },
    {
      id: 2,
      name: 'CRYPTOBY',
      type: 'Cryptocurrency Trading Bot',
      description: 'An automated trading platform using Binance API, deployed on Heroku with a central dashboard for fund monitoring.'
    }
  ];

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: darkMode ? '#e2e8f0' : '#2d3748' }}>
            Lakshya Tekwani
          </h1>
          <nav style={navStyle}>
            <a href="#about" style={navItemStyle}>About</a>
            <a href="#experience" style={navItemStyle}>Experience</a>
            <a href="#projects" style={navItemStyle}>Projects</a>
            <button
              onClick={toggleDarkMode}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: darkMode ? '#e2e8f0' : '#4a5568',
                fontSize: '20px',
                transition: 'color 0.3s',
              }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={mainStyle}>
        {/* Sidebar with Profile and Skills */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={profileContainerStyle} className="profile-card">
            <img
              src={placeholder}
              alt="Lakshya Tekwani"
              style={profileImageStyle}
              className="profile-image"
            />
            <h2 style={{ fontSize: '22px', fontWeight: '600', color: darkMode ? '#e2e8f0' : '#2d3748' }}>
              Lakshya Tekwani
            </h2>
            <p style={{ color: darkMode ? '#e2e8f0' : '#4a5568', marginBottom: '20px' }}>Software Developer</p>

            {/* Social Links */}
            <div style={socialLinksStyle}>
              <a href="https://www.instagram.com/lakshya_tekwani" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} color={darkMode ? '#e2e8f0' : '#4a5568'} className="social-icon" />
              </a>
              <a href="https://github.com/Lakshya-droid" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} color={darkMode ? '#e2e8f0' : '#4a5568'} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/lakshya-tekwani" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} color={darkMode ? '#e2e8f0' : '#4a5568'} className="social-icon" />
              </a>
            </div>

            {/* Contact Info */}
            <div style={contactInfoStyle}>
              <p style={{ fontSize: '16px', color: darkMode ? '#e2e8f0' : '#4a5568' }}>+91-8878818817</p>
              <p style={{ fontSize: '16px', color: darkMode ? '#e2e8f0' : '#4a5568' }}>lakshyatekwani@gmail.com</p>
            </div>
          </div>

          {/* Skills Section */}
          <div style={skillsContainerStyle} className="skills-card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: darkMode ? '#e2e8f0' : '#2d3748' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {skills.map((skill) => (
                <div key={skill.name} style={skillGroupStyle} className="skill-group">
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginBottom: '5px'
                  }}>
                    <span style={{ color: darkMode ? '#e2e8f0' : '#4a5568' }}>{skill.name}</span>
                    <div className="proficiency-dots" style={{ display: 'flex', gap: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <FaCircle 
                          key={i} 
                          size={8} 
                          color={i < skill.proficiency ? (darkMode ? '#60a5fa' : '#3b82f6') : (darkMode ? '#4b5563' : '#d1d5db')} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div>
          {/* About Me */}
          <section id="about" style={sectionStyle} className="section-card">
            <h3 style={sectionHeaderStyle}>
              <span>💼</span>
              About Me
            </h3>
            <p style={{ color: darkMode ? '#e2e8f0' : '#4a5568' }}>
              A passionate software developer with expertise in full-stack development, cloud computing, and innovative tech solutions. I thrive on creating efficient and scalable applications that solve real-world problems.
            </p>
          </section>

          {/* Experience Timeline */}
          <section id="experience" style={sectionStyle} className="section-card">
            <h3 style={sectionHeaderStyle}>
              <span><FaBriefcase /></span>
              Professional Experience
            </h3>
            <div className="timeline" style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '0', 
                bottom: '0', 
                width: '2px', 
                backgroundColor: darkMode ? '#4a5568' : '#cbd5e0',
              }}></div>

              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="timeline-item" 
                  style={{ 
                    position: 'relative', 
                    paddingLeft: '50px', 
                    marginBottom: index === experiences.length - 1 ? '0' : '30px',
                    paddingBottom: '10px'
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{ 
                    position: 'absolute', 
                    left: '16px', 
                    top: '0', 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    backgroundColor: darkMode ? '#60a5fa' : '#3b82f6',
                    zIndex: 2
                  }}></div>
                  
                  <div style={{ 
                    padding: '15px', 
                    backgroundColor: darkMode ? '#374151' : '#f1f5f9', 
                    borderRadius: '15px',
                    transition: 'background-color 0.3s'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: expandedJob === exp.id ? '10px' : '0',
                      cursor: 'pointer'
                    }} 
                    onClick={() => toggleJobExpand(exp.id)}
                    >
                      <div>
                        <h4 style={{ fontWeight: '600', color: darkMode ? '#e2e8f0' : '#2d3748' }}>
                          {exp.role}
                        </h4>
                        <p style={{ color: darkMode ? '#e2e8f0' : '#4a5568', opacity: 0.9 }}>
                          {exp.company} | {exp.period} ({exp.duration})
                        </p>
                      </div>
                      <span style={{ color: darkMode ? '#e2e8f0' : '#4a5568' }}>
                        {expandedJob === exp.id ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                    
                    {expandedJob === exp.id && (
                      <div style={{ 
                        marginTop: '10px', 
                        paddingTop: '10px', 
                        borderTop: `1px solid ${darkMode ? '#4a5568' : '#e2e8f0'}`,
                        animation: 'fadeIn 0.3s ease-in'
                      }}>
                        <ul style={{ 
                          listStyleType: 'disc', 
                          paddingLeft: '20px', 
                          color: darkMode ? '#e2e8f0' : '#4a5568',
                        }}>
                          {exp.description.map((item, i) => (
                            <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" style={sectionStyle} className="section-card">
            <h3 style={sectionHeaderStyle}>
              <span><FaCode /></span>
              Projects
            </h3>
            <div className="projects-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card" 
                  style={{ 
                    backgroundColor: darkMode ? '#374151' : '#f1f5f9',
                    borderRadius: '15px',
                    transition: 'background-color 0.3s',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{ 
                      padding: '15px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleProjectExpand(project.id)}
                  >
                    <div>
                      <h4 style={{ fontWeight: '600', color: darkMode ? '#e2e8f0' : '#2d3748' }}>
                        {project.name}
                      </h4>
                      <p style={{ color: darkMode ? '#e2e8f0' : '#4a5568', opacity: 0.9 }}>
                        {project.type}
                      </p>
                    </div>
                    <span style={{ color: darkMode ? '#e2e8f0' : '#4a5568' }}>
                      {expandedProject === project.id ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  
                  {expandedProject === project.id && (
                    <div 
                      style={{ 
                        padding: '0 15px 15px',
                        borderTop: `1px solid ${darkMode ? '#4a5568' : '#e2e8f0'}`,
                        animation: 'fadeIn 0.3s ease-in'
                      }}
                    >
                      <p style={{ 
                        marginTop: '10px',
                        color: darkMode ? '#e2e8f0' : '#4a5568'
                      }}>
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p style={{ color: darkMode ? '#e2e8f0' : '#4a5568' }}>© 2024 Lakshya Tekwani. All Rights Reserved.</p>
      </footer>

      {/* CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .timeline-item:hover .proficiency-dots {
            display: flex !important;
          }
          
          .skill-group:hover .proficiency-dots {
            opacity: 1;
          }
          
          .proficiency-dots {
            opacity: 0.8;
            transition: opacity 0.3s;
          }
          
          .profile-image:hover {
            transform: scale(1.05);
          }
          
          .social-icon:hover {
            transform: translateY(-3px);
            transition: transform 0.3s;
          }
          
          .section-card:hover {
            transform: translateY(-3px);
          }

          @media (max-width: 768px) {
            .main {
              grid-template-columns: 1fr;
            }
            .profile-container, .skills-container, .section-card {
              width: 100%;
              margin: 10px 0;
            }
            .timeline {
              padding-left: 20px;
            }
            .timeline-item {
              padding-left: 30px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;