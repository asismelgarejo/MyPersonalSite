import fb from './icons/fb';
import instagram from './icons/instagram';
import twitter from './icons/twitter';
import github from './icons/github';
import linkedin from './icons/linkedin';


const Home = ()=>{
  const view = `
      <div class='home'>
        <img src='https://dw9to29mmj727.cloudfront.net/promo/2016/5349-SeriesHeaderAnime_Tier01_BZK_v2_2000x800.jpg' alt='background' class='home__image' />
        <div class='home__titles'>
          <h3 class='name'>Asis Melgarejo</h3>
          <h1 class='profession'>Frontend Developer</h1>
        </div>
        <ul class='home__social-network'>
          <li><a href='https://twitter.com/asismelgarejo' target='_blank' class='social'>${twitter()}</a></li>
          <li><a href='https://github.com/asismelgarejo' target='_blank' class='social'>${github()}</a></li>
          <li><a href='https://www.linkedin.com/in/asis-melgarejo-lopez-5010b31a7/' target='_blank' class='social'>${linkedin()}</a></li>
          <li><a href='https://www.instagram.com/asismelgarejo/' target='_blank' class='social'>${instagram()}</a></li>
        </ul>
      </div>
  `
  return view;
}

export default Home;