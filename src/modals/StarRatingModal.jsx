import React, { useState } from 'react'
import './StarRatingModal.css'

function StarRatingModal({ onClose, onSubmit }) {
  const [hoverRating, setHoverRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(0)

  const handleClick = (rating) => {
    setSelectedRating(rating)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">별점을 남겨주세요</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${(hoverRating || selectedRating) >= star ? 'filled' : ''}`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleClick(star)}>
              ★
            </span>
          ))}
        </div>
        <div className="modal-buttons">
          <button className="close-btn" onClick={onClose}>
            닫기
          </button>
          <button className="submit-btn" onClick={() => onSubmit(selectedRating)}>
            제출
          </button>
        </div>
      </div>
    </div>
  )
}

export default StarRatingModal
