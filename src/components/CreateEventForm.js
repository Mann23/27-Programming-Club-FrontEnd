import React, {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core';
import { useForm, Form } from './UseForm';
import Controls from './Controls'
//import DateAndTimePicker from './DateAndTimePicker'

const eventItems=[
    {id:'quiz',title:'Quiz'},
    {id:'session',title:'Session'}

]

const initialFValues = {
    id: 0,
    eventTitle:'',
    googleLink: '',
    eventType: 'quiz',
    eventDateTime:  new Date("2022-05-28T12:00:00")
}



export default function CreateEventForm(){

    const validate=() =>{
        let temp={}
        temp.googleLink=values.googleLink?"":"This feild is required."
        temp.eventTitle=values.eventTitle?"":"This feild is required."
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x=> x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }=useForm(initialFValues);

    const handleSubmit = e =>{
        e.preventDefault()
        if(validate())
        window.alert('Submitted...')
    }


    return(
        <Form onSubmit={handleSubmit}>
            <Grid >
            <Grid item xs={6}>
                    <Controls.Input variant="outlined"
                        name="eventTitle"
                        label="Event Title"
                        value={values.eventTitle}
                        onChange={handleInputChange}
                        error={errors.eventTitle}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.RadioGroup 
                        name="eventType"
                        label="Event Type"
                        value={values.eventType}
                        onChange={handleInputChange}
                        items={eventItems}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input variant="outlined"
                        name="googleLink"
                        label="Google Link"
                        value={values.googleLink}
                        onChange={handleInputChange}
                        error={errors.googleLink}
                    />
                </Grid>
                <Grid>
                    <Controls.DateTimePicker
                        nameDate="eventDate"
                        labelDate="Event Date"
                        value={values.eventDate}
                        nameTime="eventTime"
                        labelTime="Event Time"
                    />
                </Grid>     
                <Grid item xs={6}>
                    <Controls.Button
                       type="submit" 
                       text="Submit"
                    />
                    <Controls.Button
                        text="Reset" 
                        color="default"
                        onClick={resetForm}
                    />
                </Grid>           
            </Grid>
         </Form>
    )
}