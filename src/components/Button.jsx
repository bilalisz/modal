import React from 'react';
import {Button} from '@material-ui/core';
const MyButton = ({onClick}) => {
    return (
        <Button variant='outlined' color='primary' style={{margin:'10px'}} onClick={onClick}>Show Pop-Up</Button>
      );
}
 
export default MyButton;