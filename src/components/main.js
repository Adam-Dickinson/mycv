import React from "react";
import LandingPage from "./landingpage";
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { Routes, Route} from 'react-router';



function Main() {
    <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/aboutme" component={AboutMe} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/resume" component={Resume} />
    </Routes>;
}

export default Main;