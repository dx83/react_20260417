import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';

const Join2 = () => {

    const onFinish = async (e) => {
        console.log(e);

        const url = `/api/member/register.json`;
        const { data } = await axios.post(url, e);
        console.log(data);
    }

    //px08 1234 수강생 @mail.com
    return (
        <div>
            <h3>회원가입 2</h3>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 300 }}
                onFinish={onFinish}
            >

                <Form.Item
                    label="아이디"
                    name="username"
                    rules={[{ required: true, message: '사용할 아이디를 입력해 주세요!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="비밀번호"
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력해 주세요!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="이름"
                    name="name"
                    rules={[{ required: true, message: '사용자의 이름을 입력해 주세요!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="이메일"
                    name="email"
                    rules={[{ required: true, message: '사용자의 이메일을 입력해 주세요!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        회원가입
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Join2;