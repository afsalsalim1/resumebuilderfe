import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import heroImage from "../assets/landing.png";
import teamImage from '../assets/team.jpeg'
import grid1 from '../assets/grid1.jpeg'
import grid2 from '../assets/grid2.jpeg'
import grid3 from '../assets/grid3.jpeg'
import grid4 from '../assets/grid4.jpeg'
import grid5 from '../assets/grid5.jpeg'
import grid6 from '../assets/grid6.jpeg'
import grid7 from '../assets/grid7.jpeg'
import grid8 from '../assets/grid8.jpeg'
import grid9 from '../assets/grid9.jpeg'
import grid10 from '../assets/grid10.jpeg'
import grid11 from '../assets/grid11.jpeg'
import grid12 from '../assets/grid12.jpeg'
import { Link } from "react-router-dom";




const Home = () => {

  const people = [
    grid1,
    grid2,
    grid3,
    grid4,
    grid5,
    grid6,
    grid7,
    grid8,
    grid9,
    grid10,
    grid11,
    grid12
  ];

  return (
    <>
    <Box
      sx={{
        width: "100%",
        height: "100vh",

        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 0%",
        backgroundAttachment:"fixed",

        position: "relative",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          width: "50%",
          padding:  "40px 40px",
          textAlign: "center",

          backgroundColor: "rgba(39, 43, 39, 0.65)",

          borderRadius: "7px",

          backdropFilter: "blur(2px)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",

            fontWeight: "bold",

            fontFamily: "Georgia, serif",

            fontSize:  "40px",
            
            lineHeight: 1.25,

            mb: 4,
          }}
        >
          Designed To Get Hired. Your
          <br />
          Skills, Your Story, Your Next Job
          <br />
          – All In One.
        </Typography>

        <Button 
          variant="contained"
          component={Link} to="/resume"
          sx={{
            backgroundColor: "#9a6749",

            color: "white",

            fontFamily: "Georgia, serif",

            fontSize: "15px",

            fontWeight: "bold",

            textTransform: "none",

            padding: "6px 18px",

            borderRadius: "6px",


          }}
        >
          Make your Resume with AI
        </Button>
      </Box>
    </Box>
<Stack>
  <Box sx={{backgroundColor:'white',marginBottom:'50px'}}>

     <Typography sx={{textAlign:'center',fontSize:'35px',marginTop:'40px', fontFamily: "Gravitas One",fontWeight:'600'}}>What's Resume Builder</Typography>

     <Stack direction={'row'} sx={{marginX:'120px',marginTop:'60px',gap:15}}>

      <Typography  sx={{width:'800px',marginLeft:'120px',textAlign:'justify',alignItems:'center' ,fontFamily: "Gravitas One",fontSize:'17px'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems. <br /><br />

      The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.  <br /><br />

      The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF. <br /><br />

     This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</Typography>


<img style={{width:'1000px',height:'550px'}} src="https://ai-resume-builder-may26.vercel.app/resume.png" alt="" />
     </Stack>
</Box>
</Stack>
<Box
  sx={{
    height: "100vh",
    backgroundImage: `url(${teamImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
/>

   <Stack>
    <Box sx={{marginBottom:'50px'}}>

      <Typography sx={{textAlign:'center',fontSize:'35px',marginTop:'40px', fontFamily: "Gravitas One",fontWeight:'600'}}>Testimony</Typography>

      <Stack direction={'row'} sx={{marginX:'120px',marginTop:'60px',gap:15}}>

      <Typography sx={{width:'800px',marginLeft:'120px',textAlign:'justify',alignItems:'center',fontFamily: "Gravitas One",fontSize:'17px'}}>

        <Typography variant="h5" sx={{fontWeight:'500',fontFamily: "Gravitas One"}}>Trusted by professionals worldwide.</Typography><br />
    At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results. <br /><br />

    In fact, users who used rBuilder reported getting hired an average of 48 days faster. <br /><br />

    Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</Typography>



<Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 120px)",
        gap: "20px",
      }}
    >
      {people.map((person, index) => (
        <Box
          key={index}
          component="img"
          src={person}
          alt={`Person ${index + 1}`}
          sx={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
     </Stack>
    </Box>
   </Stack>
  </>
  );
};

export default Home;