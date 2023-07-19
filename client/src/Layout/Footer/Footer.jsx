import React from "react";
import "./Footer.css";
import PropTypes from 'prop-types';
import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { 
    BsSpotify,
    BsLinkedin,
    BsInstagram,
    BsTiktok
    } from 'react-icons/bs';

function Footer(props) {
    const { description, title } = props;

    return(
        <div className="footer">
            {/* Footer Left */}

            <div className="footer-left">
                <div className="footerlogoimage">
                    <img 
                        className="footer-logo"
                        src="https://i.imgur.com/jdh9G07.png" />
                </div>

                <div className="footer-phrase">
                    <h2><i>Unleash Potential, Embrace Opportunities: Strive Ahead!</i></h2>
                </div>

                <div className="footerlinks">
                    <a className="footerlinks" href="/">Products & Services</a>
                    <br />
                    <a className="footerlinks" href="/">Testimonials</a>
                    <br />
                    <a className="footerlinks" href="/About">Who We Are</a>
                    <br />
                    <a className="footerlinks" href="/Team">Meet The Team</a>
                    <br />
                    <a className="footerlinks" href="/Contact">Contact Us</a>
                </div>
            </div>

            <div className="footer-right">
                <div className="footerappointment">
                    <Button variant="solid" color="primary">
                        Book Appointment
                    </Button>
                </div>

                <div className="socialmedia_icons">
                        <BsLinkedin 
                            size={30}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        />

                        <BsInstagram
                            size={30}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        />

                        <BsTiktok
                            size={30}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        /> 

                        <BsSpotify
                            size={30}

                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        />
                    </div>
                </div>

            <div className="footertext">
                <Box component="footer">
                <Container maxWidth={false}>
                    <Typography 
                        marginTop="50px"
                        variant="h6" 
                        align="center" 
                        gutterBottom>
                        StriveOpp
                    </Typography>
                
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="#294243"
                        component="p">
                            Making financing education accessible for students 
                            and early career professionals.
                    </Typography>
                </Container>
            </Box>
        </div>
        </div>
    )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;