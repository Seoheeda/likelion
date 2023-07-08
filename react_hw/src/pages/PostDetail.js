import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const PostDetail = ({ posts, deletePost, setPosts }) => {
  const { id } = useParams();

  const post = posts.find((post) => post.id === parseInt(id));

  const [comment, setComment] = useState('');
  const comments = post ? post.comments || [] : [];

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== post.id));
    deletePost(post.id);
  };

  const handleAddComment = () => {



    const newComment = {
      id: Date.now(),
      content: comment,
      time: new Date().toLocaleString(),
    };

    if (!comment) {
      return;
    }

    const updatedPost = { ...post, comments: [...comments, newComment] };
    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
    setPosts(updatedPosts);
    setComment('');
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
    setPosts(updatedPosts);
  };

  if (!post) {
    return <p>No Post to be Found.</p>;
  }


const Box = styled.div`
  display: inline-block;
  width: 1000px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
`;


  return (
    <div>
      <h1> {post.title}</h1>
      <Box>{post.content}</Box>
      <p style={{ textAlign: 'right' }}>{post.time}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', alignItems: 'right' }}>
        <button onClick={handleDelete} style={{marginRight:'10px'}}>Delete</button>
        <button>
          <Link to={`/post/edit/${post.id}`} style={{textDecoration:'none'}}>Edit</Link>
        </button>
      </div>

      <div>
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <ul key={comment.id}>
                <p>{comment.content}</p>
                <p>{comment.time}</p>
                <div>
                  <button onClick={() => handleDeleteComment(comment.id)}>
                    Delete
                  </button>
                </div>
              </ul>
            ))}
          </ul>
        )}
        <div>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment Here"
            style={{ width: '900px', height: '25px', marginBottom:'20px'}}
          />
          <button onClick={handleAddComment} disabled={!comment} style={{ width: '100px', height: '30px', marginLeft: '20px' }}>
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};


export default PostDetail;
