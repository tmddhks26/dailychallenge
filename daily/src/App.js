import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login'; // Login 컴포넌트 임포트
import Home from './Home'; // Home 컴포넌트 임포트
import './App.css'; // 스타일을 위한 CSS 파일 추가
import myImage1 from './images/calender.png'; // 첫 번째 이미지
import myImage2 from './images/calender(1).png'; // 두 번째 이미지
import myImage3 from './images/calender(2).png'; // 세 번째 이미지

const images = [myImage1, myImage2, myImage3]; // 이미지 배열

function App() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3초마다 이미지 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <Router>
            <div className="app-container">
                <div className="login-section">
                    {/* 로그인 후 홈 페이지로 이동했으면 로그인 화면을 보이지 않도록 */}
                    {!isLoggedIn && <Login onLoginSuccess={() => setIsLoggedIn(true)} />}
                </div>

                {/* 이미지 슬라이드 */}
                <div className="image-section">
                    <div className="image-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div className={`image-wrapper ${index === currentImageIndex ? 'active' : ''}`} key={index}>
                                <img src={image} alt={`slide-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 라우팅 설정 */}
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />  {/* 로그인 페이지 */}
                <Route path="/home" element={<Home />} />  {/* 홈 페이지 */}
            </Routes>
        </Router>
    );
}

export default App;
