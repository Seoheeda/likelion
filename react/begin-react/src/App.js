import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		count = count + 1;
	}

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <div>버튼을 {count}번 눌렀습니다!</div>
    </div>
  );
}

export default App;