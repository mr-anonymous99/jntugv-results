import React, { useState } from 'react';
import './App.css';

function App() {
  const [hallTicket, setHallTicket] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [processingTime, setProcessingTime] = useState(0.06);

  // Mock data for the student result
  const studentData = {
    hallTicket: "23VV1A0558",
    fullName: "SIRINGI VINAY",
    branch: "COMPUTER SCIENCE & ENGINEERING",
    credits: 21,
    sgpa: 8.6,
    status: "Pass"
  };

  const subjects = [
    { code: "R2322HSMC01A", subject: "Managerial Economics and Financial Analysis", c: 2, gp: 8, g: "B" },
    { code: "R2322BS01B", subject: "Probability & Statistics", c: 3, gp: 8, g: "B" },
    { code: "R232205PC01", subject: "Operating Systems", c: 3, gp: 8, g: "B" },
    { code: "R232205PC02", subject: "Object Oriented Programming Through JAVA", c: 3, gp: 10, g: "S" },
    { code: "R232205PC03", subject: "Formal Languages and Automata Theory", c: 3, gp: 6, g: "D" },
    { code: "R232205PC01P", subject: "Operating Systems Lab", c: 1.5, gp: 10, g: "S" },
    { code: "R232205PC02P", subject: "Object Oriented Programming Through JAVA Lab", c: 1.5, gp: 9, g: "A" },
    { code: "R232205SE01", subject: "Full Stack Development-I", c: 2, gp: 10, g: "S" },
    { code: "R2322BSH01", subject: "Design Thinking & Innovations", c: 2, gp: 10, g: "S" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hallTicket.trim()) {
      setShowResults(true);
      // Simulate processing time
      setTimeout(() => {
        setProcessingTime((Math.random() * 0.1 + 0.05).toFixed(2));
      }, 300);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://via.placeholder.com/80/4b5320/ffffff?text=JNTU-GV" alt="JNTU-GV Logo" className="logo" />
        <h1 className="college-name">JNTU-GV College of Engineering, Vizianagaram</h1>
        <h2 className="exam-title">Examination Results</h2>
        <button className="go-back">Go Back</button>
      </header>

      <main className="content">
        <div className="exam-info">
          <h3>II B.Tech II Semester (R23) Regular Exam (2023 Batch) April 2025</h3>
          <p className="deadline">Last date of recounting and revaluation is 16 June, 2025 05:00 pm</p>
        </div>

        {!showResults ? (
          <form onSubmit={handleSubmit} className="hall-ticket-form">
            <input
              type="text"
              value={hallTicket}
              onChange={(e) => setHallTicket(e.target.value)}
              placeholder="HALLTICKET NUMBER"
              className="hall-ticket-input"
              autoFocus
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : (
          <div className="results-container">
            <div className="hall-ticket-display">
              {hallTicket.toUpperCase()}
              <div className="processing-time">Request processed in {processingTime} seconds</div>
            </div>

            <div className="student-info-table">
              <table>
                <thead>
                  <tr>
                    <th>HallTicket</th>
                    <th>Full Name</th>
                    <th>Branch</th>
                    <th>Credits</th>
                    <th>SGPA</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{studentData.hallTicket}</td>
                    <td>{studentData.fullName}</td>
                    <td>{studentData.branch}</td>
                    <td>{studentData.credits}</td>
                    <td>{studentData.sgpa}</td>
                    <td>{studentData.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subjects-table">
              <table>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Subject</th>
                    <th>C</th>
                    <th>GP</th>
                    <th>G</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                      <td>{subject.code}</td>
                      <td>{subject.subject}</td>
                      <td>{subject.c}</td>
                      <td>{subject.gp}</td>
                      <td>{subject.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>Powered By <span className="dhondi">DHONDI</span></p>
      </footer>
    </div>
  );
}

export default App;