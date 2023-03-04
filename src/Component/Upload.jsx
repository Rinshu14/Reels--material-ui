import * as React from 'react';
import ReactDom from "react-dom"
import Button from '@mui/material/Button';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';



function Upload(){
return(
   
    <Button variant="outlined" component="label" style={{color:"#A569BD" ,border:"1px solid #A569BD"}}>
    <MovieFilterIcon />
       Upload Video
  <input hidden accept="video/*" multiple type="file" />
 
</Button>


)
}

export default Upload