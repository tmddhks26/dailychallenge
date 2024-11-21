import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 임포트

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  const handleLogin = () => {
    // 로그인 로직을 처리하고 (예: 유효성 검사)
    if (username && password) {
      onLoginSuccess(); // 로그인 성공 시 부모 컴포넌트에 로그인 상태 전달
      navigate('/home');  // 로그인 후 /home 경로로 이동
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  };

  return (
    <div className="app-container">
      <div className="login-section">
        <h1 className="daily-title">Daily <span className="challenge-title">Challenge</span></h1>
        <h2 className="login-title">LOGIN</h2>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // 아이디 입력 값 관리
          className="input-field"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 값 관리
          className="input-field"
        />
        
        <div className="help-text">
          <span className="find-id">아이디 찾기</span>
          <span className="separator">|</span>
          <span className="find-password">비밀번호 찾기</span>
          <span className="separator">|</span>
          <span className="find-password">회원가입</span>
        </div>

        {/* 로그인 버튼 클릭 시 handleLogin 함수 호출 */}
        <button className="login-button" onClick={handleLogin}>로그인</button> 
      </div>
    </div>
  );
}

export default Login;
