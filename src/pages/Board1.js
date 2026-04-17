import { Pagination, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Board1 = () => {

    const navigate = useNavigate();

    const columns = [
        { title: '글번호', dataIndex: 'no', key: 'no' },
        { title: '제목', dataIndex: 'title', key: 'title' },
        { title: '작성자', dataIndex: 'writer', key: 'writer' },
        { title: '조회수', dataIndex: 'hit', key: 'hit' },
        { title: '날짜', dataIndex: 'regdate', key: 'regdate' },
    ]

    const [searchParams, _] = useSearchParams();

    const [page, setPage] = useState(searchParams.get("page") || 1);
    const [cnt, setCnt] = useState(10);
    const [rows, setRows] = useState([]);
    const [total, setTotal] = useState(0);

    const handleData = async () => {
        const url = `/api/board/selectpage.json?page=${page}&cnt=${cnt}`;
        const { data } = await axios.get(url);
        //console.log(data);
        if (data.status === 200) {
            setTotal(data.total);
            setRows(data.rows);
        }
    }

    const onChangePage = (page, pageSize) => {
        //console.log(page, pageSize);
        setPage(page);
        navigate(`/board1?page=${page}`);
    }

    useEffect(() => {
        handleData();
    }, [page]);

    // 아래 Table 태그는 antd 에서 가져온 테이블 디자인
    // 콘솔창 에러 해결 : rowKey로 키값 변경
    return (
        <div>
            <h3>게시판1</h3>
            <Table columns={columns} dataSource={rows} rowKey={"no"} size={"small"} pagination={false}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            //console.log(record, rowIndex);
                            navigate(`/boardcontent1?page=${record.no}`);
                        },
                    };
                }} />
            <Pagination defaultCurrent={page} total={total} onChange={onChangePage} />
        </div>
    );
};

export default Board1;