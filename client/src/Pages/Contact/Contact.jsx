import React from "react";
import './Contact.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from "@mui/material";
import Button from '@mui/joy/Button';

const Contact = () =>{
    return(
        <div className="contact">
            <div className="container-contact">
                <div className="contactleft">
                    <img src="" />
                </div>

                <div className="contactright">
                    <Typography
                        variant="h4" 
                        align="center" 
                        component="h1" 
                        gutterBottom>
                            {'Contact Form'.toUpperCase()}
                    </Typography>

                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <form id="contact-form">
                                <Grid item>
                                        <TextField
                                            style = {{width: 400}}
                                            id="name"
                                            label="Name"
                                            name="userName"
                                            margin="normal"
                                            />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                        style = {{width: 400}}
                                        id="email"
                                        label="Email"
                                        name="email"
                                        margin="normal"
                                        />
                                    </Grid>
                                    
                                    <Grid item>
                                        <TextField
                                        style = {{width: 400}}
                                        id="message"
                                        label="Message"
                                        name="message"
                                        margin="normal"
                                        multiline
                                        rowsMax="4"
                                        />
                                    </Grid>

                                    <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
                                        <Grid item >
                                            <Button
                                            type="reset"
                                            variant="contained"
                                            color="default">
                                            RESET
                                            </Button>
                                        </Grid>
                                        
                                        <Grid item >  
                                            <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary">
                                            Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Contact;