import React from 'react'
import "./Workcard.css"
import WorkCard from "./WorkCard";
import  Workcarddata from './Workcarddata'  
// import { NavLink } from 'react-router-dom';

const Work= (props) => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'> Projects</h1>
      <div className='project-container'>
        {Workcarddata.map((val,ind)=>{
            return (
                <WorkCard key={ind}  imgsrc={val.imgsrc} title={val.title} description={val.description} demoLink={val.demoLink} codeLink={val.codeLink} tags={val.tags}  />
            );
        })}
       
      </div>
      
    </div>
  );
}

export default Work;

