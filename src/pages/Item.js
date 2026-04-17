import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Item = () => {

    const [rows, setRows] = useState([]);

    const handleData = async () => {
        const url = `/api/item/select.json`;
        const { data } = await axios.get(url);
        //console.log(data);
        setRows(data.rows);
    }

    useEffect(() => {
        handleData();
    }, [])

    return (
        <div>
            <h3>물품목록</h3>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>물품명</th>
                        <th>가격</th>
                        <th>내용</th>
                        <th>이미지</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(row => (
                            <tr key={row.no}>
                                <td>{row.no}</td>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                                <td>{row.content}</td>
                                <td><img src={row.imageurl} style={{width:"100px"}} /></td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Item;