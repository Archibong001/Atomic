import React from 'react'

export default function Card(props) {
  return (
    <div className='cards' >

    <div className="card1">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <div className='bulb'>
        <img src="public/Images/bulb.jpg" alt="" />
        </div>
        
      </div>
    </div>

    <div className="card2">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content2">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <div className='carrot'>
        <img src="public/Images/carrot.jpg" alt="" />
        </div>
        
      </div>
    </div>


    <div className="card3">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content3">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <div className='infinity'>
        <img src="public/Images/infinity.jpg" alt="" />
        </div>
        
      </div>
    </div>

    </div>

  )
}
