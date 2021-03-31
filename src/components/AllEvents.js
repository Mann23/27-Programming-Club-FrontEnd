import Event from './Event';


// past contest = no button to participate // ongoing contest = text = ongoing // future should have button

// above is part of timetable not participate -  i plan to merge them

//if already participated then 2 option = block button or on request say that already exist


//if participatio req success then show some modal as of success
const AllEvents = () => {

   const events = () => {

   }

   return ( 
      <div>
      {
         events.map( (event) => <Event event={event} /> )
      }
      </div>
   );
}

export default AllEvents;