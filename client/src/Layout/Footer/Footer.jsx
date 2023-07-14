import React from "react";
import "./Footer.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
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

            <div className="row">
                <div className="column">
                    <Link to="/Contact">Contact</Link>
                    <br />
                    <Link to="/">Link2</Link>
                    <br />
                    <Link to="/">Link3</Link>
                    <br />
                    <Link to="/">Link4</Link>
                </div>

                <div className="column">
                <div className="socialmedia_icons">
                        <BsLinkedin 
                            size={30}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        />

                        <BsInstagram
                            size={30}
                            style={{ marginTop: 10 }}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        />

                        <BsTiktok
                            size={30}
                            style={{ marginTop: 10 }}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        /> 

                        <BsSpotify
                            size={30}
                            style={{ marginTop: 10 }}
                            color="var(--dark-green)"
                            onMouseOver={({target})=>target.style.color="#eee"}
                            onMouseOut={({target})=>target.style.color="var(--dark-green)"}
                        />
                    </div>
                </div>

                <div className="column">
                    <img 
                        className="footer-logo"
                        src="https://i.imgur.com/jdh9G07.png" />
                </div>
            </div>

            <Box component="footer">
                <Container maxWidth="lg">
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
    )
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;