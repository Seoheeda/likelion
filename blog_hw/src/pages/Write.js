// import React from 'react';
// import { Link } from 'react-router-dom';


// function Post(props) {
//     return (
//         <div>
//             <h2>글쓰기</h2>
//         </div>
//     );
// }

// export default Post;







// import React, { useState, useRef } from 'react';

// const Write = () => {
//   /* userState사용전 초기화 */
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [lists, setLists] = useState([]);
//   const [lists2, setLists2] = useState([]);
//   const [nextId, setNextId] = useState(0);
//   const inputName = useRef(null);

//   /* 이벤트들 */

//   /* input값에 문자 입력할 때 마다 실행 되는 이벤트 함수*/
//   const onChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const onChange2 = (e) => {
//     setContent(e.target.value);
//   }

//   /* enter or 확인 버튼 클릭 시 발생하는 이벤트 함수*/
//   const submit = (e) => {
//     e.preventDefault();  //새로고침 방지
//     const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
//       id: nextId,
//       text: title,
//     });
//     const about_lists2 = lists2.concat({
//         id: nextId,
//         text: content,
//     })
//     setNextId(nextId + 1); //id값 +1

//     /*방금 붙여준 리스트까지 포함 된 리스트로 세팅하기*/
//     setLists(about_lists); 
//     setTitle(''); //input 태그안에 있는 문자 지워주기
//   };

//   /* 리스트들 화면에 띄우기 위해 map으로 반복 요소 불러오기 */
//   const input_list = lists.map((list) => (
//     <li
//       /*고유 key값 주기*/
//       key={list.id} 
//       /*더블클릭시 삭제할 이벤트*/
//       onDoubleClick={() => removeList(list.id)} 
//       /*클릭시 요소가 수정되는 이벤트*/
//       onClick={() => modify(list.id)}
//     >
//       {list.text}
//     </li>
//   ));

//   const input_list2 = lists.map((list2) => (
//     <li
//       /*고유 key값 주기*/
//       key={list2.id} 
//       /*더블클릭시 삭제할 이벤트*/
//       onDoubleClick={() => removeList(list2.id)} 
//       /*클릭시 요소가 수정되는 이벤트*/
//       onClick={() => modify(list2.id)}
//     >
//       {list2.text}
//     </li>
//   ));

//   //삭제 이벤트 함수
//   const removeList = (id) => {
//     const about_lists = lists.filter((list) => list.id !== id);
//     setLists(about_lists);
//   };

//   //수정 이벤트 함수
//   const modify = (id) => {
//     lists.map((list) => {
//       if (list.id === id) {
//         inputName.current.focus();
//         list.text = inputName.current.value;
//       }
//     });
//     setLists(lists);
//     setTitle('');
//   };

//   return (
//     <div>
//       <form onSubmit={submit}>
//         <input
//           name="title"
//           type="text"
//           placeholder="제목"
//           value={title}
//           onChange={onChange}
//           ref={inputName}
//         />
//         <input 
//           name="conent"
//           type="text"
//           placeholder="내용을 입력해주세요"
//           value={content}
//           onChange={onChange2}
//           ref={inputName}
//         />
//         <button type="submit">확인</button>
//       </form>
//       <hr />
//       <ul>{input_list}</ul>
//       <ul>{input_list2}</ul>
//     </div>
//   );
// };

// // export default ListComponent;

// // function Write() {

// //     return (
// //         <div className='Write'>
// //             <form link="/write/done" method="post">
// //                 <div>
// //                 	<input type='text' id='title_txt' name='title' placeholder='제목'/> 
// //                 </div>
// //                 <div>
// //                 	<textarea id='ex_txt' name='content' placeholder='글을 작성해주세요'></textarea>    
// //                 </div>
// //                 <div id="submit_btn">
// //                     <button type="submit">저장</button>
// //                 </div>
// //             </form>
// // //         </div>
// // //     );
// // // }

// // export default Write;



// import React, { useState } from 'react';

// function Write() {


//     let [글제목, 글제목변경] = useState([''])

//     let [modal,modal변경] = useState(false) 
//     let posts = "군자 훠궈 맛집" 

//     // let [입력값, 입력값변경] = useState('');

//     let [글발행,글발행변경] = useState('');
//     var today = new Date();

//     // function 글발행하기(){
//     //   console('글발행하기')
//     //   var newArray = [...글제목]
//     //   newArray.push(글발행)
//     // }


//     return (
//     //   <div className="App">        

//     //       글제목.map(function(글, i){
//     //         return(
//     //           <div className='list' key={i}>
//     //             {/* map함수안에 key넣어줘야 경고가 안뜸 참고, 0,1,2이런값 넣어주기 */}
//     //             <h3 onClick={ ()=>{ 누른제목변경(i)}} > {글}</h3>
//     //             <p>2023.07.07</p>
//     //             <hr/>
//     //           </div>
//     //         )
//     //       })

//     //     {/* {입력값}  
//     //   <input onChange={ (e)=>{ 입력값변경(e.target.value) } }></input> */}

//     //   {/* 입력이 될때 함수가 실행됨 */}
//     //   {글발행}
//       <div className='publish'>
//         <input onChange={ (e)=>{글발행변경(e.target.value)} }></input>
//         <button onClick = { ()=>{ 
//           var arrayCopy = [...글제목]
//           arrayCopy.unshift(글발행)
//           // push썻는데 앞에 하려면 unshift가 맞지!
//           글제목변경(arrayCopy)
//          } }>저장</button>
//       </div>


//         <button onClick = {()=>{modal변경(!modal)}}>모달창</button>

//         {
//           modal === true
//           ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal> 
//           : null
//         }

//       </div>
//     );
//   }

//   function Modal(props){ 
//     return(
//       <div className="modal">
//           <h2>제목 {props.글제목[props.누른제목]}</h2> 
//           <p>날짜</p>
//           <p>상세내용</p>
//         </div>
//     )
//   }

//   <input></input>
// function Write(props){
//     const [write, setWrite] = useState('');
//     const [title, setTitle] = useState('');


//     return(
//         <>
//             <input onChange={ (e) => {setWrite(e.target.calue)}}></input>
//             <button onClick = { () => {
//                 var arrayCopy = [...title]
//                 arrayCopy.unshift(write)
//             }}>저장</button>

//             <h2>제목 {props.title}</h2>
//         </>

//     )
// }

// export default Write;



import { React, useState } from 'react';

const Write = () => {

    const [state, setState] = useState({
        title:"",
        content:"",
        }
    );

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            <div>
                <span>제목</span>
                <input name="title" value={state.title}
                onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea name="content" value={state.content}
                onChange={handleChangeState}
                />
            </div>
        </div>

    );
};

export default Write;

