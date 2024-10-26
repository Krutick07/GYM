import React from 'react'
import {plansData, PlansDate} from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
  return (
    <div className='plans-contsiner' id='plan'>
        <div className="blur p-blur-1"></div>
        <div className="blur p-blur-2"></div>
        <div className="program-header" style={{gap: '2rem'}}>
            <span className='text-stroke'>READY TO START</span>
            <span>YOUR JOURNAY</span>
            <span className='text-stroke'>NOW WITH US</span>
        </div>

        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whitetick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See more Benefits -> </span>
                    </div>

                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans