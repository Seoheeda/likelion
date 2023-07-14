import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Box = styled.div`
  display: inline-block;
  width: 1000px;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 20px
`;

const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const PostList = ({ posts, isLoggedIn }) => {
  return (
    <div>
      <Titles>
        <h2>Your Stories</h2>
        {isLoggedIn ? (
          <Link to="/write">
            <button style={{ marginBottom: '10px' }}>Post</button>
          </Link>
        ) : (
          <button disabled style={{ marginBottom: '10px' }}>
            Post
          </button>
        )}
      </Titles>
      <Box>
        {posts.length === 0 ? (
          <p>게시물이 없습니다.</p>
        ) : (
          <ul>
            <div style={{ display: 'flex' }}>
              <h3 style={{ marginLeft: '70px' }}>Title</h3>
              <h3 style={{ marginLeft: 'auto', marginRight: '100px' }}>Date</h3>
            </div>
            {posts.map((post) => (
              <ul style={{ display: 'flex' }} key={post.id}>
                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ marginLeft: '30px', fontWeight: 'inherit', color: 'black' }}>{post.title}</h3>
                </Link>
                {/* <p>{post.content}</p> */}
                {post.time ? ( 
                  <p style={{ marginLeft: 'auto', marginRight: '100px' }}>{post.time}</p>
                ) : null}
              </ul>
            ))}
          </ul>

        )}
      </Box>
    </div>
  );
}

export default PostList;

// PostList.defaultProps = {
//   posts: [
//     {
//       id: 1,
//       title: '',
//       content: '',
//       time: '',
//     },
//   ],
// };



