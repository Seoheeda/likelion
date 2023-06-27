import React, { createContext } from 'react';
import Component from './Component';

export const AppContext = createContext();

function App() {

	const meal = {
		name: '팝콘',
		price: 5000
	};

  return (
		<AppContext.Provider value={meal}>
			<div>
				<Component/>
			</div>
		</AppContext.Provider>
  );
};

export default App;