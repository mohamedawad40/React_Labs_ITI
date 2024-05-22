import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './Slider.css'
export function Slider() {
  return (
    <div className='slider'>
        <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem itemId={1}>
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='First slide'
        />
        <div className='carousel-caption d-none d-md-block'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Second slide'
        />
        <div className='carousel-caption d-none d-md-block'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Third slide'
        />
        <div className='carousel-caption d-none d-md-block'>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}
