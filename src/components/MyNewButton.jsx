import React from 'react';


function MyNewButton( {count, onClick}) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

export default MyNewButton;