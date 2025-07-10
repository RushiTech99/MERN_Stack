import React from 'react';

function Greeting(props) {
  return (
    <p>Hello this is child class variable took from parent class through props:-, {props.var}! 👋</p>
  );
}

export default Greeting;
