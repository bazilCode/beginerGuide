import React from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function DialogDelete(props){
    return(
        <div>
             <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
             >
                    <DialogTitle id="alert-dialog-title">
                        {'PLEASE CONFIRM'}
                    </DialogTitle>

                    <DialogContent>
                                 {`Would you like to DELETE "${props.title}'s" data ?`}  
                    </DialogContent>
                    <DialogActions style={{display:"flex", justifyContent:"space-evenly"}}>
                            <Button variant="contained" onClick={()=>props.handleDeleteOK()}>YES</Button>
                            <Button variant="contained" onClick={()=>props.handleClose()}> NO</Button>
                    </DialogActions>
             </Dialog>
        </div>
    )
}