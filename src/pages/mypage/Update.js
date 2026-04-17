import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();
    
    const [form] = Form.useForm();
    const { token } = useSelector((state) => state.LoggedReducer);

    const onFinish = async (values) => {
        console.log('Success:', values);
        const url = `/api/member/update.json`;
        const headers = { "Authorization": `Bearer ${token}` };
        const { data } = await axios.post(url, values, { headers: headers });
        console.log(data);
        if (data.status === 200) {
            alert(data.message);
            navigate('/mypage2');
        }
    };

    const handleData = async () => {
        const url = `/api/member/me.json`;
        const headers = { "Authorization": `Bearer ${token}` };
        const { data } = await axios.get(url, { headers });
        console.log(data);

        if (data.status === 200) {
            form.setFieldsValue(data.data);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div>
            <h4>회원정보수정</h4>
            <Form
                form={form}
                onFinish={onFinish}
                style={{ maxWidth: 300 }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    label="아이디"
                    name="username"
                    rules={[{ required: true, message: '아이디 입력' }]}
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    label="이름"
                    name="name"
                    rules={[{ required: true, message: '이름 입력' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="이메일"
                    name="email"
                    rules={[{ required: true, message: '이메일 입력' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        정보변경
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Update;