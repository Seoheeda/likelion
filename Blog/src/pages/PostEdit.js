import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostEdit = ({ posts, updatePost }) => {
  const { id } = useParams();
  const history = useNavigate();

  const post = posts.find((post) => post.id === parseInt(id));

  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleUpdate = () => {
    const updatedPost = { id: post.id, 
      title: title, 
      content: content,
       time: post.time,
       };
    updatePost(updatedPost);
    history(`/post/${post.id}`);
  };

  if (!post) {
    return <p>No Post to be Found.</p>;
  }

  return (
    <div>
      <h2>Edit Your Post</h2>
      <form>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '1000px', height: '30px', marginBottom: '30px' }}
          />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '1000px', height: '400px' }}
          ></textarea>
        </div>
        <div style={{marginBottom:'10px'}}> 
          <button onClick={handleUpdate} style={{ marginRight: '10px' }}>
            Save
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
