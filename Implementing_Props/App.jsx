import React from 'react';
import Greeting from './Greeting';

function App() {
  let name = "rushikesh";
  return (
    <div>
      <h1>Props Example</h1>
      <h1>Hello this is parent classs variable:- {name}</h1>
      <Greeting var={name} />
    </div>
  );
}

export default App;
