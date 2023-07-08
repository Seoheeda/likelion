import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">
                 <h1>One & Only Blog</h1>
            </Link>  
            <Link to="/Write/1">
                <button>글쓰기</button>
            </Link> 
         
        </header>
    )
}
//         <>
//             <Link to="/">
//                 <h1>One & Only Blog</h1>
//             </Link>
//         </>
// }


// function Header(props) {
//       return (
//       <header>
//         <h1>
//             <a href="/" onClick={(event)=>{
//                 // event.preventDefault();
//                 // props.onChangeMode();
//                 }}>{props.title}
//             </a>
//         </h1>
//       </header>
//       )
//     }

export default Header;