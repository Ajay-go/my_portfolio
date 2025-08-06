import React from "react";
import './sidebar.css';
import { useNavigate, useLocation } from "react-router-dom";
import signa from './signa.png';

function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Define nav items for easier management
    const navItems = [
        { label: "About", path: "/" },
        { label: "Skills", path: "/skill" },
        { label: "Education", path: "/education" },
        { label: "Projects", path: "/projects" },
        { label: "Achievements", path: "/achievements" },
    ];

    return (
        <div id="sidebar" role="navigation" aria-label="Main Navigation">
            <div id="sign">
                <img src={signa} alt="Logo" />
            </div>
            <div id="list">
                <ul>
                    {navItems.map(({ label, path }) => (
                        <li
                            key={path}
                            onClick={() => navigate(path)}
                            className={location.pathname === path ? 'active' : ''}
                            tabIndex={0}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    navigate(path);
                                }
                            }}
                            role="link"
                            aria-current={location.pathname === path ? 'page' : undefined}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
