
import React from 'react';
import { Link } from 'react-router-dom';

function Toggle({ isVisible, onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>{isVisible ? 'Hide Form' : 'Show Form'}</button>
      <Link to="/Registration_Form">Go to Form</Link>
    </div>
  );
}

export default Toggle;