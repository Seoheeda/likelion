import React, { useState } from 'react';
import Item from './Item';
function List({items}) {
    return (
        <div>
            {
                items && items.map((item)=>
                <Item item = {item}/>)
            }
        </div>
    );
}

export default List;