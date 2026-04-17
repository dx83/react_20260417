import { Button, Flex } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BoardContent1 = () => {

    const [searchParam, _] = useSearchParams();

    // 0. 상수
    const page = searchParam.get("page") || 1;

    // 1. state 변수
    // 목록 => [], 1개 => {}
    const [row, setRow] = useState({});

    // 2. 함수
    const handleData = async () => {
        const url = `/api/board/selectone.json?no=${page}`;
        const { data } = await axios.get(url);
        console.log(data);

        if (data.status === 200) {
            setRow(data.result);
        }
    }

    // 3. 이펙트
    useEffect(() => {
        handleData();
    }, [page])

    return (
        <div>
            <h3>게시물 {page}</h3>
            <p>제목 : {row.title}</p>
            <p>작성자 : {row.writer}</p>
            <hr />
            <p>{row.content}</p>
            <hr />
            <p>작성일자 : {row.regdate}</p>
            <p>조회수 : {row.hit}</p>

            <Flex gap="small" wrap>
                <Link to="/board1"><Button type="primary">목록으로</Button></Link>
                <Button>삭제</Button>
                <Button type="dashed">변경</Button>
            </Flex>
        </div>
    );
};

export default BoardContent1;