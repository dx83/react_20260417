import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout2 = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(window.confirm('로그아웃 할까요?')) {
            dispatch({type:'logout'});
            navigate(`/home`);
        }
        else {
            navigate(`/home`);
        }
    }, []);
};

export default Logout2;