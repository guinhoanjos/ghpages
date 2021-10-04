import React from 'react';
import dataStacks from '../Data/dataStacks';

export default function Stacks(){

  return(
  <div id="my-stacks" className="stack-container">
    {dataStacks.map((stack, index) => (
      <div key={index} className="stack-card">
        <h4>{stack.nome}</h4>
        <img
        className="stack-icon"
        alt={`icone da stack ${stack.nome}`}
        src={stack.icone}>
        </img>
      </div>
    ))}
  </div>
  )
}