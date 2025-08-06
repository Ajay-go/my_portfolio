import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Education from '../components/education';
import Projects from '../components/projects';
import Skill from '../components/skills';
import Home from '../components/home';
import Achievements from '../components/achievements';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />


            </Routes>
        </Router>
    );
}
export default App;
