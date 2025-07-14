import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Education from '../components/education';
import Projects from '../components/projects';
import Skill from '../components/skills';
import Home from '../components/home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />

            </Routes>
        </Router>
    );
}
export default App;
