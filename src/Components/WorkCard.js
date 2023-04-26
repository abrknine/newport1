import React from 'react'
import "./Workcard.css"
// import ProjectCardData from './Workcarddata';
import { NavLink } from 'react-router-dom';
// import WorkCard from './WorkCard';


const WorkCard = (props) => { 
  return(
    <div className='project-card'>
    <img src={props.imgsrc} alt="image" />
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
      <p>{props.description}</p> 
      <div className='tags'>

        {(props.tags).map((tag) => (
          <span key={tag} className=" tag">
            {tag}
          </span>
        ))}
      </div>
      
      <div className='pro-btns'>
        <NavLink to={props.demoLink} className="btn"> View </NavLink>
        <NavLink to={props.codeLink} className="btn"> Source </NavLink>

      </div>
    </div>
  </div>
  )
}

export default WorkCard;
