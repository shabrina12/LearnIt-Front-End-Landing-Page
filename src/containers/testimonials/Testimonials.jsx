import React from "react";
import Slider from "react-slick";
import {stars5, tandapetik} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './testimonials.css';

function Testimonials() {
    const TestiCard = ({desc, name, img}) => {
        return (
            <div className="testimonial-card">
                <div>
                    <img className="img-petik" src={tandapetik} alt='petik' />
                </div>
                <p>{desc}</p>
                <div className="starName-container">
                    <img src={stars5} alt='stars' />
                    <h4>{name}</h4>
                </div>
                <div>
                    <img src={img} alt='profile' className="img-profile"/>
                </div>
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    
    return (
        <div className="testimonials-container">
            <SubHeading subtitle='TESTIMONIALS' title='What our Students Say' desc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' />
            <Slider {...settings}>
                <TestiCard desc="I'm a huge fan of Learnit courses! I've been using them for years and the content is always really relevant and up to date" name='Danial Walkman' img='https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                <TestiCard desc='I have used a lot of online courses in the past, but have not found anything that compares to Learnit. Their training is unparalleled' name='Cecelia Davenport' img='https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                <TestiCard desc="I am a self-taught artist and I've taken courses from Learnit. The courses are well designed, easy to follow and affordable." name='Dariella Ball' img='https://images.unsplash.com/photo-1508602636771-613ba0112c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
                <TestiCard desc="I'm a huge fan of Learnit courses! I've been using them for years and the content is always really relevant and up to date" name='Danial Walkman' img='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
                <TestiCard desc='I have used a lot of online courses in the past, but have not found anything that compares to Learnit. Their training is unparalleled' name='Cecelia Davenport' img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                <TestiCard desc="I am a self-taught artist and I've taken courses from Learnit. The courses are well designed, easy to follow and affordable." name='Dariella Ball' img='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            </Slider>
        </div>
      );
  }

  export default Testimonials;