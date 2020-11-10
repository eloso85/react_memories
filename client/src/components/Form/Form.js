import React, {useState} from 'react';

import {TextField, Button, Typography, Paper} from '@material-ui/core';

//styles
import useStyles from './styles'

const Form = ()=>{
    const [postData, setPostData] = useState({
        creator:'', title:'', message:'',tags:'',selctedFile:'',
    })
    const classes = useStyles();

    const handleSubmit = ()=>{

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant ="h6">Creating a Memory</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="creator" 
                fullWidth
                value={postData.creator}
                onChange={(e)=>setPostData({...postData, creator: e.target.value})}
                />
            </form>
        </Paper>
    );
}

export default Form