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

const router = () => {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const content = document.getElementById('content');

  header.innerHTML = Header();
  footer.innerHTML = Footer();

  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : '<h1>Error! 404</h1>';
  content.innerHTML = render();
};


export default router;
