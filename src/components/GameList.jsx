import React, { useState } from 'react'
import GameCard from './GameCard'
import { Link } from 'react-router-dom'
import './GameList.css'

// 게임 목록 (id 포함)
/* ---------- 원본 게임 목록( id 제외 ) ---------- */
export const baseGames = [
    {
        title: '리그오브레전드',
        image: 'https://cdn.gameple.co.kr/news/photo/202501/211554_232322_4045.jpg',
        releaseDate: '2009-10-27',
        developer: 'Riot Games',
        playType: '멀티',
        progressType: 'MOBA / 실시간 전투',
        tags: ['MOBA', '전략', '팀플레이'],
        platforms: ['PC'],
        isLiked: true
    },
    {
        title: '배틀그라운드',
        image: 'https://t1.kakaocdn.net/gamepub/daumgame/common/meta_tag_pubg.png',
        releaseDate: '2017-12-20',
        developer: 'PUBG Studios',
        playType: '싱글·멀티',
        progressType: '배틀로얄 / FPS',
        tags: ['FPS', '서바이벌'],
        platforms: ['PC', 'PS4', 'Xbox One'],
        isLiked: false
    },
    {
        title: '메이플 스토리',
        image: 'https://www.theguru.co.kr/data/photos/20210310/art_16152560003284_ac2b0e.jpg',
        releaseDate: '2003-04-29',
        developer: 'Nexon',
        playType: '멀티',
        progressType: '2D 액션 RPG',
        tags: ['RPG', '캐주얼', '도트'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '서든어택',
        image: 'https://cdn.gameple.co.kr/news/photo/202004/153525_158036_735.jpg',
        releaseDate: '2005-08-26',
        developer: 'Nexon GT',
        playType: '멀티',
        progressType: '온라인 FPS',
        tags: ['FPS', 'e스포츠'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '로스트아크',
        image: 'https://www.meconomynews.com/news/photo/202203/64048_78657_5812.png',
        releaseDate: '2018-11-07',
        developer: 'Smilegate RPG',
        playType: '멀티',
        progressType: '핵앤슬래시 MMORPG',
        tags: ['MMORPG', '핵앤슬래시'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '디아블로 4',
        image: 'https://res09.bignox.com/moniqi-blog/kr-bignox-blog/2023/04/%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C4001-1.jpg',
        releaseDate: '2023-06-06',
        developer: 'Blizzard Entertainment',
        playType: '싱글·멀티',
        progressType: '핵앤슬래시 ARPG',
        tags: ['RPG', '핵앤슬래시', '다크판타지'],
        platforms: ['PC', 'PS5', 'Xbox Series X|S'],
        isLiked: true
    },
    {
        title: '발로란트',
        image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0db663bf28844dcbd744935cdd8c71083e0031c-5600x3150.jpg',
        releaseDate: '2020-06-02',
        developer: 'Riot Games',
        playType: '멀티',
        progressType: '5v5 전술 FPS',
        tags: ['FPS', '전술', 'e스포츠'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '에이펙스 레전드',
        image: 'https://www.joseilbo.com/gisa_img_origin/15517549851551754985_peacetech_origin.jpg',
        releaseDate: '2019-02-04',
        developer: 'Respawn Entertainment',
        playType: '멀티',
        progressType: '배틀로얄 FPS',
        tags: ['FPS', '배틀로얄'],
        platforms: ['PC', 'PS4', 'Xbox One', 'Switch'],
        isLiked: false
    },
    {
        title: '마인크래프트',
        image: 'https://i.namu.wiki/i/LVwPoLGxp4_O9KRZKp5ehWAkBDK45xklMuyfUH3yZZ9oVzsNnvPlw8TAZ0r-mERQx6CZTo0uF4hA4ZSaf87qHA.webp',
        releaseDate: '2011-11-18',
        developer: 'Mojang Studios',
        playType: '싱글·멀티',
        progressType: '샌드박스 / 생존',
        tags: ['샌드박스', '건축', '생존'],
        platforms: ['PC', '콘솔', '모바일'],
        isLiked: false
    },
    {
        title: '포트나이트',
        image: 'https://store.nintendo.co.kr/media/catalog/product/cache/3be328691086628caca32d01ffcc430a/0/5/058c5527b4994c98607eeab0e38f8e9ad47b580cb57fa59b3e00062eaf9c62ec.jpg',
        releaseDate: '2017-07-21',
        developer: 'Epic Games',
        playType: '싱글·멀티',
        progressType: '배틀로얄 / 샌드박스',
        tags: ['배틀로얄', '샌드박스'],
        platforms: ['PC', 'PS5', 'Xbox', 'Switch', 'Mobile'],
        isLiked: false
    },
    {
        title: '어몽 어스',
        image: 'https://i.namu.wiki/i/SN8GNG6mMV1Qb9ss6PNASZou1jTI2lebm9IS49mw4x5yXyCHWDCWl8tpgh2XHPyfc61UxJ9WDXppfliW8RtgYA.webp',
        releaseDate: '2018-06-15',
        developer: 'Innersloth',
        playType: '멀티',
        progressType: '파티 / 추리',
        tags: ['파티', '추리'],
        platforms: ['PC', 'Mobile', 'Switch'],
        isLiked: false
    },
    {
        title: '테라리아',
        image: 'https://i.namu.wiki/i/H3rrfTwtY1oRGfI8PNnfi_pZ_R6X3LXl5fv3YGxXxtGRx1Ds9QCXQ7qaKHBjIP2TrUxF2m2uwY14xDzkjq8Yow.webp',
        releaseDate: '2011-05-16',
        developer: 'Re-Logic',
        playType: '싱글·멀티',
        progressType: '2D 샌드박스 / 생존',
        tags: ['샌드박스', '생존', '도트'],
        platforms: ['PC', '콘솔', '모바일'],
        isLiked: false
    },
    {
        title: '모여봐요 동물의 숲',
        image: 'https://upload.wikimedia.org/wikipedia/ko/6/67/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94_%EB%8F%99%EB%AC%BC%EC%9D%98_%EC%88%B2_%ED%95%9C%EA%B5%AD%EC%96%B4_%EC%95%84%ED%8A%B8.jpg',
        releaseDate: '2020-03-20',
        developer: 'Nintendo',
        playType: '싱글·멀티',
        progressType: '슬로우 라이프 / 샌드박스',
        tags: ['샌드박스', '슬로우라이프'],
        platforms: ['Switch'],
        isLiked: false
    },
    {
        title: '콜 오브 듀티: 모던 워페어',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/capsule_616x353.jpg?t=1678294805',
        releaseDate: '2019-10-25',
        developer: 'Infinity Ward',
        playType: '싱글·멀티',
        progressType: 'FPS / 캠페인',
        tags: ['FPS', '현대전'],
        platforms: ['PC', 'PS4', 'Xbox One'],
        isLiked: false
    },
    {
        title: '몬스터 헌터: 월드',
        image: 'https://image.api.playstation.com/cdn/HP0102/CUSA09554_00/l9eJJZczCIIcT1otva8c0EvKhlVyPy0zVLdhVZ5RJzO7NGZrRvoDOhIEFU1sJwtM.png',
        releaseDate: '2018-01-26',
        developer: 'Capcom',
        playType: '싱글·멀티',
        progressType: '액션 RPG / 헌팅',
        tags: ['ARPG', '헌팅'],
        platforms: ['PC', 'PS4', 'Xbox One'],
        isLiked: true
    },
    {
        title: '오버워치 2',
        image: 'https://cdn.asoworld.com/img/8a7e02d6d5334ba297598fe9e62cf49a.jpg',
        releaseDate: '2022-10-04',
        developer: 'Blizzard Entertainment',
        playType: '멀티',
        progressType: '6v6 팀 FPS',
        tags: ['FPS', '팀플레이'],
        platforms: ['PC', 'PS5', 'Xbox', 'Switch'],
        isLiked: false
    },
    {
        title: '슈퍼 마리오 오디세이',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
        releaseDate: '2017-10-27',
        developer: 'Nintendo',
        playType: '싱글',
        progressType: '3D 플랫폼',
        tags: ['플랫포머', '어드벤처'],
        platforms: ['Switch'],
        isLiked: false
    },
    {
        title: '엘든 링',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
        releaseDate: '2022-02-25',
        developer: 'FromSoftware',
        playType: '싱글·멀티',
        progressType: '오픈월드 ARPG',
        tags: ['ARPG', '오픈월드', '소울라이크'],
        platforms: ['PC', 'PS5', 'Xbox Series X|S'],
        isLiked: false
    },
    {
        title: '사이버펑크 2077',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
        releaseDate: '2020-12-10',
        developer: 'CD Projekt RED',
        playType: '싱글',
        progressType: '오픈월드 RPG',
        tags: ['RPG', '오픈월드', 'SF'],
        platforms: ['PC', 'PS5', 'Xbox Series X|S'],
        isLiked: true
    },
    {
        title: '더 위쳐 3: 와일드 헌트',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
        releaseDate: '2015-05-19',
        developer: 'CD Projekt RED',
        playType: '싱글',
        progressType: '오픈월드 RPG',
        tags: ['RPG', '오픈월드', '판타지'],
        platforms: ['PC', 'PS5', 'Xbox', 'Switch'],
        isLiked: false
    },
    {
        title: '스타크래프트 2',
        image: 'https://i.namu.wiki/i/nx8FVJ53L3TZKuugmj3e3E6gcANi3GpkB01DOzrTBLAot1P_eJs_PEL86pwJigtryGvFJHYRqzbzhR1ECAF5kw.webp',
        releaseDate: '2010-07-27',
        developer: 'Blizzard Entertainment',
        playType: '싱글·멀티',
        progressType: 'RTS',
        tags: ['RTS', 'e스포츠', 'SF'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '라스트 오브 어스',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
        releaseDate: '2013-06-14',
        developer: 'Naughty Dog',
        playType: '싱글',
        progressType: '액션 어드벤처',
        tags: ['어드벤처', '스토리', '좀비'],
        platforms: ['PS4', 'PC'],
        isLiked: false
    },
    {
        title: '포탈',
        image: 'https://sm.ign.com/t/ign_nordic/cover/p/portal/portal_h2g3.600.jpg',
        releaseDate: '2007-10-10',
        developer: 'Valve',
        playType: '싱글',
        progressType: '1인칭 퍼즐',
        tags: ['퍼즐', 'FPS'],
        platforms: ['PC', '콘솔'],
        isLiked: true
    },
    {
        title: '포탈 2',
        image: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDdfMjU2/MDAxNTY1MTU1NDA4MjIz.6f8EZu2z804-b4NM-R5SkYipy9fuQKjU-0cWWGzuYOAg.84BC36GDFMQlQlYJPOprykcVHGAkXXIWvZY6ouX1yBEg.PNG.eternalguard/SE-76028111-780e-4702-adc0-896baac18521.png?type=w800',
        releaseDate: '2011-04-19',
        developer: 'Valve',
        playType: '싱글·멀티',
        progressType: '1인칭 퍼즐',
        tags: ['퍼즐', 'FPS', '협동'],
        platforms: ['PC', '콘솔'],
        isLiked: false
    },
    {
        title: '언더테일',
        image: 'https://i1.sndcdn.com/avatars-B2yqhdTLpAFZJhZW-IQfSfA-t1080x1080.jpg',
        releaseDate: '2015-09-15',
        developer: 'tobyfox',
        playType: '싱글',
        progressType: '2D RPG',
        tags: ['RPG', '인디', '스토리'],
        platforms: ['PC', '콘솔', 'Switch'],
        isLiked: false
    },
    {
        title: '니어 : 오토마타',
        image: 'https://sm.ign.com/ign_kr/game/n/nier-autom/nier-automata_ukh3.jpg',
        releaseDate: '2017-02-23',
        developer: 'PlatinumGames',
        playType: '싱글',
        progressType: '액션 RPG',
        tags: ['ARPG', 'SF', '스토리'],
        platforms: ['PC', 'PS4', 'Xbox One', 'Switch'],
        isLiked: false
    },
    {
        title: '심즈 4',
        image: 'https://image.api.playstation.com/vulcan/img/rnd/202111/3019/Btg9YJMDRcWgsbD5E6rOcdT5.jpg',
        releaseDate: '2014-09-02',
        developer: 'Maxis',
        playType: '싱글',
        progressType: '생활 시뮬레이션',
        tags: ['시뮬레이션', '샌드박스'],
        platforms: ['PC', '콘솔'],
        isLiked: false
    },
    {
        title: '그랜드 체이스',
        image: 'https://www.techm.kr/news/photo/202311/116995_147258_4539.jpg',
        releaseDate: '2003-08-06',
        developer: 'KOG Studios',
        playType: '멀티',
        progressType: '2D 액션 RPG',
        tags: ['ARPG', '온라인'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '엘소드',
        image: 'https://m.elsword.nexon.com/main/images/img_opengraph.jpg',
        releaseDate: '2007-12-27',
        developer: 'KOG Studios',
        playType: '멀티',
        progressType: '2.5D 액션 RPG',
        tags: ['ARPG', '온라인'],
        platforms: ['PC'],
        isLiked: true
    },
    {
        title: '레드 데드 리뎀션',
        image: 'https://fontmeme.com/images/Red-Dead-Redemption-Cover.jpg',
        releaseDate: '2010-05-18',
        developer: 'Rockstar San Diego',
        playType: '싱글·멀티',
        progressType: '오픈월드 웨스턴',
        tags: ['어드벤처', '웨스턴'],
        platforms: ['PS3', 'Xbox 360'],
        isLiked: false
    },
    {
        title: '레드 데드 리뎀션 2',
        image: 'https://fiu-original.b-cdn.net/fontsinuse.com/use-images/103/103817/103817.jpeg?filename=775430034-november-erscheint-red-dead-redemption-auch.jpg',
        releaseDate: '2018-10-26',
        developer: 'Rockstar Studios',
        playType: '싱글·멀티',
        progressType: '오픈월드 웨스턴',
        tags: ['어드벤처', '웨스턴', '오픈월드'],
        platforms: ['PC', 'PS4', 'Xbox One'],
        isLiked: false
    },
    {
        title: '브롤 스타즈',
        image: 'https://appdata.hungryapp.co.kr/data_file/data_img/201811/15/W154225590025508241.jpg/hungryapp/resize/500/',
        releaseDate: '2018-12-12',
        developer: 'Supercell',
        playType: '멀티',
        progressType: '3v3 슈팅',
        tags: ['MOBA', '캐주얼'],
        platforms: ['Mobile'],
        isLiked: false
    },
    {
        title: '클로저스',
        image: 'https://cdn.tgdaily.co.kr/news/photo/202106/309363_71585_1554.jpg',
        releaseDate: '2014-12-30',
        developer: 'Naddic Games',
        playType: '멀티',
        progressType: '2.5D 액션 RPG',
        tags: ['ARPG', '온라인', '애니'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '던전 앤 파이터',
        image: 'https://cdn.greenpostkorea.co.kr/news/photo/202212/203591_204516_390.jpg',
        releaseDate: '2005-08-10',
        developer: 'Neople',
        playType: '멀티',
        progressType: '2D 액션 RPG',
        tags: ['ARPG', '온라인', '도트'],
        platforms: ['PC'],
        isLiked: false
    },
    {
        title: '다크 소울',
        image: 'https://i.namu.wiki/i/IF7Y4jzC4M6YZBT3AOYqAqpntgPUqgsjkH3ED5L55smqEwjgpOCWuNxKxSF-MvszLL-tPea4nQ9Fh9CnXa8d6Q.webp',
        releaseDate: '2011-09-22',
        developer: 'FromSoftware',
        playType: '싱글·멀티',
        progressType: '액션 RPG / 소울라이크',
        tags: ['ARPG', '소울라이크', '다크판타지'],
        platforms: ['PC', 'PS3', 'Xbox 360'],
        isLiked: true
    },
];


/* ---------- id 자동 부여 ---------- */
const games = baseGames.map((game, index) => ({ id: index + 1, ...game }));





function GameList() {
    const [showFilter, setShowFilter] = useState(false)

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div>
            <div className="cards-section">
                <div className="header-row">
                    <h2 className="title">모든 게임들</h2>
                    <div className="filter-wrapper">
                        <button className="filter-button" onClick={toggleFilter}>
                            필터
                        </button>
                        {showFilter && (
                            <div className="filter-modal">
                                <div>날짜순</div>
                                <div>찜순</div>
                                <div>별점순</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="card-grid">
                    {games.map((game) => (
                        <Link
                            to={`/game/${game.id}`}
                            key={game.id}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <GameCard title={game.title} image={game.image} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameList