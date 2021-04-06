import React from 'react';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AllEvents.css';
import events from '../data/events';
import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

const localizer = momentLocalizer(moment)

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

const AllEvents = props => (
  <div >
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height:window.innerHeight-50 , margin:10 }}
      views={['month']}
      titleAccessor='title'
      // components={components}
      onSelectEvent={onSelect}
      popup
      toolbar
    />
  </div>
)

export default AllEvents;

//resource , onselect slot, onselect event , ondoubleclick event ,selcectable ,eventPropGetter, slotPropGetter , components