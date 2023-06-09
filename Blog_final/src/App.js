import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import PostList from './pages/PostList';
import Upload from './pages/Upload';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetail from './pages/PostDetail';
import PostEdit from './pages/PostEdit';
import Login from './pages/Login';
import Signin from './pages/Signin';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [nickname, setNickname] = useState('');
  const [realnickname, setRealNickname] = useState('');
  const [realpassword, setRealpassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);



  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  }

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };


  const handleLogout  = () => {
    setIsLoggedIn(false); 
  };

  const handleSignin = (nickname, password, realnickname, realpassword) => {
    if (nickname === realnickname && password === realpassword) {
      setIsLoggedIn(true);
    }

  };
  
  const Head = styled.div`
  background-Color: lightblue;
`;

  const Foot = styled.div`
  background-Color: lightblue;
`;

  const Body = styled.div`
  flex: 1;
  display: flex;
  justify-Content: center;
`;

  const Whole = styled.div`
  display: flex;
  flex-Direction: column;
  min-Height: 100vh;
`;

  return (
    <Router>
      <Whole>
        <Head> 
          <Header isLoggedIn={isLoggedIn} handleLogout ={handleLogout}/>
        </Head>
        <Body>
          <Routes>
            <Route path="/" element={<PostList posts={posts} isLoggedIn={isLoggedIn} />} />
            <Route path="/write" element={<Upload addPost={addPost} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} deletePost={deletePost} setPosts={setPosts}/>}></Route>
            <Route path="/post/edit/:id" element={<PostEdit posts={posts} updatePost={updatePost} />}></Route>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} realnickname={realnickname} realpassword={realpassword} onSignin={handleSignin}/>}></Route>
            <Route path="/signin" element={<Signin onSignin={handleSignin} setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} onSignin={handleSignin}/>}></Route>
          </Routes>
        </Body>
        <Foot>
          <Footer />
        </Foot>
      </Whole>
    </Router>
  );
};

export default App;


