import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rightarrow from '../../assets/rightArrow.png'

export const Program = () => {
  return (
    <div className="program" id="program">
        <div className="program-header">
            <span className='text-stroke'>Explore our</span>
            <span>Programs</span>
            <span className='text-stroke'>to Shape you</span>
        </div>

        <div className="program-catogory">
            {programsData.map((program) =>(
                <div className="catogroy">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={rightarrow} alt="" /></div>
                </div>
                
            ))}
        </div>
    </div>
  )
}
