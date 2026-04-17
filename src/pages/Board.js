import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Board = () => {
    // 1. 상태변수
    const [rows, setRows] = useState([]);

    // 2. 함수
    const handleData = async () => {
        const url = `/api/board/select.json`;
        const { data } = await axios.get(url);
        //console.log(data);
        //console.log(data.status);
        //console.log(data.rows);
        setRows(data.rows);
    }

    // 3. 이펙트
    useEffect(() => {
        handleData();
    }, []);
    // 4. 화면표시

    return (
        <div>
            <h3>게시판</h3>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(row => (
                            <tr key={row.no}>
                                <td>{row.no}</td>
                                <td>{row.title}</td>
                                <td>{row.writer}</td>
                                <td>{row.hit}</td>
                                <td>{row.regdate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Board;