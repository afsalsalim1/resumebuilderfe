import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'black'}} position="static">
        <Toolbar>
    
         <Stack direction={'row'} sx={{gap:80,margin:'20px'}} >
             <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder

          </Typography>
          <Typography sx={{width:"500px", textAlign:"justify "}}>
            An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.
          </Typography>
          </Box>
         <Stack direction={'column'} sx={{gap:2}}>
             <Typography>Contact US</Typography>
             <Typography><MdMarkEmailUnread /> resumebuilder12@gmail.com</Typography>
             <Typography><FaPhoneAlt />9847218873</Typography>
             <Typography variant="h5" >Connect With Us</Typography>
             <Stack direction={'row'} sx={{gap:2}}>
                <Typography><FaInstagram /></Typography>
             <Typography><FaFacebook /></Typography>
             <Typography><FaWhatsapp /></Typography>
             </Stack>


         </Stack>
         </Stack>
        </Toolbar>
        <Typography variant='h6' sx={{textAlign:'center',marginBottom:'70px'}}>Designed & built with ❤️ using React</Typography>
      </AppBar>
    </Box>
  )
}

export default Footer