import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Navbar from "react-bootstrap/Navbar";
import '../assets/css/Landingpage.css';
import '../assets/css/media-queries.css';

class LandingNav extends React.Component {

    render() {

        return (
            <Navbar id="footer" sticky="bottom">
                <div className="footer-section">
                    <h5>Social Media</h5>
                    <a href="https://www.facebook.com/The-Hero-Loop-106640024465344/">Facebook</a>
                    <a href="https://www.instagram.com/theheroloop/">Instagram</a>
                    <a href="https://www.linkedin.com/in/the-hero-loop-2400101b4/">Linkedin</a>
                </div>
            </Navbar>
        );
    }
}

export default withRouter(
    inject('navigation', 'user')( observer(LandingNav) )
);