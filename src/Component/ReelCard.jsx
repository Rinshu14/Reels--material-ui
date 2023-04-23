import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import "./ReelCard.css"
import { useContext, useState, useEffect } from 'react';
import userContext from '../Context/userContext';
import CommentCard from "./CommentCard";




export default function ReelCard(props) {




  useEffect(() => {
    let options = {
      root: document.querySelector(".videos"),

      threshold: 0.8,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        //  entry.target.innerText = `${Math.round(entry.intersectionRatio * 100)}%`
        if (entry.isIntersecting) {

          // console.log(entry.target.querySelector("video"))
          // entry.target.querySelector("video").autoplay = true
          // console.log(entry.target.querySelector("video").autoplay)
          entry.target.querySelector("video").play()
          console.log(entry.target.querySelector("video").muted)
          entry.target.querySelector("video").muted=false
          console.log(entry.target.querySelector("video").muted)
          // entry.target.querySelector("video").muted=false
        }
        else
        {
          entry.target.querySelector("video").pause();

        }

      })
    }, options);
    let videos = document.querySelectorAll(".video-card")
    videos.forEach((video) => {
      observer.observe(video)
    })
    //observer.observe(document.querySelector(".video-card"));


    return (() => { 
     
      observer.disconnect() })
  }, [])



  let [isComment, SetIsComment] = useState(false)
  let cmntBtnClick = () => {
    if (isComment == false) {
      document.querySelector(".videos").style.overflow = "hidden"
      SetIsComment(true)
    }
    else {
      SetIsComment(false)
      document.querySelector(".videos").style.overflow = "scroll"
    }
  }

  function cardClick(pid) {
    (document.querySelector(`#${pid}`).paused) ? document.querySelector(`#${pid}`).play() : document.querySelector(`#${pid}`).pause();
  }


  function VideoEndd() {
    if (document.querySelector(`.${props.postData.pid}`).nextSibling != null) {
      document.querySelector(`.${props.postData.pid}`).nextSibling.scrollIntoView()
    }
  }


  const userDetails = useContext(userContext)

  const useStyles = makeStyles({
    userName: {
      position: "absolute",
      bottom: "0.5rem",
      left: "1rem"
    },
    hjhj: {
      scrollSnapAlign: "start",
      borderRadius: "0px !important",
      height: "452px"
    }
  })

  const classes = useStyles();
  return (<>
    <Card key={props.postData.pid} className={`${classes.hjhj} video-card ${props.postData.pid}`} sx={{ minHeight: '200px', width: '280px' }} onClick={(e) => { cardClick(props.postData.pid) }} >
      <CardCover >

        <video
          muted
          autoPlay
          id={`${props.postData.pid}`}
          onEnded={VideoEndd}
        >
          <source
            src={`${props.postData.postUrl}`}
            type="video/mp4" />
        </video>

      </CardCover>

      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <p className="post_id" style={{ display: "none" }}>{props.postData.pid}</p>
        <Avatar
          src={`${props.postData.userProfileImage}`}
          size="sm"
          sx={{ '--Avatar-size': '2.5rem' }}
        />
        <Typography className={classes.userName} level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {props.postData.userName}
        </Typography>
        <Button className="lkebtn" disableRipple variant="outlined" onClick={() => { props.postLike(props.postData.pid) }}>
          {props.postData.like.includes(userDetails.userDetails.uid) ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
        </Button>
        <Button className="cmntbtn" disableRipple variant="outlined" onClick={cmntBtnClick}><ModeCommentIcon /></Button>
      </CardContent>

    </Card>
    {isComment ? <CommentCard key={props.postData.pid} dispFlag={isComment} postId={props.postData.pid} /> : <></>}
  </>
  );
}