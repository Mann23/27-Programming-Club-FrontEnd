import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import {Grid, Paper, Typography, Avatar} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button , makeStyles } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
//import DatePicker from 'react-datepicker';
import DatePicker from './DatePicker'
import DatePicker2 from './DatePicker2'
import TimePicker from './TimePicker'
import TimePicker2 from './TimePicker2'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const paperStyle={padding:'30px 20px', width:600, margin:"30px auto"}
/*
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))
*/
class CreateEvent extends Component {
	constructor(props) {
		super(props)

		this.state = {
            title:'',
            eventType:'quiz',
			googleLink: '',
            startDate:new Date(),
            startTime:new Date(),
            endDate:new Date(),
            endTime:new Date()            
            
		};
        this.changeHandler = this.changeHandler.bind(this);
        this.handleStartDateTimeChange = this.handleStartDateTimeChange.bind(this);
        this.handleEndDateTimeChange = this.handleEndDateTimeChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.changeEndTime = this.changeEndTime.bind(this);
	}

    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }

	changeHandler = e => {
        e.preventDefault()
		this.setState({ [e.target.name]: e.target.value })        
	}

    handleStartDateTimeChange(date) {
        this.setState({
          startTime: date
        })
      }
    handleEndDateTimeChange(date) {
        this.setState({
          endTime: date
        })
    }

	submitHandler = e => {
		e.preventDefault()
        let Title=this.state.title;
        let GoogleLink=this.state.googleLink;
        if(Title.length < 1)
        {
            alert("Title must not be empty");
        }
        else if(GoogleLink.length < 1)
        {
            alert("Google Link must not be empty");
        }
        else{
            alert("Submitted")
        }
        // console.log(this.state)

        let data= this.state
        console.log(data);
        // const sDate = data.startDate.getFullYear() +''+
        //  data.startDate.getMonth()<10?'-0'?'-'+data.startDate.getMonth() +
        //  '-'+ (data.startDate.getDate()+1)+
        //  data.startTime.getHours()<10?'T0'?'T'+data.startTime.getHours()+
        //  data.startTime.getMinutes()<10?':0'?':'+data.startTime.getMinutes()+
        //  data.startTime.getSeconds()<10?':0'?':'+data.startTime.getSeconds()+'.000Z'
         
        //  const eDate = data.endDate.getFullYear() + ''+
        // data.endDate.getMonth()<10?'-0'?'-'+data.endtDate.getMonth() +
        // '-'+ (data.endDate.getDate()+1)+

        // data.endTime.getHours()<10?'T0'?'T'+data.endTime.getHours()+
        // data.endTime.getMinutes()<10?':0'?':'+data.endTime.getMinutes()+
        // data.endTime.getSeconds()<10?':0'?':'+data.endTime.getSeconds()+'.000Z'

        data = {
            name:data.title,
            isQuiz :data.eventType =='quiz'?true :false,
			link:data.googleLink,
            startDate:data.startDate,//sDate,
            endDate:data.enddate//eDate,            
		};
        console.log(data);
        fetch("http://localhost:4000/event/insert",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + localStorage.getItem('accessToken')
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
            // window.location.reload(false); 
        })

        //this.resetForm()
		
	}
    onRadioChange = (e) => {
        this.setState({
          eventType: e.target.value
        });
    }

    resetForm = () => {
        this.setState({ 
            title:'',
            eventType:'quiz',
			googleLink: '',
            startDate: new Date(),
            endDate: new Date(),
            startTime: new Date(),
            endTime: new Date()
        });
    }

    changeStartDate(item)
    {
        this.setState({startDate:item})
    }
    changeEndDate(item)
    {
        this.setState({endDate:item})
    }
    changeStartTime(item)
    {
        this.setState({startTime:item})
    }
    changeEndTime(item)
    {
        this.setState({endTime:item})
    }
	render() {
		const { title, eventType, googleLink, startDate,endDate, startTime, endTime} = this.state
		return (
            <Grid>
			<Paper elevation={20} style={paperStyle}>
                    <Grid align='center' >
                        <Avatar style={{backgroundColor:'#5c6bc0'}}>
                        <AddCircleIcon/>
                        </Avatar>
                        <h1 > Create Event</h1>
                    </Grid>

			    <form  onSubmit={this.submitHandler} >  {/*className={useStyles.root}*/}
                <Grid align='left' >     
                    <Typography style={{color:'#757575'}}  variant="body1" gutterBottom >Event Title</Typography>                
					<Grid >
                        <TextField
                        fullWidth
                        variant="outlined"
                        label=""
                        name="title"
                        value={this.title}
                        onChange={this.changeHandler}
                        >                      
                        </TextField>
                    </Grid> 

                    <Grid  item xs={12}>
                    <Typography  style={{color:'#757575' , marginTop:5,marginBottom:0 }} size="large" variant="body1" gutterBottom >Event Type</Typography>
                        <FormControl component="fieldset">
                            <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="gender" name="gender1" value={eventType} onChange={this.onRadioChange}>
                                <FormControlLabel value="quiz" control={<Radio />} label="Quiz" />
                                <FormControlLabel value="session" control={<Radio />} label="Session" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Typography style={{color:'#757575', marginTop:5}}  variant="body1" gutterBottom >Google Link</Typography>                
                    <Grid>
                        <TextField
                        fullWidth
                        variant="outlined"
                        label=""
                        name="googleLink"
                        value={this.googleLink}
                        onChange={this.changeHandler}
                        >                      
                        </TextField>
                    </Grid>
                    <Typography style={{color:'#757575'}}  variant="body1" gutterBottom >Start Date</Typography>                
                    <Grid>
                        <DatePicker datas={
                            { startDate:this.state.startDate,changeStartDate:this.changeStartDate.bind(this)}
                        }/>
                    </Grid>
                    <Typography style={{color:'#757575'}}  variant="body1" gutterBottom >Start Time</Typography>                
                    <Grid>
                        <TimePicker datas3={
                            { startTime:this.state.startTime,changeStartTime:this.changeStartTime.bind(this)}
                        }/>
                    </Grid>
                    <Typography style={{color:'#757575'}}  variant="body1" gutterBottom >End Date</Typography>                
                    <Grid>
                        <DatePicker2 datas2={
                            { endDate:this.state.endDate,changeEndDate:this.changeEndDate.bind(this)}
                        }/>
                    </Grid>
                    <Typography style={{color:'#757575'}}  variant="body1" gutterBottom >End Time</Typography>                
                    <Grid>
                        <TimePicker2 datas4={
                            { endTime:this.state.endTime,changeEndTime:this.changeEndTime.bind(this)}
                        }/>
                    </Grid>
                    <Grid align='center'>
                        <Button  size="large" variant="contained" color="primary" onClick={ this.submitHandler} >Submit</Button>
                        <Button style={{marginLeft:20}} size="large" variant="contained" color="secondary" onClick={()=> window.location.reload(false) }  >Reset</Button>
                    </Grid>
					{/*<button type="submit">Submit</button>
                    <button type="reset" onClick={this.resetForm}>Reset</button>*/}
                </Grid>
				</form>
			</Paper>
            </Grid>
		)
	}
}

export default CreateEvent