import { Button } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Mypage2 = () => {
    return (
        <div>
            <h3>마이페이지2</h3>
            <Link to="/mypage2/update"><Button type="primary" style={{ marginLeft: '20px' }}>회원정보수정</Button></Link>
            <Link to="/mypage2/updatepw"><Button type="primary" style={{ marginLeft: '20px' }}>회원비밀번호변경</Button></Link>
            <Link to="/mypage2/delete"><Button type="primary" style={{ marginLeft: '20px' }}>회원탈퇴</Button></Link>
            
            <hr />

            <Outlet />
        </div>
    );
};

export default Mypage2;