import React, { useState } from 'react'
import './News.css'

const News = () => {
  const [isUpdateTab, setIsUpdateTab] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const labelText = isUpdateTab ? '게임 업데이트' : '게임 이벤트'

  const newsData = [
    {
      id: 1,
      type: 'update',
      title: '오버워치',
      subtitle: '업데이트 소식',
      date: '2025.05.06',
      content:
        '역대급 스킨으로 호평 받는 이번 7시즌의 새로운 스킨들을 확인하고, 그 외 다양한 정보와 이벤트 소식까지 한 눈에 확인하고 빠르게 즐기실 수 있도록 오버워치 2 메인 페이지가 새롭게 업데이트 되었습니다.',
      image: 'https://blog.kakaocdn.net/dn/bEMVV5/btrEBXBjxlk/2y7BQ0NwxH8zlkjZz4zkEK/img.jpg',
    },
    {
      id: 2,
      type: 'update',
      title: '오버워치',
      subtitle: '업데이트 소식',
      date: '2025.05.06',
      content:
        '역대급 스킨으로 호평 받는 이번 7시즌의 새로운 스킨들을 확인하고, 그 외 다양한 정보와 이벤트 소식까지 한 눈에 확인하고 빠르게 즐기실 수 있도록 오버워치 2 메인 페이지가 새롭게 업데이트 되었습니다.',
      image: 'https://blog.kakaocdn.net/dn/bEMVV5/btrEBXBjxlk/2y7BQ0NwxH8zlkjZz4zkEK/img.jpg',
    },
    {
      id: 3,
      type: 'update',
      title: '오버워치',
      subtitle: '업데이트 소식',
      date: '2025.05.06',
      content:
        '역대급 스킨으로 호평 받는 이번 7시즌의 새로운 스킨들을 확인하고, 그 외 다양한 정보와 이벤트 소식까지 한 눈에 확인하고 빠르게 즐기실 수 있도록 오버워치 2 메인 페이지가 새롭게 업데이트 되었습니다.',
      image: 'https://blog.kakaocdn.net/dn/bEMVV5/btrEBXBjxlk/2y7BQ0NwxH8zlkjZz4zkEK/img.jpg',
    },
    {
      id: 4,
      type: 'event',
      title: '오버워치',
      subtitle: '이벤트 안내',
      date: '2025.06.20',
      content: '여름 한정 이벤트가 진행 중입니다. 스킨과 보상을 획득하세요!',
      image: 'https://blog.kakaocdn.net/dn/9dfqHv/btrDYx3KxTx/1GM8BRrWIgKkONjbN2YtU1/img.jpg',
    },
  ]

  const filteredData = newsData.filter(
    (item) =>
      item.type === (isUpdateTab ? 'update' : 'event') &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="news-container">
      <div className="news-tabs-search">
        <div className="tabs">
          <button className={isUpdateTab ? 'active' : ''} onClick={() => setIsUpdateTab(true)}>
            업데이트
          </button>
          <button className={!isUpdateTab ? 'active' : ''} onClick={() => setIsUpdateTab(false)}>
            이벤트
          </button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>검색</button>
        </div>
      </div>

      <div className="news-list">
        {filteredData.map((item) => (
          <div className="news-item" key={item.id}>
            <div className="news-text">
              <h3>{item.title}</h3>
              <h2>{item.subtitle}</h2>
              <p className="date">{item.date}</p>
              <p className="content">{item.content}</p>
            </div>
            <div className="news-image">
              <img src={item.image} alt="썸네일" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
