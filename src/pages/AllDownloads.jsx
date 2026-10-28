import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getResumes } from "../services/AllApis";
import { Box, Button, Grid, Typography } from "@mui/material";
import Preview from "../components/Preview";
import { Link } from "react-router-dom";


const AllDownloads = () => {
  const [resumeDatas, setResumeDatas] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let apiResponse = await getResumes();
      if (apiResponse.status == 200) {
        setResumeDatas(apiResponse.data);
      } else {
        toast.error("Api called Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Api call Failed");
    }
  };
  return (
    <Box>
    
      {
        resumeDatas?.length>0 ?<Box>  
       <Typography variant="h2" sx={{textAlign : 'center',p:4}}>All Downloads</Typography>
       <Grid sx={{p:5}} spacing={5} container>
        {
        resumeDatas.map((eachresume,index)=>(
         <Grid size={6}>
            <Button as= {Link} to='/all-resumes' >all resumes</Button>
            <Preview key={index} resumeData={eachresume}/></Grid> 
        ))
       }
       </Grid>

        </Box> :<Typography>no resumes available</Typography>
      }
    </Box>
  )
};

export default AllDownloads;
