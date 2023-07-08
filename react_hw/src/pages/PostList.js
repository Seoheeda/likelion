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

const PostList = ({ posts }) => {
  return (
    <div>
      <Titles>
        <h2>Your Stories</h2>
          <Link to="/write">
            <button style={{marginBottom:'10px'}}>Post</button>
          </Link>   
      </Titles>
      <Box>
        {posts.length === 0 ? (
          <p>게시물이 없습니다.</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <ul key={post.id}>
                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none'}}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.content}</p>
                <p>{post.time}</p>
              </ul>
            ))}
          </ul>

        )}
      </Box>
    </div>
  );
}

PostList.defaultProps = {
  posts: [
    {
      id: 1,
      title: 'Best day Ever!',
      content: "Today I met my friends. I loved it !",
      time: '2023-07-08 12:00 PM',
    },
  ],
};

export default PostList;

