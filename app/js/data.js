const allMedia = [
  (seriesList = [
    {
      title: 'Normal People',
      imgSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81l9ENSk5VL.jpg',
      postUrl: 'https://www.instagram.com/p/CTAv7EDNXg4/',
      type: 'tv show',
    },
    {
      title: 'Arcane',
      imgSrc:
        'https://teoriageek.com.br/wp-content/uploads/2021/10/Arcane_2021_Logo.jpg',
      postUrl: 'https://www.instagram.com/p/CWl6o1zNmr0/',
      type: 'tv show',
    },
    {
      title: 'Move to Heaven',
      imgSrc: 'https://i.mydramalist.com/Rle36_4c.jpg?v=1',
      postUrl: 'https://www.instagram.com/p/CUs5R7FNMmj/',
      type: 'tv show',
    },
    {
      title: 'Modern Love',
      imgSrc:
        'https://br.web.img2.acsta.net/pictures/19/09/13/07/22/4076331.jpg',
      postUrl: 'https://www.instagram.com/p/CSuuVibtXmF/',
      type: 'tv show',
    },
    {
      title: 'This is Us',
      imgSrc:
        'https://br.web.img3.acsta.net/pictures/17/09/27/19/21/2415587.jpg',
      postUrl: 'https://www.instagram.com/p/CScs0jeMz0a/',
      type: 'tv show',
    },
    {
      title: 'Anne With an E',
      imgSrc:
        'https://miro.medium.com/max/600/1*WwPFgrw9ZjW_eMtbztAoZg@2x.jpeg',
      postUrl: 'https://www.instagram.com/p/CR4psnRBb8-/',
      type: 'tv show',
    },
    {
      title: 'Sex Education',
      imgSrc:
        'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2020/01/sex_education_poster.jpg',
      postUrl: 'https://www.instagram.com/p/CSKrKexN0JX/',
      type: 'tv show',
    },
    {
      title: 'Maid',
      imgSrc: 'https://flxt.tmsimg.com/assets/p20546908_b_v13_aa.jpg',
      postUrl: 'https://www.instagram.com/p/CVLyzNMgI9W/',
      type: 'tv show',
    },
    {
      title: 'Fleabag',
      imgSrc:
        'https://br.web.img2.acsta.net/pictures/19/05/07/14/27/4051507.jpg',
      postUrl: 'https://www.instagram.com/p/CXPHVo2hG5n/',
      type: 'tv show',
    },
  ]),
  (animeList = [
    {
      title: 'Fruits Basket',
      imgSrc:
        'https://www.nerdsite.com.br/wp-content/uploads/2021/10/Fruits-Basket-The-Final-Anime-Poster-Promocional.jpg',
      postUrl: 'https://www.instagram.com/p/CQ3smjXrRLx/',
      type: 'anime',
    },
    {
      title: ' Kimi no Suizou wo Tabetai',
      imgSrc:
        'https://ptanime.com/wp-content/uploads/2018/07/Kimi-no-Suizou-wo-Tabetai-filme-poster-promo-version-3.jpg',
      postUrl: 'https://www.instagram.com/p/CTSxbQ1N58z/',
      type: 'anime',
    },
    {
      title: 'Koe no Katachi',
      imgSrc:
        'https://3.bp.blogspot.com/-L-aKE5ieyoA/Wq8vazxQzqI/AAAAAAAACpQ/uS4sxiTTiuU-R9uyR8aXRhznXcr8sKpMACLcBGAs/s1600/00%2BKoe%2Bno%2BKatachi.jpg',
      postUrl: 'https://www.instagram.com/p/CRrxoNxtSWk',
      type: 'anime',
    },
    {
      title: 'Blue Period',
      imgSrc:
        'https://br.web.img2.acsta.net/pictures/21/09/09/11/28/1059013.jpg',
      postUrl: 'https://www.instagram.com/p/CZxWechpgir/',
      type: 'anime',
    },
    {
      title: 'Josee, the Tiger and the Fish',
      imgSrc:
        'https://animefire.net/img/animes/josee-to-tora-to-sakana-tachi-large.webp?v=1',
      postUrl: 'https://www.instagram.com/p/CZNVZHrJrQC/',
      type: 'anime',
    },
    {
      title: "Komi Can't Communicate",
      imgSrc:
        'https://br.web.img3.acsta.net/pictures/21/09/15/07/52/1543626.jpg',
      postUrl: 'https://www.instagram.com/p/CYpPfi0p0ig/',
      type: 'anime',
    },
    {
      title: 'Sangatsu no Lion',
      imgSrc:
        'https://m.media-amazon.com/images/M/MV5BODc2ZTk1OTctMTIyNy00Y2U5LThiOTUtN2Y4NGJlYTM0ODE0XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_QL75_UY281_CR4,0,190,281_.jpg',
      postUrl: 'https://www.instagram.com/p/CXJ9yRHJtoQ/',
      type: 'anime',
    },
    {
      title: 'Tenki no Ko',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/pt/e/e4/Tenki_no_Ko_p%C3%B4ster.png',
      postUrl: 'https://www.instagram.com/p/CUa3wy8tQ8T/',
      type: 'anime',
    },
    {
      title: 'Nana',
      imgSrc:
        'http://4.bp.blogspot.com/-yk9n-yE_MlE/T_L0n5lDUOI/AAAAAAAAAQ8/mN3DLEAUKcE/s1600/11232.jpg',
      postUrl: 'https://www.instagram.com/p/CU-60rsjhYy/',
      type: 'anime',
    },
  ]),
  (moviesList = [
    {
      title: 'Capitão Fantastico',
      imgSrc:
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f1047d7c7e8aa620dbaf91903e091cd21c77d2ac149654daaf7ae5e296c8ccad._RI_V_TTW_.jpg',
      postUrl: 'https://www.instagram.com/p/CVoHmYnNWFE/',
      type: 'movie',
    },
    {
      title: '7 Minutos Depois da Meia Noite',
      imgSrc: 'https://filmestipo.com/img_pt/movie/thumb/4d/23447.jpg',
      postUrl: 'https://www.instagram.com/p/CVRKzE0tRQ5/',
      type: 'movie',
    },
    {
      title: 'Brilho Eterno de Uma Mente Sem Lembranças',
      imgSrc:
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/eff9c25abf9476807dab9997fec31c1509f87532dce56ff26f95bb3e69aba7a5._RI_V_TTW_.jpg',
      postUrl: 'https://www.instagram.com/p/CTX7ESBNHHv/',
      type: 'movie',
    },
    {
      title: 'No Ritmo do Coração',
      imgSrc:
        'https://teoriageek.com.br/wp-content/uploads/2021/09/BzVjmm8l23rPsijLiNLUzuQtyd-683x1024.jpg',
      postUrl: 'https://www.instagram.com/p/CasjwO2MmUf/',
      type: 'movie',
    },
    {
      title: 'A Filha Perdida',
      imgSrc:
        'https://br.web.img3.acsta.net/c_310_420/pictures/21/10/04/09/56/0615489.jpg',
      postUrl: 'https://www.instagram.com/p/CY7Qt7ZINFg/',
      type: 'movie',
    },
    {
      title: 'Extraordinário',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/Wonder_%28filme%29.png/200px-Wonder_%28filme%29.png',
      postUrl: 'https://www.instagram.com/p/CV0_l6pNBdE/',
      type: 'movie',
    },
    {
      title: 'Entre Abelhas',
      imgSrc:
        'https://ocorreiotocantinense.files.wordpress.com/2015/05/fabio_ok.jpg',
      postUrl: 'https://www.instagram.com/p/CT20ny8Fwgw/',
      type: 'movie',
    },
    {
      title: 'Soul',
      imgSrc:
        'https://i0.wp.com/roteirobaby.com.br/portal/wp-content/uploads/2020/05/Filme-Soul-2.jpg?resize=490%2C700&ssl=1',
      postUrl: 'https://www.instagram.com/p/CQ9hp-CLf1r/',
      type: 'movie',
    },
    {
      title: 'Beleza Oculta',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/pt/5/56/Collateral_Beauty.png',
      postUrl: 'https://www.instagram.com/p/CSz3-HTNtuI/',
      type: 'movie',
    },
  ]),
];
