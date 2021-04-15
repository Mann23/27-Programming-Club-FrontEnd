import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker,KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from '@material-ui/core/Grid'

export default function DatePicker(props) {

    const { nameDate, labelDate, value,  nameTime, labelTime} = props

    
    const[ SelectedDate, setSelectedDate]=React.useState(
        new Date() //"2022-05-28T12:00:00" default currrent value
    )

    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={6} justify='space-around'>
            <KeyboardDatePicker 
                disablePast
                variant="inline"
                inputVariant="outlined"
                placeHolder={labelDate}
                format="dd/MM/yyyy"
                id='date-picker'
                name={nameDate}
                margin='normal'
                value={SelectedDate}
                onChange={handleDateChange}
            />
            </Grid>
            
            <Grid item xs={6}>
            <KeyboardTimePicker 
                disablePast
                ampm={false}
                variant="inline"
                inputVariant="outlined"
                placeHolder={labelTime}
                id='time-picker'
                name={nameTime}
                margin='normal'
                value={SelectedDate}
                onChange={handleDateChange}
            />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}