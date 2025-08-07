import React from "react";
import SideBar from "./Sidebar";
import "./Achievements.css";
import c1 from "../src/assets/ml.png";
import c3 from "../src/assets/dsa.jpeg";
import c4 from "../src/assets/bw.jpeg";

function Achievements() {
    const textAchievements = [
        {
            title: "School Topper (Class XII)",
            description: "Secured 93.4% in Class 12 CBSE — highest in school (2022)",
        },
        {
            title: "5th Place - Codathon 2.0",
            description: "Ranked 5th out of 450+ in DSA competition",
        },
        {
            title: "800+ LeetCode Problems",
            description: "Top 40% globally with peak rating of 1511",
            link: "https://leetcode.com/u/Ajay_Gour3/",
        },
        {
            title: "Codeforces Div 2 & 3 Top 20%",
            description: "Consistent top 20% performance",
            link: "https://codeforces.com/profile/go_ajay",
        },
    ];

    const certificates = [
        {
            title: "Machine Learning Certification",
            img: c1,
        },
        {
            title: "Codathon 2.0 MITS Gwl",
            img: c3,
            rotateLeft: true,
        },
        {
            title: "Volunteer Certificate",
            img: c4,
            rotateLeft: true,
        },
    ];

    return (
        <>
            <SideBar />
            <div className="achievements-container" style={{ marginLeft: "250px", padding: "20px" }}>
                <h1 className="heading">My Achievements</h1>

                <h2 className="subheading">🎓 Notable Accomplishments</h2>
                <div className="text-achievements">
                    {textAchievements.map((item, index) => (
                        <a
                            key={index}
                            className="text-card"
                            href={item.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ cursor: item.link ? "pointer" : "default" }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </a>
                    ))}
                </div>

                <h2 className="subheading">📜 Certificates</h2>
                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div className="certificate-card" key={index}>
                            <a
                                href={cert.link || cert.img}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="certificate-image-wrapper">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className={`certificate-image ${cert.rotateLeft ? "rotate-left" : ""}`}
                                    />
                                </div>
                            </a>

                            <h3>{cert.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Achievements;
