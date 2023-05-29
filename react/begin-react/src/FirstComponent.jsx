import React from 'react';

export default function FirstComponent({univ = '외대'}) {
    
    return (
        <div>
            <h3>{(univ==="시립대") ? null : `${univ}를 만나면 세계가 보인다`}</h3>
        </div>
    );
}