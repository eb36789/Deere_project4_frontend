import React from "react";
import "./index.css";


let WeeklyPlanner = () => {
  return (
      <div className="plannercontent">
           <div className="comingsoon">
          <h3> COMING SOON! </h3>
          </div>
    <div className="weeklycalendar">
<div className="dayoftheweek">Sunday</div>
 <div className="dayoftheweek">Monday</div>
 <div className="dayoftheweek">Tuesday</div>
 <div className="dayoftheweek">Wednesday</div>
 <div className="dayoftheweek">Thursday</div>
 <div className="dayoftheweek">Friday</div>
 <div className="dayoftheweek">Saturday</div>
 </div>
 </div>
  );
};

export default WeeklyPlanner;