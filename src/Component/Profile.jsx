import * as React from 'react';
import Navbar from './Navbar';
import "./Profile.css"
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
// import "./Profile.css"



function Profile(){
return(
   <>
   <Navbar/>
   <div className="info-section"  >
    <div className="prof_img" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP7ARHenfnGXcxCIhmDxObHocM8FPbjyaBg&usqp=CAU")`}}></div>
    <div style={{marginTop:"1.5rem",marginLeft:"25rem"}}>
        <p >{`Email : rayvv.gmail.com`}</p>
        <p >{`post : 3`}</p>
    </div>
    

    
   </div>


   <div className="upload-section">
    

  <Card sx={{ height: '300px', width: '150px' ,margin:"20px"}} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
     
    

    </Card>
    <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
</div>
   </>


)
}

export default Profile;