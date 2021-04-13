import React from 'react';
import User from '../user';

const ListUsers = ({ users, onDeleted }) => {

  const elements = users.sort(function(a,b) {
      let nameA = a.user.toLowerCase(), nameB = b.user.toLowerCase();
      if(nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
 });

  const people = elements.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <User
          label={item.user}
          onDeleted={() => onDeleted(item.id)} />
      </li>
    );
  });

  return (
    <ul className="list-group">
      { people }
    </ul>
  )
}

export default ListUsers;
