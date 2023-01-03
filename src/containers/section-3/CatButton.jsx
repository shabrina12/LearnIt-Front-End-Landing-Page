import React from 'react'

const CategoryButton = ({button, filter}) => {
    return (
        <div className="links-course-container">
          <ul>
            {
                button.map((cat, i)=>{
                    return (
                        <li className='course-btn' key={i} onClick={()=> filter(cat)}>{cat}</li>                        
                    ) 
                })
            }
            </ul>
        </div>
    )
}

export default CategoryButton