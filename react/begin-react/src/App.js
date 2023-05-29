import React from 'react';
import FirstComponent from './FirstComponent';

function Box({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" , backgroundColor:"orange"}}>
      {children}
    </div>
  );
}

function App() {
  
  return (
    <div>
      <Box>
        <FirstComponent />
        <FirstComponent univ="경희대"/>
        <FirstComponent univ="시립대"/>
      </Box>
    </div>
  );
}

export default App;