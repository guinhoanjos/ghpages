import React from 'react';
import Starwars from '../Data/imagens/project-image/Starwars.gif';

function imageProject(projectName){
  switch (projectName){
    case "Starwars Planets  Search":
      return Starwars;
    default:
      return Starwars;
  }
}
export default function CardProjects({project}){
  return(
    <div id="my-projects"className="project-container">
      <img
      alt="imagem do projeto"
      src={imageProject(project.nome)}
      className="project-image"
      />
      <div className="mid-container">
        <div>
          <h4>{project.nome}</h4>
          <p>{project.descricao}</p>
        </div>
        <nav className="nav-link-project">
         <a
         href={`${project.linkDeploy}`}>Link do deploy</a>
        </nav>
      </div>
    </div>
  )
}