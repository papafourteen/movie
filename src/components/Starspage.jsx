import React from 'react'
import {TextField,createTheme,ThemeProvider, Button}  from '@mui/material'
import { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { StarsResults } from './StarsResults';

export const Starspage = () => {
  const [searchStar,setSearchStar]=useState('')
  const [fetchData,setFetchData]=useState(false)

  const darkTheme=createTheme({
    palette:{
      mode:"dark"
    }
  })
     const handleChangeStar=(e) =>{
      setFetchData(false)
      setSearchStar(e.target.value)
     }
     //console.log(searchStar)
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
    <div style={{display:'flex',  maxWidth:'300px' , justifyContent:'center', margin:'15px auto'}}>
      <TextField
        label="Stars"
        variant="filled"
        onChange={handleChangeStar}
      />
        <Button variant='contained' onClick={()=>setFetchData(true)}>
          <StarIcon />
        </Button>
    </div>
    </ThemeProvider>
    {fetchData && <StarsResults  searchStar={searchStar} />}
    </div>
  )
}




  

