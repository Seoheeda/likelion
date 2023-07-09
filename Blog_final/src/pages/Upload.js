import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Upload = ({ addPost, isLoggedIn}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      return;
    } else {
      navigate('/');
    }

    const now = new Date();
    const time = now.toLocaleString();

    const newPost = {
      id: Date.now(),
      title,
      content,
      time
    };

    addPost(newPost);

    setTitle('');
    setContent('');

  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>
          Your Stories Here
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
            style={{ width: '1000px', height: '30px', marginBottom: '30px' }}
          />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's Your Story?"
            style={{ width: '1000px', height: '300px' }}
          ></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', marginBottom:'20px', alignItems: 'right' }}>
          <button type="submit" disabled={!title || !content}>Upload</button>
        </div>
      </form>
    </div>
  );
};

export default Upload;



