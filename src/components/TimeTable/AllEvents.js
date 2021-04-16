import React, {Children , useEffect} from 'react';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AllEvents.css';
import events from '../../data/events';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import moment from 'moment'

const localizer = momentLocalizer(moment)
const CURRENT_DATE = moment().toDate();
// let MyToolbar =() => (
//     <div>
//         <p>hello</p>
//     </div>
// )

// let components = {
//   // event: MyEvent, // used by each view (Month, Day, Week)
//   toolbar: MyToolbar,
// }



const ColoredDateCellWrapper = ({children, value}) =>{

  console.log(children, value)
	return React.cloneElement(Children.only(children), {
		style: {
			...children.style,
		},
	});
}
const styles={

}

export default function AllEvents(props){
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();

  const [data, setEvent] = React.useState(events);

  useEffect(() => {
    async function fetchMyEvents() {
      let response = await fetch('http://localhost:4000/event')
      response = await response.json()
      response.forEach(event => {
        event.startDate = new Date(event["startDate"])
        event.endDate = new Date(event["endDate"])
      })
      setEvent([...data,...response]) 
    }


    fetchMyEvents()
  }, [])


  const onSelect = (event) =>{
    setTitle(event.title)
    setStart(moment(event.start).format("DD MMMM YYYY, hh:mm A"));
    setEnd(moment(event.end).format("DD MMMM YYYY, hh:mm A"))
    setOpen(true);
    console.log(event,moment(event.start).format("DD MMMM YYYY, HH:mm"));
  }
  
  const handleClose = () => {
    setTitle('')
    setStart('');
    setEnd('')
    setOpen(false);
  };

  return(
  <div styles ={{styles}}>
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="startDate"
      endAccessor="endDate"
      style={{ height:'75vh', width:'75vw' , margin:'5vh auto' }}
      views={['month']}
      titleAccessor='name'
      // components={{
			// 	dateCellWrapper: ColoredDateCellWrapper,
			// }}
      onSelectEvent={onSelect}
      popup
      selectable
      toolbar
    />
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <span className='label'>Start:</span><span> {start}</span><br/>
          <span className='label'>End:</span><span> {end}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> window.open("someLink", "_blank")} color="primary">
            Join Now
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  </div>
);
}
//resource , onselect slot, onselect event , ondoubleclick event ,selcectable ,eventPropGetter, slotPropGetter , components