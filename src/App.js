import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';
import Board from './pages/Board';
import BoardInsert from './pages/BoardInsert';
import Item from './pages/Item';
import ItemInsert from './pages/ItemInsert';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';
import Board1 from './pages/Board1';
import BoardContent1 from './pages/BoardContent1';
import Join2 from './pages/Join2';
import Login2 from './pages/Login2';
import { useSelector } from 'react-redux';
import Logout2 from './pages/Logout2';
import Mypage2 from './pages/Mypage2';
import Update from './pages/mypage/Update';
import Updatepw from './pages/mypage/Updatepw';
import Delete from './pages/mypage/Delete';

const App = () => {

  const { logged, token } = useSelector((state) => state.LoggedReducer);

  return (
    <div>
      <h3>App 화면</h3>
      <p>{logged}, {token}</p>
      <hr />
      <Link to="/home" style={{ marginLeft: '20px' }}><button>홈</button></Link>
      <Link to="/login" style={{ marginLeft: '20px' }}><button>로그인</button></Link>
      <Link to="/join" style={{ marginLeft: '20px' }}><button>회원가입</button></Link>
      <Link to="/board" style={{ marginLeft: '20px' }}><button>게시판</button></Link>
      <Link to="/boardinsert" style={{ marginLeft: '20px' }}><button>게시판 글쓰기</button></Link>
      <Link to="/item" style={{ marginLeft: '20px' }}><button>물품</button></Link>
      <Link to="/iteminsert" style={{ marginLeft: '20px' }}><button>물품입력</button></Link>
      <Link to="/board1" style={{ marginLeft: '20px' }}><Button type="primary">게시판1</Button></Link>

      <Link to="/join2" style={{ marginLeft: '20px' }}><Button type="primary">회원가입2</Button></Link>
      {logged === 0 && <Link to="/login2" style={{ marginLeft: '20px' }}><Button type="primary">로그인2</Button></Link>}
      {logged === 1 && <Link to="/logout2" style={{ marginLeft: '20px' }}><Button type="primary">로그아웃</Button></Link>}
      {logged === 1 && <Link to="/mypage2" style={{ marginLeft: '20px' }}><Button type="primary">마이페이지2</Button></Link>}

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/board1" element={<Board1 />}></Route>
        <Route path="/boardcontent1" element={<BoardContent1 />}></Route>
        <Route path="/boardinsert" element={<BoardInsert />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/iteminsert" element={<ItemInsert />}></Route>

        <Route path="/join2" element={<Join2 />}></Route>
        <Route path="/login2" element={<Login2 />}></Route>
        <Route path="/logout2" element={logged === 1 ? <Logout2 /> : <Navigate to="/login2" />}></Route>
        <Route path="/mypage2" element={logged === 1 ? <Mypage2 /> : <Navigate to="/login2" />}>
          <Route path="update" element={<Update />}></Route>
          <Route path="updatepw" element={<Updatepw />}></Route>
          <Route path="delete" element={<Delete />}></Route>
        </Route>

      </Routes>
    </div>
  );
};

export default App;