const Portfolio = ()=>{
  const view = `
    <div class='portfolio'>
        <div class='portfolio__titles'>
            <h4>An overview to my projects</h4>
            <h1>My projects</h1>
        </div>
      <div>
        <div class='portfolio__item'>
          <a href="https://asismelgarejo.github.io/P-MyUfaber/" target="_blank"><img src="https://i.imgur.com/xG3uhB2.png" alt='my ufaber project' class='portfolio__item--image' /></a>
          <h3>My Ufaber</h3>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <p>This project was developed using only the most fundamental tools of web development.</p>
          <a href="https://github.com/asismelgarejo/P-MyUfaber" target="_blank">GitHub repository</a>
        </div>    
        <div class='portfolio__item'>
          <a href="https://asismelgarejo.github.io/MyIntranet/index.html" target="_blank"><img src="https://i.imgur.com/R4Rlze6.png" alt='my ufaber project' class='portfolio__item--image' /></a>
          <h3>My Intranet</h3>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <p>This is a recreation of my University's intranet made only with basic web development tools.</p>
          <a href="https://github.com/asismelgarejo/MyIntranet" target="_blank">GitHub repository</a>
        </div>   
      </div>
    </div>
  `

  return view;
}

export default Portfolio;