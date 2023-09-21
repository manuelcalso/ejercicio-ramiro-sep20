
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

    return( <>
    <div id='navcontenedor'>
    <nav>{navLinks}</nav>
    <img src={props.imagen}/>
    </div>
    </>
    )
}
export default NavBar;