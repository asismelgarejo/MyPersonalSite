import anime from './icons/anime';
import running from './icons/running';
import reading from './icons/reading';

const Profile = ()=>{
  const view = `
    <div class='profile'>
        <section class='hero'>
        <img class='hero__background' src='https://www.japan-guide.com/thumb/destination_tokyo.jpg' alt='' />
        <figure class='profile__avatar'>
          <img src='https://i.imgur.com/HXcUOVQ.jpg' alt='avatar' className='avatar-container__image is-active' id='avatar' />
        </figure>
        <div class='hero__description'>
          <h1>Asis Melgarejo&ensp;&ensp;/&ensp;&ensp;Frontend Developer</h1>
          <p>
            Hola! Soy estudiante de ingenieria de sistemas y un apasinado por
            las tecnologías web. En la Internet existen varias formas de transmitir
            información (FTP,SMTP,HTTP, etc) y la web es una de las más importantes.
            Actualmente me enfoco en todo lo que sucede en lado del cliente, pero también tengo
            la intención de dominar tecnologías del servidor, y así poder crear aplicaciones
            completas por mi cuenta...ser FULLSTACK, es eso.
          </p>
        </div>
      </section>
      <section class='general'>
        <section class='hobbies'>
          <h3>Hobbies</h3>
          <span>
            <div>${running()}</div>
            <p>Running</p>
          </span>
          <span>
            <div>${reading()}</div>
            <p>Reading</p>
          </span>
          <span>
            <div>${anime()}</div>
            <p>Anime</p>
          </span>
        </section>
        <section class='references'>
          <h3>References</h3>
          <!--<p><span>Leonard Smith </span>CEO autho0</p>
          <p>Phone +00 890 1223 8765</p>-->
        </section>
      </section>
      <section class='skills'>
        <h3>Skills</h3>
        <div class='skills__item'>
            <p>HTML</p>
            <div class='skills__container'><div class='skills__item--html'><div></div></div></div>
        </div>
        <div class='skills__item'>
            <p>JavaScript</p>
            <div class='skills__container'><div class='skills__item--javascript'><div></div></div></div>
        </div>
        <div class='skills__item'>
            <p>CSS</p>
            <div class='skills__container'><div class='skills__item--css'><div></div></div></div>
        </div>
        <div class='skills__item'>
            <p>React</p>
            <div class='skills__container'><div class='skills__item--react'><div></div></div></div>
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