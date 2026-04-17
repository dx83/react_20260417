import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Updatepw = () => {

    const navigate = useNavigate();

    const { token } = useSelector((state) => state.LoggedReducer);

    const onFinish = async (values) => {
        console.log('Success:', values);
        const url = `/api/member/password.json`;
        const headers = { "Authorization": `Bearer ${token}` };
        const { data } = await axios.post(url, values, { headers: headers });
        console.log(data);
        if (data.status === 200) {
            alert(data.message);
            navigate('/mypage2');
        }
    }

    return (
        <div>
            <h4>회원비밀번호변경</h4>
            <Form
                onFinish={onFinish}
                style={{ maxWidth: 300 }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    label="기존 비밀번호"
                    name="oldPassword"
                    rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="새 비밀번호"
                    name="newPassword"
                    rules={[{ required: true, message: '변경할 비밀번호를 입력하세요.' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        비밀번호 변경
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Updatepw;