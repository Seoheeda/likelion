import React from 'react';

// function Button(props){
//     return <button>글쓰기</button>
//     }


// function Create(props) {
//     return <article>    
//       <h2>글 작성</h2>
//       <form onSubmit={event=>{
//         event.preventDefault();
//         const title = event.target.title.value;
//         const body = event.target.body.value;
//         props.onCreate(title,body)
//       }}>
//         <p>제목</p>
//         <p><input type="text" name="title" placeholder="title"/></p>
//         <p>내용</p>
//         <p><textarea name="body" placeholder="body"></textarea></p>
//         <p><input type="submit" value="작성 완료"/></p>     
//       </form>
//     </article>
  // }

function Button(props){
    // Create()
    return <button onClick={clicked}>글쓰기</button>
    }

function onClick(){
    
}
const clicked = () => {
    window.location.assign('./Write/1')
    // Create()
}

export default Button;