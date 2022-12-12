import React from 'react';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onChangeId = e => {
        setId(e.target.value);
    };

    const onChangePw = e => {
        setPw(e.target.value);
    };

    return (
        <div className="Login">
            <div className="Login-form">
                <input
                    className='Login-input'
                    type="text"
                    placeholder='전화번호, 사용자 이름 또는 이메일'
                    onChange={onChangeId}
                   />
                <input
                    className='Login-input'
                    type="text"
                    placeholder='비밀번호'
                    onChange={onChangePw}
                   />
            </div>
        </div>
    );
};

export default Login;