
import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PNF = () => {
  return (
    <>
    <div style={{textAlign:'center',width:'100%'}}>
      <img src="https://cdn.svgator.com/images/2024/04/book-with-broken-pages-animation-404-error.gif" alt="" />
    </div>
    <Box>
      <Button sx={{mx:80,backgroundColor:'orange',color:'white',mt:5}} component={Link} to={'/'} >Go to Home Page</Button>
    </Box>
    
    </>
  )
}

export default PNF