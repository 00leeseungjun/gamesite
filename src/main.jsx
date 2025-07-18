import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header' // ← Header import

import App from './App'
import GameDetail from './Pages/GameDetail'
import Community from './Pages/Community' // 🔹 추가
import News from './Pages/News' // ← News.jsx 페이지가 있다고 가정
import './index.css' // 또는 './main.css'
import WriteEditor from './Pages/WriteEditor';
import PostDetail from './Pages/PostDetail'; // ✅ 추가
import MyPosts from './Pages/MyPosts'
import SearchResults from './Pages/SearchResults';
import MyScraps from './Pages/MyScraps'; 

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header></Header>
            
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/game/:id" element={<GameDetail />} />
                <Route path="/community" element={<Community />} /> {/* 🔹 추가 */}
                <Route path="/news" element={<News />} /> {/* 뉴스 라우트 추가 */}
                <Route path="/write" element={<WriteEditor />} />
                <Route path="/post/:id" element={<PostDetail />} /> {/* ✅ 상세 페이지 라우트 추가 */}
                <Route path="/myposts" element={<MyPosts />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/scraps" element={<MyScraps />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
