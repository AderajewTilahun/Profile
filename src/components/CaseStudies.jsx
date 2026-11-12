import { FaLightbulb, FaCode, FaChartLine, FaCheckCircle } from "react-icons/fa";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Construction Information Management System",
      problem: "Construction companies needed a simple way to track projects, manage documents, and coordinate with contractors without using paper-based systems.",
      solution: "Built a web application using React and Node.js with MySQL database. Created features for adding projects, uploading documents, assigning contractors, and tracking progress. Made it responsive so users can access from any device.",
      results: [
        "Reduced paperwork by 70%",
        "Made project information accessible to all team members",
        "Simplified document sharing and tracking",
        "Helped complete projects on time"
      ],
      technologies: ["React", "Node.js", "MySQL", "Express"]
    },
    {
      title: "Face Recognition System",
      problem: "Organizations needed an automated way to track attendance and verify identity without manual checking, which was time-consuming and prone to errors.",
      solution: "Built an AI-powered face recognition system using Python, OpenCV, and TensorFlow. Made it work with standard webcams.",
      results: [
        "Automated attendance tracking",
        "Reduced manual verification time",
        "Improved accuracy in identification"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow"]
    },
    {
      title: "Chatting Application",
      problem: "Teams needed a simple way to communicate in real-time without relying on external messaging apps that might not be suitable for work discussions.",
      solution: "Created a real-time messaging app using React, Node.js, and Socket.io. Implemented user login, group chat creation, direct messaging, and file sharing. Made it work smoothly on both desktop and mobile.",
      results: [
        "Improved team communication",
        "Made it easy to share files within the app",
        "Reduced dependency on external messaging platforms",
        "Provided a simple interface for all users"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MYSQL"]
    }
  ];

  return (
    <section id="case-studies" className="section">
      <div className="section-header">
        <h2>Case Studies</h2>
        <div className="section-line"></div>
      </div>

      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <div className="case-study-header">
              <h3>{study.title}</h3>
            </div>

            <div className="case-study-content">
              <div className="case-study-section">
                <div className="case-study-icon">
                  <FaLightbulb />
                </div>
                <div>
                  <h4>The Problem</h4>
                  <p>{study.problem}</p>
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-icon">
                  <FaCode />
                </div>
                <div>
                  <h4>The Solution</h4>
                  <p>{study.solution}</p>
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-icon">
                  <FaChartLine />
                </div>
                <div>
                  <h4>Results</h4>
                  <ul className="results-list">
                    {study.results.map((result, i) => (
                      <li key={i}>
                        <FaCheckCircle /> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-study-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {study.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;