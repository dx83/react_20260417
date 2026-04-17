import React, { useState } from 'react';

const Join = () => {
    // 1. 상태변수
    const [uid, setUid] = useState('');
    const [upw, setUpw] = useState('');
    const [uname, setUname] = useState('');

    // 2. 함수
    const handleSubmit = async (e) => {
        // 여기서 백앤드 연동
    }
    // 3. 이펙트

    // 4. 화면표시

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>회원가입</h3>
                <input type="text" placeholder='아이디' value={uid} onChange={(e) => setUid(e.target.value)} /><br />
                <input type="password" placeholder='암호' value={upw} onChange={(e) => setUpw(e.target.value)} /><br />
                <input type="text" placeholder='이름' value={uname} onChange={(e) => setUname(e.target.value)} /><br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default Join;