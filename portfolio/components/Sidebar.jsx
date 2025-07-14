import React from "react";
import './sidebar.css';
import { useNavigate } from "react-router-dom";

function SideBar() {
    const navigate = useNavigate();

    return (
        <div id="sidebar">
            <div id="list">
                <ul>
                    <li onClick={() => navigate('/')}>About</li>
                    <li onClick={() => navigate('/skill')}>Skills</li>
                    <li onClick={() => navigate('/education')}>Education</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
