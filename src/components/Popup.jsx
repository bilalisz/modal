import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyle();
  return (
    <Dialog open={openPopup} maxWidth="md" classes={{paper:classes.dialogWrapper}}>
      <DialogTitle>
        <div style={{display:'flex'}}>
         <Typography variant='h6' component='div' style={{flexGrow:'1'}}>
            {title}
         </Typography>
         <buuton className="btn btn-danger" onClick={()=>setOpenPopup(false)}>X</buuton>
         
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div>
         
            {children}
         
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
