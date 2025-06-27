const games = [
  {
    title: '리그오브레전드',
    image: 'https://cdn.gameple.co.kr/news/photo/202501/211554_232322_4045.jpg',
  },
  {
    title: '배틀그라운드',
    image: 'https://t1.kakaocdn.net/gamepub/daumgame/common/meta_tag_pubg.png',
  },
  {
    title: '메이플 스토리',
    image: 'https://www.theguru.co.kr/data/photos/20210310/art_16152560003284_ac2b0e.jpg',
  },
  { title: '서든어택', image: 'https://cdn.gameple.co.kr/news/photo/202004/153525_158036_735.jpg' },
  {
    title: '로스트아크',
    image: 'https://www.meconomynews.com/news/photo/202203/64048_78657_5812.png',
  },
  {
    title: '디아블로 4',
    image:
      'https://res09.bignox.com/moniqi-blog/kr-bignox-blog/2023/04/%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C4001-1.jpg',
  },
  {
    title: '발로란트',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0db663bf28844dcbd744935cdd8c71083e0031c-5600x3150.jpg',
  },
  {
    title: '에이펙스 레전드',
    image: 'https://www.joseilbo.com/gisa_img_origin/15517549851551754985_peacetech_origin.jpg',
  },
  {
    title: '마인크래프트',
    image:
      'https://i.namu.wiki/i/LVwPoLGxp4_O9KRZKp5ehWAkBDK45xklMuyfUH3yZZ9oVzsNnvPlw8TAZ0r-mERQx6CZTo0uF4hA4ZSaf87qHA.webp',
  },
  {
    title: '포트나이트',
    image:
      'https://store.nintendo.co.kr/media/catalog/product/cache/3be328691086628caca32d01ffcc430a/0/5/058c5527b4994c98607eeab0e38f8e9ad47b580cb57fa59b3e00062eaf9c62ec.jpg',
  },
  {
    title: '어몽 어스',
    image:
      'https://i.namu.wiki/i/SN8GNG6mMV1Qb9ss6PNASZou1jTI2lebm9IS49mw4x5yXyCHWDCWl8tpgh2XHPyfc61UxJ9WDXppfliW8RtgYA.webp',
  },
  {
    title: '테라리아',
    image:
      'https://i.namu.wiki/i/H3rrfTwtY1oRGfI8PNnfi_pZ_R6X3LXl5fv3YGxXxtGRx1Ds9QCXQ7qaKHBjIP2TrUxF2m2uwY14xDzkjq8Yow.webp',
  },
  {
    title: '모여봐요 동물의 숲',
    image:
      'https://upload.wikimedia.org/wikipedia/ko/6/67/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94_%EB%8F%99%EB%AC%BC%EC%9D%98_%EC%88%B2_%ED%95%9C%EA%B5%AD%EC%96%B4_%EC%95%84%ED%8A%B8.jpg',
  },
  {
    title: '콜 오브 듀티: 모던 워페어',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/capsule_616x353.jpg?t=1678294805',
  },
  {
    title: '몬스터 헌터: 월드',
    image:
      'https://image.api.playstation.com/cdn/HP0102/CUSA09554_00/l9eJJZczCIIcT1otva8c0EvKhlVyPy0zVLdhVZ5RJzO7NGZrRvoDOhIEFU1sJwtM.png',
  },
  {
    title: '오버워치 2',
    image: 'https://cdn.asoworld.com/img/8a7e02d6d5334ba297598fe9e62cf49a.jpg',
  },
  {
    title: '슈퍼 마리오 오디세이',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
  },
  {
    title: '엘든 링',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
  },
  {
    title: '사이버펑크 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
  },
  {
    title: '더 위쳐 3: 와일드 헌트',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
  },
  {
    title: '스타크래프트 2',
    image:
      'https://i.namu.wiki/i/nx8FVJ53L3TZKuugmj3e3E6gcANi3GpkB01DOzrTBLAot1P_eJs_PEL86pwJigtryGvFJHYRqzbzhR1ECAF5kw.webp',
  },
  {
    title: '라스트 오브 어스',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
  },
  { title: '포탈', image: 'https://sm.ign.com/t/ign_nordic/cover/p/portal/portal_h2g3.600.jpg' },
  {
    title: '포탈 2',
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDdfMjU2/MDAxNTY1MTU1NDA4MjIz.6f8EZu2z804-b4NM-R5SkYipy9fuQKjU-0cWWGzuYOAg.84BC36GDFMQlQlYJPOprykcVHGAkXXIWvZY6ouX1yBEg.PNG.eternalguard/SE-76028111-780e-4702-adc0-896baac18521.png?type=w800',
  },
  {
    title: '언더테일',
    image: 'https://i1.sndcdn.com/avatars-B2yqhdTLpAFZJhZW-IQfSfA-t1080x1080.jpg',
  },
  {
    title: '니어 : 오토마타',
    image: 'https://sm.ign.com/ign_kr/game/n/nier-autom/nier-automata_ukh3.jpg',
  },
  {
    title: '심즈 4',
    image:
      'https://image.api.playstation.com/vulcan/img/rnd/202111/3019/Btg9YJMDRcWgsbD5E6rOcdT5.jpg',
  },
  {
    title: '그랜드 체이스',
    image: 'https://www.techm.kr/news/photo/202311/116995_147258_4539.jpg',
  },
  { title: '엘소드', image: 'https://m.elsword.nexon.com/main/images/img_opengraph.jpg' },
  { title: '레드 데드 리뎀션', image: 'https://fontmeme.com/images/Red-Dead-Redemption-Cover.jpg' },
  {
    title: '레드 데드 리뎀션 2',
    image:
      'https://fiu-original.b-cdn.net/fontsinuse.com/use-images/103/103817/103817.jpeg?filename=775430034-november-erscheint-red-dead-redemption-auch.jpg',
  },
  {
    title: '브롤 스타즈',
    image:
      'https://appdata.hungryapp.co.kr/data_file/data_img/201811/15/W154225590025508241.jpg/hungryapp/resize/500/',
  },
  { title: '클로저스', image: 'https://cdn.tgdaily.co.kr/news/photo/202106/309363_71585_1554.jpg' },
  {
    title: '던전 앤 파이터',
    image: 'https://cdn.greenpostkorea.co.kr/news/photo/202212/203591_204516_390.jpg',
  },
  {
    title: '다크 소울',
    image:
      'https://i.namu.wiki/i/IF7Y4jzC4M6YZBT3AOYqAqpntgPUqgsjkH3ED5L55smqEwjgpOCWuNxKxSF-MvszLL-tPea4nQ9Fh9CnXa8d6Q.webp',
  },
].map((game, index) => ({
  id: index + 1,
  ...game,
}))

export default games
