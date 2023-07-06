import React from 'react';
import { LoginWrap } from '../../styled/BookStyled';
import Header from '../main/Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginInput, onLogout } from './AuthoritySlice';

const Logout = () => {
    const {text } = useSelector(state=>state.authority)
    const {id, email} = text
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <LoginWrap>
            <Header/>
            <div className="inner">
                <h2>LOGOUT</h2>
                <div className='form'>
                <div className='formWrap'>
                    <span>아이디 : {id}</span>
                    <span>이메일 : {email}</span>
                    <p className='question'>로그아웃 하시겠습니까?</p>
                </div>
                    <p className='btnWrap'>
                        <button onClick={()=>{navigate('/'), dispatch(onLogout()), dispatch(loginInput(''))}} className='btn'>예</button>
                        <button onClick={()=>navigate('/')} className='btn'>아니요</button>
                    </p>
                </div>

            </div>
        </LoginWrap>
    );
};

export default Logout;