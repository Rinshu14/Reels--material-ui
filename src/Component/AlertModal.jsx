import React from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function AlertModal(props){

        const handleClose = () => {
            props.handleClose(); 
        };

    return(  
        <>
       <Dialog
       open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
       <DialogTitle id="alert-dialog-title">
          {"Instagram"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please upload file less than 10kb
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Ok</Button> 
        </DialogActions>
      </Dialog>
        </>

    )
}

export default AlertModal;
