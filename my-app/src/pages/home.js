import React from 'react';
import Header from '../components/Header';
import WhoIm from '../components/WhoIm';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
function Home() {
    return(
    <div className="body">
        <Header/>
        <WhoIm/>
        <Stacks></Stacks>
        <Projects/>
    </div>
    )
}

export default Home;