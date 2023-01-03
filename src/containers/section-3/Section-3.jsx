import React, {useState} from 'react'
import SubHeading from '../../components/subHeading/SubHeading';
import Data from './CourseData';
import CategoryButton from './CatButton';
import CourseCard from './CourseCard';
import './section3.css'

const allCategories = ['All', ...new Set(Data.map(course => course.category))];

const Section3 = () => {
    const [courseMenu, setCourseMenu] = useState(Data);
    const [buttons, setButtons] = useState(allCategories);
  
    //filter category function
    const filter = (button) =>{
      if(button === 'All'){
        setCourseMenu(Data);
        return;
      }
      const filteredData = Data.filter(course => course.category ===  button);
      setCourseMenu(filteredData)
    }
  
    return (
        <section className='section-3'>
            <SubHeading subtitle='COURSE FEATURES' title='Featured Courses' desc='Pursue your interests at your own pace by choosing the course duration, number of lessons per week, and lectures per day' />
            <CategoryButton button={buttons} filter={filter} />
            <div className='container'>
                <CourseCard courseMenu={courseMenu}/>
                <button type='button'>See All</button> 
            </div>
        </section>
    );
}

export default Section3