import React from 'react'
import {bookIcon, watchIcon} from '../../images';

const CourseCard = ({courseMenu}) => {
    return (
        <div className='courses-container'>
            {
                courseMenu.map((item) =>{
                    return (
                        <div className='course-card' key={item.id}>
                            <img src={item.img} alt='img' />
                            <p>{item.category}</p>
                            <h2>{item.title}</h2>
                            <div className='icon-container'>
                                <img src={bookIcon} alt='icon' />
                                <p>{item.total}</p>
                                <img src={watchIcon} alt='watch' />
                                <p>{item.time}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseCard