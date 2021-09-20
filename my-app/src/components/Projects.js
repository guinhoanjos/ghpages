import React from 'react';
import CardProjects from './CardProject';
import dataProject from '../Data/dataProject';
import { useState } from 'react';

export default function Projects(){
  const [ prjNumber, setPrjNumber] = useState(0)

    setTimeout(() =>{
      if(prjNumber < dataProject.length -1) {
        setPrjNumber(prjNumber +1)
      } else {
        setPrjNumber(0)
      }
    }, 15000)
  return(
    <CardProjects project={dataProject[prjNumber]} />
  )
}