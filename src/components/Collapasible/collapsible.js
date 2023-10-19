import React, { useState } from 'react';
import "./collapsible.css"

const Collapsible = (props) => {
    const {eachArr} = props
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapsible = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <li className="collapse-list-item">
        <div className='collapsible-button-container'> 
            <button className="collapsible-button" onClick={toggleCollapsible}>
       {eachArr}
      </button>
      </div>
      {isCollapsed && (
        <div className="content">
          <p>This is the collapsible content. It can be hidden or shown with the button above.</p>
        </div>
      )}
    </li>
  );
}

export default Collapsible;
