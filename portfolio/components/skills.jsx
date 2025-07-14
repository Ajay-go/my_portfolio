import React from "react";
import SideBar from "./Sidebar";
import "./skills.css";

function Skill() {
    const aimlSkills = [
        { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "NumPy", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
        { name: "Pandas", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", logo: "https://matplotlib.org/_static/logo2_compressed.svg" },
        { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo.svg" },
        { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/139914647?s=200&v=4" }, // Fixed working GitHub image
    ];

    const devSkills = [
        { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
        { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
    ];

    const softSkills = [
        { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/4762/4762311.png" },
        { name: "Project Management", logo: "https://cdn-icons-png.flaticon.com/512/9068/9068693.png" },
        { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/1779/1779883.png" },
        { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png" },
        { name: "Adaptability", logo: "https://cdn-icons-png.flaticon.com/512/10405/10405911.png" },
        { name: "Consistency", logo: "https://cdn-icons-png.flaticon.com/512/833/833472.png" }

    ];

    const renderSkillSection = (title, skills) => (
        <div className="skill-section">
            <h3>{title}</h3>
            <div className="skill-grid">
                {skills.map((skill, i) => (
                    <div className="skill-card" key={i}>
                        <img src={skill.logo} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <SideBar />
            <div id="skills">
                <h2>My Skills</h2>
                {renderSkillSection("AI/ML Skills", aimlSkills)}
                {renderSkillSection("Development Skills", devSkills)}
                {renderSkillSection("Soft Skills", softSkills)}
            </div>
        </>
    );
}

export default Skill;
