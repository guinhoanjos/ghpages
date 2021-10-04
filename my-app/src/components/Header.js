import React from 'react';

function Header(){
  return(
    <nav className="header-navigation">
      <a
      className="header-link"
      href="#about-me"
      >
        Sobre mim
      </a>
      <a
      className="header-link"
      href="#my-stacks"
      >Minhas Stacks</a>
      <a
      className="header-link"
      href="#my-projects"
      >Meus projetos</a>
      <a
      href="#contact"
      className="header-link"
      >Contato</a>
    </nav>
  )
}

export default Header;