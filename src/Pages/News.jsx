// src/components/UpdateEventSection.jsx
import React, { useState } from 'react';

const News = () => {
    // true일 때 “업데이트” 탭, false일 때 “이벤트” 탭
    const [isUpdateTab, setIsUpdateTab] = useState(false);

    // 탭별로 바뀔 텍스트
    const labelText = isUpdateTab ? '게임 업데이트' : '게임 이벤트';

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            {/* ─── 탭 버튼 ─── */}
            <div
                style={{
                    display: 'flex',
                    borderBottom: '1px solid #ccc',
                    marginBottom: '10px',
                }}
            >
                <button
                    onClick={() => setIsUpdateTab(true)}
                    style={{
                        flex: 1,
                        padding: '10px 0',
                        background: isUpdateTab ? '#f0f0f0' : 'transparent',
                        border: 'none',
                        borderBottom: isUpdateTab ? '2px solid #000' : '2px solid transparent',
                        cursor: 'pointer',
                        fontWeight: isUpdateTab ? 'bold' : 'normal',
                    }}
                >
                    업데이트
                </button>
                <button
                    onClick={() => setIsUpdateTab(false)}
                    style={{
                        flex: 1,
                        padding: '10px 0',
                        background: !isUpdateTab ? '#f0f0f0' : 'transparent',
                        border: 'none',
                        borderBottom: !isUpdateTab ? '2px solid #000' : '2px solid transparent',
                        cursor: 'pointer',
                        fontWeight: !isUpdateTab ? 'bold' : 'normal',
                    }}
                >
                    이벤트
                </button>
            </div>

            {/* ─── 내용 리스트 ─── */}
            {/* 예시로 3개의 아이템을 넣었고, 각 항목마다 labelText만 바뀌도록 했습니다. */}
            <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '12px' }}>
                {/* 첫 번째 아이템 */}
                <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontWeight: 'bold' }}>게임 이름</div>
                    <div style={{ marginTop: '8px' }}>
                        <span style={{ fontWeight: 'bold' }}>{labelText}:</span>{' '}
                        <span>게임 {labelText} 사진</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>날짜:</span>{' '}
                        <span>2025-06-01</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>{labelText} 내용:</span>{' '}
                        <span>첫 번째 {labelText} 상세 설명이 여기에 들어갑니다.</span>
                    </div>
                </div>

                <hr style={{ borderColor: '#e0e0e0' }} />

                {/* 두 번째 아이템 */}
                <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <div style={{ fontWeight: 'bold' }}>게임 이름</div>
                    <div style={{ marginTop: '8px' }}>
                        <span style={{ fontWeight: 'bold' }}>{labelText}:</span>{' '}
                        <span>게임 {labelText} 사진</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>날짜:</span>{' '}
                        <span>2025-06-15</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>{labelText} 내용:</span>{' '}
                        <span>두 번째 {labelText} 상세 설명이 여기에 들어갑니다.</span>
                    </div>
                </div>

                <hr style={{ borderColor: '#e0e0e0' }} />

                {/* 세 번째 아이템 */}
                <div style={{ marginTop: '16px' }}>
                    <div style={{ fontWeight: 'bold' }}>게임 이름</div>
                    <div style={{ marginTop: '8px' }}>
                        <span style={{ fontWeight: 'bold' }}>{labelText}:</span>{' '}
                        <span>게임 {labelText} 사진</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>날짜:</span>{' '}
                        <span>2025-07-01</span>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>{labelText} 내용:</span>{' '}
                        <span>세 번째 {labelText} 상세 설명이 여기에 들어갑니다.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
