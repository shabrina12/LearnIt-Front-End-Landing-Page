# Responsive Front End Website - LearnIt Course using React JS
This project is a single page web front end for Learn It using the React JS framework. I created this project as an exercise to develop front end skills

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

- Build out the project to the designs provided
- Adding slider for the testimonial section

### Screenshot

![Design preview for LearnIt landing page](./src/images/header-learnit.png)

### Links
- [Live Site URL](https://learn-it-front-end-webpage.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React JS](https://reactjs.org/) - JS library
- [react icons](https://react-icons.github.io/react-icons/) - JS library to add icons
- [react slick](https://react-slick.neostack.com/) - React Slick is library for creating carousels. It offers accessibility and responsiveness, amongst other features to help create performant carousels


### What I learned

I learned a simple way to add slider function in testimonial section using react slick library

Code snippets, see below:
```js
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
```

![Overview for testimonials section](./src/images/testimonials-learnit.png)

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development
The development of this project can be continued by creating multiple page for each list in navigation bar, and implementing infinite scrolling in the feature courses section

### Useful resources
- [Figma Web Design & elements i used for this project is published by Dmm Kreativ](https://ui8.net/dmm-kreativ/products/uniquepages?status=7)
- [UI/UX Design Resources](https://ui8.net/) - This website provide many UI/UX design some are free. I really liked this website and will use it going forward.
- [Article about creating carousel using react slick](https://blog.logrocket.com/create-carousel-react-slick/) - This is an article which helped me understand react slick.
- [Youtube video on category filtering in React JS](https://www.youtube.com/watch?v=cbEHLalLLeM)
- [Article about category filtering in React JS](https://contactmentor.com/filter-list-by-category-react-js/)


## Author

- Github - [Shabrina Putri](https://github.com/shabrina12/)
- Instagram - [@shabputri_](https://www.instagram.com/shabputri_/)

