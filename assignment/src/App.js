import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

// const App = () => {
//   return(
//     <div>
//       <Route path="/Home" element={<Home/>} exact/>
//       <Route path="/About" element={<About />} />
//     </div>
//   );
// };

// export default App;

const App = () => {
	return (
		<div className='App'>
			<Home />
			<About />
		</div>
	);
}

export default App;