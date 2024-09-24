import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import userdata  from './UserData'
import UserCard from './UserCard'

console.log(userdata);

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }else tx = 0;
        slider.current.style.transform = `translateX(${tx}%)`;
    };
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }else tx = -50;
        slider.current.style.transform = `translateX(${tx}%)`;
    };

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="next" onClick={slideForward} className="next-btn" />
        <img src={back_icon} alt="previous" onClick={slideBackward}className="back-btn" />
        <div className="slider">
            <ul ref={slider}>
                {
                    userdata.map((user,index)=>{
                        return(
                                <UserCard
                                key ={ index}
                                imgUrl = {user.imgURL}
                                name = {user.name}
                                country = {user.country}
                                para = {user.para}
                                />
                        );
                    })
                }
                
            </ul>
        </div>
    </div>
  )
}

export default Testimonials