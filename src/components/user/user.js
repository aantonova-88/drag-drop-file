import React from 'react';

import './user.css';

const User = ({ label, onDeleted }) => {
  return (
    <span className="user-list-item">
      <span>{label}</span>
      <button type="button"
              onClick={onDeleted}>
          <i className="fa fa-times"></i>
        </button>
    </span>
  )
}

export default User;
