import React from 'react';
import ImagemPerfil from '../imagens/foto-perfil.jpeg';

function WhoIm(){
  return(
    <div className="who-i-am">
      <img className="foto-perfil"
      alt="foto-perfil"
      src={ ImagemPerfil}></img>
      <div>
      <h1> Olá, Eu sou Iago dos Anjos </h1>
      <p className="who-i-am-text">Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's 
         standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also 
         the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets 
         containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default WhoIm;