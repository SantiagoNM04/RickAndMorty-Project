import './Card.css'
import { useState } from 'react';
import { InfoCard } from '../infoCards/InfoCard'
import ReactCardFlip from 'react-card-flip'

export const Card = ({allData}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = () => {
      setIsFlipped(!isFlipped);
    }

  return (
    <div className='card-container rounded-4 mb-2 p-3 col-lg-2' onClick={flipCard}>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className='d-flex flex-column justify-content-center align-items-center' onClick={() => {setShowInfo(true)}}>
          <img className='character-img col-lg-12 col-md-8 rounded-5 mb-2' src={allData.image} alt={allData.name} />
          <h2 className='text-center mt-2'>{allData.name}</h2>
          <button className='button-card rounded-1 p-2'>Know More</button>
        </div>
        {showInfo == true ? 
          <InfoCard
            status={allData.status} 
            species={allData.species} 
            origin={allData.origin.name} 
            gender={allData.gender}
            setShowInfo={setShowInfo}
          />: ''}
      </ReactCardFlip>
    </div>
  )
}
