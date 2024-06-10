import React from 'react';
import './SchedulerEvent.css';

const SchedulerEvent = ({ event, onIconClick }) => {

  const iconClicked = () => {
    if (typeof onIconClick === "function") {
      onIconClick(event);
    }
  }

  return (
    <div>
      {event.data.text}
      <div className="event-icon-right" onClick={iconClicked}>X</div>
    </div>
  );
};

export default SchedulerEvent;
