import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';


function PostList(props) {
    return (
        <div>
            <Link to="/post/1">
                <h3>7월 8일 일기</h3>
            </Link>
            <Link to="/post/2">
                <h3>7월 7일 일기</h3>
            </Link>
            <Link to="/post/3">
                <h3>7월 6일 일기</h3>
            </Link>   
            <Link to="/post/3">
                <h3>7월 5일 일기</h3>
            </Link>       
                
        </div>
    );
}

// function PostList() {
//     const list = [
//         {id:1, title:"7월 8일 일기", date:"2023.07.08"},
//         {id:2, title:"7월 7일 일기", date:"2023.07.07"},
//         {id:3, title:"7월 6일 일기", date:"2023.07.06"},
//         {id:4, title:"7월 5일 일기", date:"2023.07.05"},
//         {id:5, title:"7월 4일 일기", date:"2023.07.04"},
//     ]
//     return (
//         <div>
//             <list items={list}/>
//         </div>
//     );
// }

export default PostList;