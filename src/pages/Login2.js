import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';

const Login2 = () => {

    const dispatch = useDispatch();

    const onFinish = async (e) => {
        const url = `/api/member/login.json`;
        const { data } = await axios.post(url, e);
        console.log(data);
        if(data.status === 200) {
            console.log(data.token);
            dispatch({type:'login', token:data.token});
        }
    }

    //px08 1234
    return (
        <div>
            <h3>로그인 2</h3>
            <Form
                onFinish={onFinish}
                style={{ maxWidth: 300 }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
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

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        로그인
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Login2;