import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemInsert = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');
    const [imageurl, setImageurl] = useState('noimage.jpg');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        // 백앤드 연동 하지 않으므로 async 사용 안함
        console.log(e.target.files);

        // 파일의 길이가 0보다 크면 첨부한 상태
        if (e.target.files.length > 0) {
            setImageurl(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
        // 그렇지 않으면 첨부하지 않은 상태
        else {
            setImageurl('noimage.jpg');
            setImage(null);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `/api/item/insert.json`;
        const headers = { "Content-Type": "multipart/form-data" }; // 이미지 파일의 경우 필수
        const body = new FormData();
        body.append("name", name);
        body.append("price", price);
        body.append("content", content);
        body.append("image", image);

        const { data } = await axios.post(url, body, { headers });
        console.log(data);
        if (data.status === 200) {
            alert('물품등록완료');
            navigate('/item');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>물품입력</h3>
                <input type="text" placeholder='물품명' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="number" placeholder='가격' value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                <input type="text" placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} /><br /><br />
                <img src={imageurl} style={{ height: '100px', width: '100px' }} />
                <input type="file" onChange={handleChange} /><br /><br />
                <button type="submit">물품등록</button>
            </form>
        </div>
    );
};

export default ItemInsert;