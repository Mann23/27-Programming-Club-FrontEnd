import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import events from '../data/events';
function AllEvents() {

    const [myEvents] = React.useState(events);


    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            height={697}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
    ); 
}

export default AllEvents;