import React from 'react'
import './profilecard.css';


interface ProfileCardProps {
    name: string;
    image: string;
    onClick: () => void;
  }

const Profilecard:React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
  return (
    <div>

    <div className='profile-card' onClick={onClick}>
      <div className='image-container'>
        <div>
            <img src={image} alt={`${name} Profile`} className='profile-picture' />
        </div>
        <h3 className='profile-name'>{name}</h3>
      </div>
    </div>
    </div>
  )
}

export default Profilecard
