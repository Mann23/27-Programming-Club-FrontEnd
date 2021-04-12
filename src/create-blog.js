import React from 'react';
import TextField from '@material-ui/core/TextField';
import './create-blog.css'
import Button from '@material-ui/core/Button';

export default class CreateBlog extends React.Component {



    render() {
        return (
            <div className="WholeBodyField">

                <div className="TitleInfoField">
                    <TextField 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    color="primary" 
                    required={true}
                    fullWidth={true}
                    />
                </div>

                <div className="AbstractInfoField">
                    <TextField 
                    id="outlined-basic" 
                    label="Abstract" 
                    variant="outlined" 
                    color="primary"
                    multiline="true"
                    rows="2" 
                    required={true}
                    fullWidth={true}
                    />
                </div>

                <div className="ContentInfoField">
                    <TextField 
                    id="outlined-basic" 
                    label="Content" 
                    variant="outlined" 
                    color="primary" 
                    multiline="true" 
                    rows="50" 
                    required={true}
                    fullWidth={true}
                    />
                </div>

               <div className="SubmitBtnField">
               <Button variant="contained" color="primary" size="large">
                    Submit
                </Button>
               </div>


            </div>

        )
    }
}