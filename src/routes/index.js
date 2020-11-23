import Header from '../templates/Header';
import Footer from '../templates/Footer';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Profile from '../pages/Profile';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
  '/': Home,
  '/profile': Profile,
  '/portfolio': Portfolio,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const footer = null || document.getElementById('footer');
  const content = null || document.getElementById('content');

  header.innerHTML = Header();
  footer.innerHTML = Footer();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : '<h1>Error! 404</h1>';
  content.innerHTML = await render();
};


export default router;
