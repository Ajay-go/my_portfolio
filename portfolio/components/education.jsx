import React from "react";
import "./education.css";
import SideBar from "./Sidebar";

function Education() {
    const educationData = [
        {
            title: "B.Tech in Artificial Intelligence and Machine Learning",
            institution: "Madhav Institute of Technology and Science, Gwalior",
            duration: "2022 – 2026",
            detail: "CGPA: 8.6",
        },
        {
            title: "Higher Secondary Education (XII - CBSE)",
            institution: "Kendriya Vidyalaya No.4 AFS, Gwalior",
            duration: "Year: 2022",
            detail: "Percentage: 93.4%",
        },
        {
            title: "Secondary Education (X - CBSE)",
            institution: "Kendriya Vidyalaya No.4 AFS, Gwalior",
            duration: "Year: 2020",
            detail: "Percentage: 90.4%",
        },
    ];

    return (
        <>
            <SideBar />
            <div id="education-container">
                <h2 className="education-heading">Education</h2>
                <div className="education-list">
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={index}>
                            <h3>{edu.title}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p><strong>{edu.duration}</strong></p>
                            <p>{edu.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Education;
