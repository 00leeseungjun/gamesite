// src/modals/SignupModal.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SignupModal.css';

const SignupModal = ({ onClose }) => {
    const [form, setForm] = useState({
        user_id: '',
        password: '',
        confirmPassword: '',
        nickname: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        const { user_id, password, confirmPassword, nickname, email } = form;

        if (!user_id || !password || !confirmPassword || !nickname || !email) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const res = await axios.post('http://192.168.0.192:5000/auth/register', {
                user_id,
                password,
                nickname,
                email
            });

            alert(res.data.message); // MESSAGES.REGISTER_SUCCESS
            onClose(); // 가입 성공 시 모달 닫기
        } catch (err) {
            alert(err.response?.data?.message || '회원가입 실패');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="login-header">
                    <h4 className="modal-title">회원가입</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <div className="modalSpace">
                    <input
                        name="user_id"
                        placeholder="아이디"
                        className="input"
                        value={form.user_id}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        className="input"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="비밀번호 확인"
                        className="input"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    <input
                        name="nickname"
                        placeholder="닉네임"
                        className="input"
                        value={form.nickname}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="이메일 주소"
                        className="input"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <button className="login-btn" onClick={handleSubmit}>
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
