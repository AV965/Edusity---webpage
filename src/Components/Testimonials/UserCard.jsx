import React from 'react'

const UserCard = ({imgUrl,name,country,para}) => {
  return (
    <li>
                <div className="slide">
                <div className="user-info">
                    <img src={imgUrl} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <span>{country}</span>
                        
                    </div>
                </div>
                <p>{para}</p>
            </div>
    </li>
  )
}

export default UserCard