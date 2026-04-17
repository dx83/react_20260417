// Antigravity로 만든 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Card } from 'antd';
import { useSelector } from 'react-redux';

const { Title } = Typography;

const Home = () => {
    const { logged } = useSelector((state) => state.LoggedReducer);

    return (
        <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: 400, textAlign: 'center', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <Title level={2}>홈화면</Title>
                {logged === 0 ? (
                    <>
                        <p style={{ color: '#888', marginBottom: '24px' }}>환영합니다. 서비스를 시작하려면 로그인하세요.</p>
                        <Link to="/login2">
                            <Button type="primary" size="large" block>
                                로그인
                            </Button>
                        </Link>
                    </>
                ) : (
                    <p style={{ color: '#52c41a', fontWeight: 'bold' }}>이미 로그인되었습니다. 즐거운 시간 되세요!</p>
                )}
            </Card>
        </div>
    );
};


export default Home;