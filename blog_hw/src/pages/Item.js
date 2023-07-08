import React, {useState} from 'react';
import PostList from './PostList';

function Item({item}) {
    return (
        <div>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.createdAt}</span>
        </div>
    );
}

export default Item;