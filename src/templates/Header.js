const Header = ()=>{
  const view = `
  <ul class='menu'>
    <li>
      <a href='/' id='profile'>Home</a>
    </li>
    <li>
      <a href='#/profile' id='profile'>Profile</a>
    </li>
    <li>
      <a href='#/portfolio'>Portfolio</a>
    </li>
  </ul>
  `
  return view;
}

export default Header;