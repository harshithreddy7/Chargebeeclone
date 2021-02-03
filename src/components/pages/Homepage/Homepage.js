import React from 'react';
import { Button } from '../../Button';
import './Homepage.css';
import { Link } from "react-router-dom";
import { createMuiTheme , responsiveFontSizes, MuiThemeProvider,Typography } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes((theme));

// const heading ='Subscription Billing & Revenue Operations';
// const subheading='For Fast-growth B2B SaaS';
// const desc ='Get the operational sophistication to achieve, sustain,and scale recurring revenue.';
const Homepage = () => {
    return (
        <div className='Homepage'>
           <div className='home_container'>
            <h1>Subscription Billing& Revenue Operations</h1>
            <h2>For Fast-growth B2B SaaS</h2>
            <p>Get the operational sophistication to achieve, sustain,and scale recurring revenue.</p>
            </div>
            <div className='homepage_button'>
                <Link to='/ScheduleaDemo'>
                <Button buttonSize='btn--large' buttonColor='purple'>Schedule a Demo</Button></Link>
                <Button buttonSize='btn--wide'>Sign up for free</Button>
            </div>
        </div>
    )
}

export default Homepage;
{/* <MuiThemeProvider theme={theme}>
<Typography variant='h1'  gutterBottom>{heading}</Typography>
<Typography variant='h2' gutterBottom>{subheading}</Typography>
<Typography variant='p' gutterBottom>{desc}</Typography>
</MuiThemeProvider> */}
