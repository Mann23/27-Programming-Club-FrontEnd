const Event = (event) => {
   
   const participate = ()=>{
      
   }

return (
   <div> 
      <h1>{event.type}</h1> 
      <h3> {event.time}</h3>
      { event.notexpired && <button onClick={participate}>Participate</button> }
   </div>
   );
}

export default Event;