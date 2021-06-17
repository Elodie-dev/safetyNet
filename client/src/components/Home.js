import React from 'react';
import Nav from './Nav';

class Home extends React.Component {
    render = () => {
        return (
            <main className="home">
                <Nav/>
                <div className="welcome">
                    <img src="./img/welcome-letters-banner-on-blue.jpg" alt="" />
                </div>
            </main>
        )
    }
}
export default Home;