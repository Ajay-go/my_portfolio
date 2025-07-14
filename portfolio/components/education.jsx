import React from "react";
import "./education.css";
import SideBar from "./Sidebar";
function Education() {
    return (
        <>
            <SideBar />
            <div id="education-container">
                <h2>Education</h2>
                <div>
                    <div className="education-section">
                        <h3>B.Tech in Artificial Intelligence and Machine Learning</h3>
                        <p>Madhav Institute of Technology and Science, Gwalior</p>
                        <p><strong>Duration:</strong> 2022 – 2026</p>
                        <p><strong>CGPA:</strong> 8.6</p>
                    </div>

                    <div className="education-section">
                        <h3>Higher Secondary Education (XII - CBSE)</h3>
                        <p>Kendriya Vidyalaya No.4 AFS, Gwalior</p>
                        <p><strong>Year:</strong> 2022</p>
                        <p><strong>Percentage:</strong> 93.4%</p>
                    </div>

                    <div className="education-section">
                        <h3>Secondary Education (X - CBSE)</h3>
                        <p>Kendriya Vidyalaya No.4 AFS, Gwalior</p>
                        <p><strong>Year:</strong> 2020</p>
                        <p><strong>Percentage:</strong> 90.4%</p>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Education;
