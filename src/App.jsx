// import React from 'react'
// import './App.css'
// import Header from './components/Header'
// import SearchBar from './components/SearchBar'
// import GameCard from './components/GameCard'

// const games = [
//   { id: 1, title: '리그 오브 레전드', image: 'https://via.placeholder.com/150' },
//   { id: 2, title: '스타크래프트', image: 'https://via.placeholder.com/150' },
//   { id: 3, title: '배틀그라운드', image: 'https://via.placeholder.com/150' },
// ]

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <SearchBar />
//       <div className="card-list">
//         {games.map((game) => (
//           <GameCard key={game.id} title={game.title} image={game.image} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App

import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import GameCard from './components/GameCard'
import GameList from './components/GameList'

// App.jsx 상단에 추가
import { Link } from 'react-router-dom'

import TestTailwind from './components/TestTailwind'

// function App() {
//   const [showFilter, setShowFilter] = useState(false);

//   const toggleFilter = () => {
//     setShowFilter(!showFilter);
//   };

//   return (
//     <div className="container">
//       <Header />
//       <SearchBar />
//       <div className="cards-section">
//         <div className="header-row">
//           <h2 className="title">모든 게임들</h2>
//           <div className="filter-wrapper">
//             <button className="filter-button" onClick={toggleFilter}>필터</button>

//             {showFilter && (
//               <div className="filter-modal">
//                 <div>날짜순</div>
//                 <div>찜순</div>
//                 <div>별점순</div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="card-grid">
//           {games.map((game) => (
//             <GameCard key={game.id} title={game.title} image={game.image} />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="container">
      <GameList />
    </div>
  )
}

export default App
