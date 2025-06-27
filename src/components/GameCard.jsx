import React from 'react'
import './GameCard.css'

function GameCard({ title, image }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} className="game-image" />
      <h3 className="game-title">{title}</h3>
    </div>
  )
}

export default GameCard
