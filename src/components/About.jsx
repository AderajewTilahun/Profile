import { useState, useEffect } from "react";
import { FaUserGraduate, FaBriefcase, FaLightbulb, FaShieldAlt, FaAward } from "react-icons/fa";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "I am a Computer Science graduate and an Information Security analyst with a strong passion for cybersecurity. I currently work as a Security Operations Officer at Tsedey Bank, where I contribute to protecting organizational systems, monitoring security events, analyzing potential threats, and supporting information security operations.I am a motivated, detail-oriented, and creative professional who continuously explores new technologies, improves technical and design skills, and embraces opportunities to learn and grow. My goal is to combine cybersecurity and creativity to deliver secure, innovative, and impactful digital solutions.";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 20;

    const typeNextChar = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    typeNextChar();

    return () => {
      clearTimeout(typeNextChar);
    };
  }, []);

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            {typedText}
            {isTyping && <span className="typing-cursor">|</span>}
          </p>
          
          <div className="about-details">
            <div className="about-item">
              <FaUserGraduate className="about-icon" />
              <div>
                <h3>Education</h3>
                <p>Bachelor's Degree in Computer Science</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaAward className="about-icon" />
              <div>
                <h3>Academic Achievements</h3>
                <p>CGPA 3.95 • National Exit Exam 80% • Gold Medal Award</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaShieldAlt className="about-icon" />
              <div>
                <h3>Current Role</h3>
                <p>Information Security Analyst at Tsedey Bank (Since August 26, 2025)</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaBriefcase className="about-icon" />
              <div>
                <h3>Development Experience</h3>
                <p>Junior website developer</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaLightbulb className="about-icon" />
              <div>
                <h3>Learning Focus</h3>
                <p>New Technologies, Graphics Design, Cyber Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;