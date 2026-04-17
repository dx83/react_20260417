import React, { useState } from 'react';

const Login = () => {

    // 1. 상태 변수
    const [uid, setUid] = useState('');
    const [upw, setUpw] = useState('');

    // 2. 함수
    const handleSubmit = async (e) => {
        // 여기서 백앤드 연동
    }

    // 3. 화면표시

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>로그인</h3>
                <input type="text" placeholder='아이디' value={uid} onChange={(e) => setUid(e.target.value)} /><br />
                <input type="password" placeholder='암호' value={upw} onChange={(e) => setUpw(e.target.value)} /><br />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;