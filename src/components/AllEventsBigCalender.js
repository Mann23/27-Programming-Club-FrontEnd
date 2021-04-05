import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../data/events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const AllEvents = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default AllEvents;