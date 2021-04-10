import React, {Children} from 'react';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AllEvents.css';
import events from '../data/events';
import { Calendar, momentLocalizer } from 'react-big-calendar'

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

const onSelect = (event) =>{
  alert(`${window.height}`)
  console.log(window);
}

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

const AllEvents = props => (
  <div styles ={{styles}}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height:'75vh', width:'75vw' , margin:'5vh auto' }}
      views={['month']}
      titleAccessor='title'
      // components={{
			// 	dateCellWrapper: ColoredDateCellWrapper,
			// }}
      onSelectEvent={onSelect}
      popup
      toolbar
    />
  </div>
)

export default AllEvents;

//resource , onselect slot, onselect event , ondoubleclick event ,selcectable ,eventPropGetter, slotPropGetter , components