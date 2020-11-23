const Profile = ()=>{
  const view = `
    <div class='profile'>
        <section class='hero'>
        <img class='hero__background' src='https://www.japan-guide.com/thumb/destination_tokyo.jpg' alt='' />
        <figure class='profile__avatar'>
          <img src='https://i.pinimg.com/originals/4a/ff/39/4aff399253c4e782f411d2443d059bd1.jpg' alt='shinobu' className='avatar-container__image is-active' id='avatar' />
        </figure>
        <div class='hero__description'>
          <h1>Asís Melgarejo / Frontend Developer</h1>
          <p>
            Suspendisse potenti. Nam commodo luctus sollicitudin.
            Maecenas id turpis nec risus viverra facilisis.
            Vivamus et lacus posuere diam laoreet congue accumsan eget ligula.
            Curabitur ornare rutrum lorem, eget
            fermentum quam mollis ut. Quisque arcu enim, accumsan eu congue quis, tempus at ex.
            Sed feugiat ligula
            ipsum, condimentum condimentum est dictum sit amet. In id gravida odio.
            Nullam aliquet odio ligula,
            at mattis turpis varius sed. Nunc ullamcorper imperdiet tristique. Suspendisse potenti.
          </p>
        </div>
      </section>
      <section class='general'>
        <section class='hobbies'>
          <h3>Hobbies</h3>
          <span>
            <div></div>
            <p>Reading</p>
          </span>
          <span>
            <div></div>
            <p>Reading</p>
          </span>
          <span>
            <div></div>
            <p>Reading</p>
          </span>
          <span>
            <div></div>
            <p>Reading</p>
          </span>
          <span>
            <div></div>
            <p>Reading</p>
          </span>
          <span>
            <div></div>
            <p>Reading</p>
          </span>
        </section>
        <section class='references'>
          <h3>References</h3>
          <p><span>Leonard Smith </span>CEO autho0</p>
          <p>Phone +00 890 1223 8765</p>
        </section>
      </section>
      <section class='skills'>
        <h3>Skills</h3>
        <div class='skills__item'>
            <p>HTML</p>
            <div class='skills__container'><div class='skills__item--html'></div></div>
        </div>
        <div class='skills__item'>
            <p>JavaScript</p>
            <div class='skills__container'><div class='skills__item--javascript'></div></div>
        </div>
        <div class='skills__item'>
            <p>CSS</p>
            <div class='skills__container'><div class='skills__item--css'></div></div>
        </div>
        <div class='skills__item'>
            <p>React</p>
            <div class='skills__container'><div class='skills__item--react'></div></div>
        </div>
    </section>
      <section class='data'>
        <table>
          <tr>
            <th>Nacionality</th>
            <th>Peruvian</th>
            <th>Experience</th>
            <th>1+ years</th>
          </tr>
          <tr>
            <th>Date of birth</th>
            <th>16-01-2001</th>
            <th>Languages</th>
            <th>English, Spanish</th>
          </tr>
        </table>
      </section>
    </div>
  `

  return view;
}

export default Profile;