import React from 'react';

function NavBar(props) {

    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
           &nbsp;{page}
        </a>
      )
    });

    return( 
    <>
      <div id='navcontenedor'>
        <nav>{navLinks}</nav>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1518122116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/callsodnb"
            title="Calso dnb"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Calso dnb
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/callsodnb/calzoo-vicpet"
            title="Calzoo - VicPet"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Calzoo - VicPet
          </a>
        </div>
      </div>
    </>
    )
}

export default NavBar;