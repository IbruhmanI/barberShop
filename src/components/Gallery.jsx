import React from 'react'
import Slider from "react-slick";
import slide from '../assets/image/slide-o.webp'

export const Gallery = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <div id="gallery">
            <div className="container">
                <div className="gallery">
                    <h4>Галерея</h4>
                    <div className="gallery-upper">
                        <h2>Приходите к нам за своим новым стилем.</h2>
                    </div>
                    <div className="gallery-slider">
                        <Slider {...settings}>
                            <img src={slide} alt="" />
                            <img src={slide} alt="" />
                            <img src={slide} alt="" />
                            <img src={slide} alt="" />
                            <img src={slide} alt="" />
                            <img src={slide} alt="" />
                            <img src={slide} alt="" />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
