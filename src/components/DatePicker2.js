import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDateTimePicker,KeyboardDatePicker,KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from '@material-ui/core/Grid'
import { render } from '@testing-library/react';

export default function DatePicker(props){
    
    const[ SelectedDate, setSelectedDate]=React.useState(
        new Date()
    )

    const handleDateChange=(date)=>{
        setSelectedDate(date)
        props.datas2.changeEndDate(date)
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={6} justify='space-around'>
            <KeyboardDatePicker 
                disablePast
                variant="inline"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                id='date-picker'
                margin='normal'
                value={SelectedDate}
                onChange={handleDateChange}
            />
            </Grid>
        </MuiPickersUtilsProvider>
    )
    
}