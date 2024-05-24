import React, {useState, useEffect} from 'react';

const Timer = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('시간 가는중..')
        }, 1000);
    }, []);

    return (
        <div>
            <span>타이머가 시작됩니다. 콘솔창을 확인하세요!</span>
        </div>
    )
}

function App() {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
		        {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>
                Start/Stop
            </button>
        </div>
    );
}

export default App;