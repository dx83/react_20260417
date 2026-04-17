import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardInsert = () => {
    // 1. 상태변수
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');

    // 페이지 이동에 사용
    const navigate = useNavigate();

    // 2. 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 깜박임 방지
        const url = `/api/board/insert.json`;
        const body = { "title": title, "content": content, "writer": writer };
        const { data } = await axios.post(url, body);
        console.log(data);
        if (data.status === 200) {
            alert('글쓰기 성공');
            navigate('/board');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>게시판 글쓰기</h3>
                <input type="text" placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                <input type="text" placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} /><br />
                <input type="text" placeholder='작성자' value={writer} onChange={(e) => setWriter(e.target.value)} /><br />
                <button type="submit">글쓰기</button>
            </form>
        </div>
    );
};

export default BoardInsert;