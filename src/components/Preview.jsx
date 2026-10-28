import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { FaFileDownload } from 'react-icons/fa';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Preview = ({resumeData}) => {
  const onDownloadClick =async()=>{
    
  let resultEl=document.getElementById(resumeData.id ? resumeData.id:'el')
  let canvas= await  html2canvas(resultEl)
  let imgData=canvas.toDataURL('image/png')
  console.log(imgData)
  let pdf =new jsPDF('p','mm','a4')
  let pdfWidth = pdf.internal.pageSize.getWidth()
  let pdfHeight =(canvas.height*pdfWidth)/canvas.width
  pdf.addImage(imgData,'pdf',0,0,pdfWidth,pdfHeight)
  pdf.save('resume.pdf')
  }
  return (
    <Box sx={{pl:4}}>
      <Button onClick={onDownloadClick} sx={{ color: "#795037" }}>
                <FaFileDownload style={{ fontSize: "19px", fontWeight: 400 }} />{" "}
                Download CV
              </Button>
         <Paper id={resumeData.id ? resumeData.id:"el"} sx={{p:3}} elevation={3} >
         
         <Typography variant="h5"sx={{my:1,fontWeight:'bold'}}>{resumeData?.fullName}</Typography>
         <Typography sx={{my:1}}  varient="h6">Phone:{resumeData?.contactNumber}</Typography>
         <Typography sx={{my:1}} varient="h6">Email:{resumeData?.email}</Typography>
         <Typography sx={{my:1}} varient="h6">Linkedin:{resumeData?.linkedin}</Typography>
         <Typography sx={{my:1}} varient="h6">Github:{resumeData?.github}</Typography>
         <Typography sx={{my:1}} varient="h6">Location:{resumeData?.location}</Typography>
          <Divider />
           <Typography variant="h5"sx={{my:1,fontWeight:'bold'}}>Professional Summary</Typography>
           <Typography variant='p'>{resumeData?.summary}</Typography>
            <Divider />
             <Typography variant="h5"sx={{my:1,fontWeight:'bold'}}>Technical Skills</Typography>
             {
                resumeData?.skills?.map((eachskill,index)=>(
                     <Button key={index}>{eachskill}</Button>
                ))
             }
            <Divider />
             <Typography variant="h5"sx={{my:1,fontWeight:'bold'}}>Education</Typography>
             <Typography sx={{my:1}} varient="h6">Bachelor’s Degree in: {resumeData?.degree}</Typography>
         <Typography sx={{my:1}} varient="h6">University/College Name:{resumeData?.university}</Typography>
         <Typography sx={{my:1}} varient="h6">Year of Graduation:{resumeData?.yog}</Typography>
      </Paper>
    </Box>
  )
}   

export default Preview